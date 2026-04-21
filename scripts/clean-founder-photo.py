"""Remove Gemini watermarks from founder portrait via targeted inpainting."""
import cv2
import numpy as np
from pathlib import Path

SRC = Path(r"C:\Users\yosia\Downloads\Gemini_Generated_Image_f9yk29f9yk29f9yk.png")
OUT_DIR = Path(r"C:\Users\yosia\.claude-server-commander\ya-ace-media\public")
OUT = OUT_DIR / "yossi-founder.jpg"

img = cv2.imread(str(SRC))
if img is None:
    raise SystemExit(f"Cannot read {SRC}")
h, w = img.shape[:2]
print(f"src: {w}x{h}")

# Build inpainting mask for watermark regions.
# The Gemini grid watermark in top-left sits within a bounding box of roughly:
#   x: 350..1300  (about 19% to 73% across)
#   y: 80..420    (about 3% to 18% down)
# And the tiny diamond/sparkle near the shirt at roughly (1690, 2230), ~30px radius.
mask = np.zeros((h, w), dtype=np.uint8)

# Top-left grid watermark — generous rectangle
cv2.rectangle(mask, (int(w * 0.18), int(h * 0.025)),
              (int(w * 0.75), int(h * 0.20)), 255, -1)

# Bottom-right sparkle on shirt — small circle
cv2.circle(mask, (int(w * 0.945), int(h * 0.935)), 55, 255, -1)

# Dilate slightly so the inpaint grabs enough context
mask = cv2.dilate(mask, np.ones((5, 5), np.uint8), iterations=2)

cleaned = cv2.inpaint(img, mask, 9, cv2.INPAINT_TELEA)

# Optional: another pass with NS for smoother blend on the large region
cleaned = cv2.inpaint(cleaned, mask, 9, cv2.INPAINT_NS)

OUT_DIR.mkdir(parents=True, exist_ok=True)

# Save the master JPG at quality 90 (good for hero portrait)
cv2.imwrite(str(OUT), cleaned, [cv2.IMWRITE_JPEG_QUALITY, 90, cv2.IMWRITE_JPEG_PROGRESSIVE, 1])
print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.1f} KB)")

# Also emit a small WebP for the responsive srcset (Next.js with unoptimized images
# — we'll emit multiple sizes manually).
from PIL import Image
pil = Image.fromarray(cv2.cvtColor(cleaned, cv2.COLOR_BGR2RGB))
for target_w, suffix in [(640, "-sm"), (1024, "-md"), (1600, "-lg")]:
    ratio = target_w / pil.width
    target_h = int(pil.height * ratio)
    resized = pil.resize((target_w, target_h), Image.LANCZOS)
    path_jpg = OUT_DIR / f"yossi-founder{suffix}.jpg"
    path_webp = OUT_DIR / f"yossi-founder{suffix}.webp"
    resized.save(path_jpg, "JPEG", quality=86, progressive=True, optimize=True)
    resized.save(path_webp, "WEBP", quality=82, method=6)
    print(f"wrote {path_jpg.name} + {path_webp.name} ({target_w}x{target_h})")

# Master WebP
pil.save(OUT_DIR / "yossi-founder.webp", "WEBP", quality=85, method=6)
print("done")
