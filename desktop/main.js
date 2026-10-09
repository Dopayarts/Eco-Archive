// Desktop shell: opens Eco-Archive in its own window.
// It shows the live website, so new plants appear without reinstalling, and falls
// back to the copy in this folder when offline. It also keeps an up-to-date
// spreadsheet of every plant at Documents\Eco-Archive\plants.csv.
const { app, BrowserWindow, shell } = require('electron');
const fs = require('fs');
const path = require('path');

const SITE = 'https://taupe-cranachan-86c8d7.netlify.app';

async function savePlantFiles() {
  try {
    const dir = path.join(app.getPath('documents'), 'Eco-Archive');
    fs.mkdirSync(dir, { recursive: true });
    for (const name of ['plants.csv', 'plants.json']) {
      const r = await fetch(`${SITE}/${name}`, { cache: 'no-store' });
      if (r.ok) fs.writeFileSync(path.join(dir, name), Buffer.from(await r.arrayBuffer()));
    }
  } catch (e) { /* offline: keep the last saved copy */ }
}

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 1280, height: 760, backgroundColor: '#0f380f', title: 'Eco-Archive', autoHideMenuBar: true });
  win.loadURL(SITE).catch(() => win.loadFile(path.join(__dirname, '..', 'index.html')));
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
  savePlantFiles();
  setInterval(savePlantFiles, 60 * 60 * 1000); // refresh every hour while open
});
app.on('window-all-closed', () => app.quit());
