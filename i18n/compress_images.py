"""
compress_images.py — shrink the embedded base64 images in the standalone
portfolio bundle before running build_i18n.js, so the final multilingual
file stays well under common upload/host size limits.

Usage:
    python3 compress_images.py <standalone-source.html> <compressed-output.html>

What it does:
    - Finds every embedded "images/xxx.jpg": "data:image/...;base64,..." entry
    - Resizes anything wider/taller than MAX_DIM (long edge) down to MAX_DIM
    - Re-encodes as JPEG at QUALITY with optimize+progressive
    - Keeps the original bytes if re-encoding didn't actually save space
    - Leaves everything else in the file untouched

On the 09/2026 portfolio bundle this cut the embedded-image payload from
~13.2 MB to ~7.6 MB (~42% smaller), with no visible quality loss on either
screenshots (text stays sharp) or photos. Re-run this whenever new images
are added to the portfolio, then feed the OUTPUT of this script into
build_i18n.js as its <source.html> argument.
"""
import re, sys, base64, io
from PIL import Image

MAX_DIM = 1600
QUALITY = 74
# Diagram-like images whose text must stay readable on Retina screens keep a larger long edge / higher quality.
KEEP_SHARP = {
    'images/dream-christmas-journey.jpg': (2800, 86),
}

def main(src_path, out_path):
    s = open(src_path, encoding='utf-8').read()
    pattern = re.compile(r'"(images/[^"]+)":\s*"data:(image/[a-z]+);base64,([A-Za-z0-9+/=]+)"')
    matches = list(pattern.finditer(s))
    total_before = total_after = 0
    new_s = s
    for m in matches:
        name, mime, b64 = m.group(1), m.group(2), m.group(3)
        raw = base64.b64decode(b64)
        total_before += len(raw)
        im = Image.open(io.BytesIO(raw))
        w, h = im.size
        max_dim, quality = KEEP_SHARP.get(name, (MAX_DIM, QUALITY))
        scale = min(1.0, max_dim / max(w, h))
        im = im.convert('RGB')
        if scale < 1.0:
            im = im.resize((max(1, int(w * scale)), max(1, int(h * scale))), Image.LANCZOS)
        buf = io.BytesIO()
        im.save(buf, format='JPEG', quality=quality, optimize=True, progressive=True)
        new_bytes = buf.getvalue()
        if len(new_bytes) < len(raw):
            total_after += len(new_bytes)
            new_b64 = base64.b64encode(new_bytes).decode('ascii')
            new_s = new_s.replace(m.group(0), f'"{name}": "data:image/jpeg;base64,{new_b64}"', 1)
        else:
            total_after += len(raw)
    open(out_path, 'w', encoding='utf-8').write(new_s)
    print(f'images: {len(matches)} | before: {total_before/1e6:.2f} MB | '
          f'after: {total_after/1e6:.2f} MB | saved: {(total_before-total_after)/1e6:.2f} MB '
          f'({(1-total_after/max(total_before,1))*100:.0f}%)')
    print(f'file size: {len(s)/1e6:.2f} MB -> {len(new_s)/1e6:.2f} MB')

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(__doc__)
        sys.exit(1)
    main(sys.argv[1], sys.argv[2])
