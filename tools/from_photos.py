"""Turn photos of a plant into Eco-Archive data.

    python3 tools/from_photos.py <photo-folder> <plant-id>

The folder holds:
  leaf.png / leaf.jpg     one leaf flat on plain white paper, tip pointing UP, stalk down
  plant.png / plant.jpg   the whole plant
  flower.png / flower.jpg (optional) a close-up of the flower

Writes plants/<plant-id>.photos.js with:
  - the leaf outline traced from the leaf photo (a width profile the 3D renderer
    uses for every leaf on the plant, and for the leaf view),
  - the leaf, plant and flower photos as 4-shade Game Boy pixel art for the record.
It also prints measurements to help fill in the plant's `form` record.
Needs numpy and Pillow.
"""
import base64, io, json, os, sys
import numpy as np
from PIL import Image, ImageOps

PAL = [(15, 56, 15), (48, 98, 48), (139, 172, 15), (155, 188, 15)]
BAYER = np.array([[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]) / 16 - 0.5
SIZE = 112  # pixel-art size of each photo


def find(folder, name):
    for ext in ('.png', '.jpg', '.jpeg', '.webp', '.PNG', '.JPG', '.JPEG'):
        p = os.path.join(folder, name + ext)
        if os.path.exists(p):
            return p
    return None


def load(path, max_side=480):
    im = ImageOps.exif_transpose(Image.open(path)).convert('RGBA')
    im.thumbnail((max_side, max_side))
    return im


def leaf_mask(im):
    """Leaf pixels: anything that differs clearly from the paper colour."""
    a = np.asarray(im).astype(float)
    rgb, alpha = a[..., :3], a[..., 3]
    if alpha.min() < 128:  # already cut out
        mask = alpha > 128
    else:
        border = np.concatenate([rgb[0], rgb[-1], rgb[:, 0], rgb[:, -1]])
        bg = np.median(border, axis=0)
        dist = np.sqrt(((rgb - bg) ** 2).sum(-1))
        mask = dist > otsu(dist)
    mask = largest_component(mask)
    return fill_holes(mask)


def otsu(x):
    hist, edges = np.histogram(x, bins=128)
    p = hist / hist.sum()
    w = np.cumsum(p)
    mu = np.cumsum(p * edges[:-1])
    between = (mu[-1] * w - mu) ** 2 / (w * (1 - w) + 1e-9)
    return edges[np.argmax(between)]


def components(mask):
    h, w = mask.shape
    lab = np.zeros((h, w), int)
    n = 0
    for y, x in zip(*np.nonzero(mask)):
        if lab[y, x]:
            continue
        n += 1
        stack = [(y, x)]
        lab[y, x] = n
        while stack:
            cy, cx = stack.pop()
            for ny, nx in ((cy + 1, cx), (cy - 1, cx), (cy, cx + 1), (cy, cx - 1)):
                if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not lab[ny, nx]:
                    lab[ny, nx] = n
                    stack.append((ny, nx))
    return lab, n


def largest_component(mask):
    lab, n = components(mask)
    if not n:
        raise SystemExit('No leaf found. Photograph the leaf on plain white paper.')
    sizes = np.bincount(lab.ravel())[1:]
    return lab == (np.argmax(sizes) + 1)


def fill_holes(mask):
    lab, n = components(~mask)
    edge = set(lab[0]) | set(lab[-1]) | set(lab[:, 0]) | set(lab[:, -1])
    out = mask.copy()
    for k in range(1, n + 1):
        if k not in edge:
            out |= lab == k
    return out


def upright(im, mask):
    """Rotate so the leaf's long axis is vertical, keeping the tip at the top."""
    ys, xs = np.nonzero(mask)
    cov = np.cov(np.stack([xs - xs.mean(), ys - ys.mean()]))
    vals, vecs = np.linalg.eigh(cov)
    vx, vy = vecs[:, np.argmax(vals)]
    if vy > 0:
        vx, vy = -vx, -vy  # point the axis upward, the way the leaf was photographed
    angle = np.degrees(np.arctan2(vx, -vy))
    if abs(angle) > 60:
        angle = 0  # trust the photo if the leaf is nearly round
    m = Image.fromarray((mask * 255).astype(np.uint8)).rotate(angle, expand=True, resample=Image.NEAREST)
    im = im.rotate(angle, expand=True, resample=Image.BICUBIC)
    m = np.asarray(m) > 127
    ys, xs = np.nonzero(m)
    box = (xs.min(), ys.min(), xs.max() + 1, ys.max() + 1)
    return im.crop(box), m[box[1]:box[3], box[0]:box[2]]


def profile(mask, n=48):
    """Half-widths of the leaf from base (stalk) to tip, scaled so the widest is 1."""
    rows = mask[::-1]  # bottom row first: the base
    w = np.array([(np.ptp(np.nonzero(r)[0]) + 1) if r.any() else 0 for r in rows], float)
    blade = np.nonzero(w > w.max() * 0.12)[0]  # skip the thin stalk at the base
    w = w[blade[0]:blade[-1] + 1]
    samples = np.interp(np.linspace(0, len(w) - 1, n + 1), np.arange(len(w)), w)
    samples = samples / (samples.max() or 1)
    samples[-1] = 0
    return [round(float(v), 3) for v in samples], mask.shape[1] / len(w)


def edge_roughness(mask):
    """How toothed the edge is: 0 smooth, ~0.3 strongly toothed."""
    rows = [np.nonzero(r)[0] for r in mask]
    left = np.array([r.min() if len(r) else np.nan for r in rows])
    left = left[~np.isnan(left)]
    if len(left) < 10:
        return 0
    smooth = np.convolve(left, np.ones(9) / 9, mode='same')
    return round(float(np.clip(np.abs(left - smooth)[5:-5].mean() / (mask.shape[1] or 1) * 6, 0, 0.35)), 2)


def lobed(mask):
    """How deeply cut the leaf is, from how much of its outline hull it fills."""
    ys, xs = np.nonzero(mask)
    hull_area = 0
    for y in range(mask.shape[0]):
        r = np.nonzero(mask[y])[0]
        if len(r):
            hull_area += r.max() - r.min() + 1
    return round(1 - mask.sum() / max(1, hull_area), 2)


def pixel_art(im, mask=None, size=SIZE):
    """4 shades with an ordered dither, like a Game Boy camera photo."""
    im = im.copy()
    im.thumbnail((size, size), Image.LANCZOS)
    g = np.asarray(im.convert('L')).astype(float) / 255
    m = None
    if mask is not None:
        m = np.asarray(Image.fromarray((mask * 255).astype(np.uint8)).resize(im.size, Image.NEAREST)) > 127
    vals = g[m] if m is not None and m.any() else g
    lo, hi = np.percentile(vals, 3), np.percentile(vals, 97)
    g = np.clip((g - lo) / max(1e-3, hi - lo), 0, 1)
    h, w = g.shape
    t = BAYER[np.arange(h)[:, None] % 4, np.arange(w)[None, :] % 4]
    idx = np.clip(np.round(g * 3 + t * 0.9), 0, 3).astype(int)
    out = np.zeros((h, w, 4), np.uint8)
    for k, c in enumerate(PAL):
        out[idx == k, :3] = c
    out[..., 3] = 255 if m is None else (m * 255).astype(np.uint8)
    buf = io.BytesIO()
    Image.fromarray(out, 'RGBA').save(buf, 'PNG', optimize=True)
    return 'data:image/png;base64,' + base64.b64encode(buf.getvalue()).decode()


def main():
    if len(sys.argv) != 3:
        raise SystemExit(__doc__)
    folder, pid = sys.argv[1], sys.argv[2]
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    data, report = {}, {}
    leaf = find(folder, 'leaf')
    if leaf:
        im = load(leaf)
        im, mask = upright(im, leaf_mask(im))
        prof, aspect = profile(mask)
        data['leaf'] = {'profile': prof, 'wid': round(aspect, 2), 'image': pixel_art(im, mask)}
        report.update(width_to_length=round(aspect, 2), toothed=edge_roughness(mask), lobed=lobed(mask))
    for name in ('plant', 'flower'):
        p = find(folder, name)
        if p:
            data[name] = pixel_art(load(p))
    if not data:
        raise SystemExit('No leaf, plant or flower photo found in ' + folder)
    out = os.path.join(root, 'plants', pid + '.photos.js')
    with open(out, 'w') as f:
        f.write('// Generated by tools/from_photos.py from photos. Re-run the tool to update.\n')
        f.write(f'EA.addPhotos({json.dumps(pid)}, {json.dumps(data)});\n')
    print('wrote', out, f'({os.path.getsize(out) // 1024} KB)')
    if report:
        print('leaf measurements:', json.dumps(report))
        if report['lobed'] > 0.25:
            print('  deeply cut leaf: consider leaf.compound "palmate" or "pinnate" in the record')


if __name__ == '__main__':
    main()
