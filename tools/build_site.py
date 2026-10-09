"""Bundle Eco-Archive into one self-contained index.html for the website.

    python3 tools/build_site.py <output-folder>

Inlines style.css, every script, the archived specimens and the plants, then
exports plants.csv and plants.json next to it. Netlify runs this on every push
to the eco-archive GitHub repo (see netlify.toml) and publishes the folder.
"""
import json, os, re, shutil, subprocess, sys

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
out = os.path.abspath(sys.argv[1])
os.chdir(root)

def script(f):
    if f == 'specimens/index.js':  # inline each archived species instead of loading it at runtime
        ids = json.loads(re.search(r'loadAll\((\[.*?\])\)', open(f).read(), re.S).group(1))
        return ''.join(script(f'specimens/{i}/{n}.js') for i in ids for n in ('species', 'models'))
    if f == 'plants/index.js':
        src = open(f).read()
        ids = json.loads(re.search(r'loadPlants\((\[.*?\])', src, re.S).group(1))
        m = re.search(r'photos:\s*(\[.*?\])', src, re.S)
        photos = json.loads(m.group(1)) if m else []
        return ''.join(script(f'plants/{i}.js') + (script(f'plants/{i}.photos.js') if i in photos else '') for i in ids)
    return '<script>\n' + open(f).read().replace('</script', '<\\/script') + '\n</script>\n'

html = open('index.html').read()
html = html.replace('<link rel="stylesheet" href="style.css">', '<style>\n' + open('style.css').read() + '\n</style>')
html = re.sub(r'<script src="([^"]+)"></script>\n?', lambda m: script(m.group(1)), html)
os.makedirs(out, exist_ok=True)
open(os.path.join(out, 'index.html'), 'w').write(html)
print('wrote', os.path.join(out, 'index.html'), len(html) // 1024, 'KB')
subprocess.run(['node', os.path.join(root, 'tools', 'export_plants.cjs'), out], check=True)
