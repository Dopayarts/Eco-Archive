// Core: config, palette, the shared archive clock, and life-cycle maths.
window.EA = window.EA || {};

EA.config = {
  // The moment Eco-Archive went live. Every visitor sees the same garden
  // because every plant's age is measured from this instant.
  LIVE_AT: Date.UTC(2026, 9, 8, 17, 0, 0),
  // Plants grow at demo speed: how many archive days pass per real hour.
  // 1 = one plant-day per hour, so basil goes from seed to flower in about three
  // real days. The clock, seasons, weather and day/night use real Nigerian time.
  DAYS_PER_REAL_HOUR: 1,
  YEAR_DAYS: 360,
  // The growth calendar (for perennials' seasonal stages) has twelve 30-day
  // months, and on go-live day it read 8 October, the date Eco-Archive opened.
  CAL_START: 277,
  // Day and night follow the real clock in Nigeria (West Africa Time, UTC+1).
  UTC_OFFSET_HOURS: 1,
  // The website whose sync service the desktop app and local copies use.
  SYNC_URL: 'https://taupe-cranachan-86c8d7.netlify.app',
  // Classic Game Boy (DMG) palette, darkest to lightest.
  PAL: [[15, 56, 15], [48, 98, 48], [139, 172, 15], [155, 188, 15]],
};
EA.config.PAL_HEX = EA.config.PAL.map(c => '#' + c.map(v => v.toString(16).padStart(2, '0')).join(''));

EA.clock = {
  peek: 0, // days added by the "peek" command; never changes the shared clock
  realDays() {
    const hours = (Date.now() - EA.config.LIVE_AT) / 3600000;
    return Math.max(0, hours * EA.config.DAYS_PER_REAL_HOUR);
  },
  now() { return this.realDays() + this.peek; },
  MONTHS: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
  // Day of the growth calendar year (0 = 1 January), counted from go-live at demo speed.
  cal(d = this.now()) { return d + EA.config.CAL_START; },
  doy(d = this.now()) { const Y = EA.config.YEAR_DAYS; return ((this.cal(d) % Y) + Y) % Y; },
  // "OCT 26" for a calendar day of the year.
  date(doy) { return this.MONTHS[Math.floor(doy / 30) % 12] + ' ' + String(Math.floor(doy % 30) + 1).padStart(2, '0'); },
  // Real date and time in Nigeria (West Africa Time), with its season.
  parts() {
    const w = new Date(Date.now() + EA.config.UTC_OFFSET_HOURS * 3600000), month = w.getUTCMonth();
    const s = EA.clock.season(month);
    return { year: w.getUTCFullYear(), month, date: this.MONTHS[month] + ' ' + String(w.getUTCDate()).padStart(2, '0'),
      hh: w.getUTCHours(), mm: w.getUTCMinutes(), season: s.name, sub: s.sub };
  },
  // Nigeria's two seasons. Rains run roughly April to October (shorter in the
  // far north); the dry season runs November to March, with dusty harmattan
  // winds from the Sahara between December and February.
  season(month) {
    if (month >= 3 && month <= 9) return { id: 'rainy', name: 'RAINY', sub: month === 7 ? 'AUGUST BREAK' : '' };
    return { id: 'dry', name: 'DRY', sub: month === 11 || month <= 1 ? 'HARMATTAN' : '' };
  },
  stamp() {
    const p = this.parts();
    const z = n => String(n).padStart(2, '0');
    return `${p.year} ${p.date} ${z(p.hh)}:${z(p.mm)} ${p.season}`;
  },
  // Human wording for "how long in real time" a span of archive days takes.
  realSpan(days) {
    const mins = Math.round(days / EA.config.DAYS_PER_REAL_HOUR * 60);
    if (mins < 60) return `${mins}M`;
    const h = Math.floor(mins / 60);
    if (h < 48) return `${h}H ${mins % 60}M`;
    return `${Math.round(h / 24)} DAYS`;
  },
};

EA.lifecycle = {
  // Returns where a specimen is in its life right now.
  state(spec, day) {
    const sp = EA.species[spec.species];
    const vigor = spec.vigor || 1;
    if (sp.kind === 'annual') {
      const age = day - spec.sowDay;
      if (age < 0) {
        return { id: 'unsown', label: 'AWAITING SOWING', idx: -1, progress: 0, g: 0, daysLeft: -age, next: sp.stages[0], age, cycle: 0 };
      }
      const len = sp.stages.reduce((a, s) => a + s.days, 0);
      const cycle = Math.floor(age / len) + 1;
      let a = age % len;
      const inCycle = a;
      for (let i = 0; i < sp.stages.length; i++) {
        const s = sp.stages[i];
        if (a < s.days) {
          const progress = a / s.days;
          return {
            id: s.id, label: s.label, idx: i, progress,
            g: (s.g[0] + (s.g[1] - s.g[0]) * progress) * vigor,
            daysLeft: s.days - a, next: sp.stages[(i + 1) % sp.stages.length],
            age: inCycle, cycle, cycleLen: len,
          };
        }
        a -= s.days;
      }
    }
    // Perennials follow the seasons of the archive calendar.
    const doy = EA.clock.doy(day);
    const list = sp.seasons;
    for (let i = 0; i < list.length; i++) {
      const s = list[i];
      if (doy >= s.from && doy < s.to) {
        const progress = (doy - s.from) / (s.to - s.from);
        // Young plants skip flowering until they are old enough.
        const flowering = ['bud', 'bloom', 'seeding'];
        const tooYoung = spec.juvenile && flowering.includes(s.id);
        return {
          id: tooYoung ? list.find(x => !flowering.includes(x.id)).id : s.id,
          label: tooYoung ? 'TOO YOUNG TO FLOWER' : s.label, idx: i, progress,
          g: (s.g[0] + (s.g[1] - s.g[0]) * progress) * vigor,
          daysLeft: s.to - doy, next: list[(i + 1) % list.length],
          age: day - spec.plantedDay, cycle: Math.floor(EA.clock.cal(day) / EA.config.YEAR_DAYS) + 1,
        };
      }
    }
  },
};

// Deterministic random numbers so each specimen always grows the same shape.
EA.rng = function (seed) {
  return function () {
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};
