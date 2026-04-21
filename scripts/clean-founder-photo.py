"""Remove Gemini watermarks from founder portrait via precision mask + inpaint.

Strategy v2 — tighter mask:
- Detect anomalous pixels in the top-left region (watermark squares differ in
  luminance/chroma from the smooth gray background).
- Mask ONLY those small blobs (not a huge rectangle), so the surrounding
  gradient is preserved and no blurry halo appears above the head.
- Bottom-right sparkle: small targeted circle.
"""
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

# ---------- Top-left watermark: anomaly detection ----------
# Scan window: upper band where watermark can appear (above shoulders).
# Keep it conservative: x up to 85% (covers full top), y up to 25% of height.
band = np.zeros((h, w), dtype=np.uint8)
band[0:int(h * 0.27), 0:int(w * 0.85)] = 255

# Exclude the head/face region (roughly centred around x=0.55w, y=0.35h, radius=0.22w).
# But head is BELOW y=0.27h mostly (face starts around y=0.25h). The top band above
# shoulder is safe — add extra safety by excluding a head-silhouette wedge.
cv2.ellipse(band, (int(w * 0.56), int(h * 0.46)), (int(w * 0.34), int(h * 0.42)),
            0, 0, 360, 0, -1)

# Gray-scale, smooth, diff against a heavily blurred version of the same region.
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
blur = cv2.GaussianBlur(gray, (81, 81), 0)
diff = cv2.absdiff(gray, blur)

# In the clean gray bg, diff is very low (~0–3). Watermark squares diff ~6–15.
# Threshold captures squares without catching natural noise.
_, anomaly = cv2.threshold(diff, 5, 255, cv2.THRESH_BINARY)
anomaly = cv2.bitwise_and(anomaly, band)

# Drop small specks of natural grain
kernel = cv2.getStructuringElement(cv2.MORPH_RECT, (3, 3))
anomaly = cv2.morphologyEx(anomaly, cv2.MORPH_OPEN, kernel, iterations=1)

# Dilate a touch so inpaint has context
anomaly = cv2.dilate(anomaly, np.ones((7, 7), np.uint8), iterations=2)

# ---------- Bottom-right sparkle ----------
sparkle = np.zeros((h, w), dtype=np.uint8)
cv2.circle(sparkle, (int(w * 0.945), int(h * 0.935)), 55, 255, -1)
sparkle = cv2.dilate(sparkle, np.ones((5, 5), np.uint8), iterations=1)

mask = cv2.bitwise_or(anomaly, sparkle)

# Save mask for debug (optional)
cv2.imwrite(str(OUT_DIR / "_mask-debug.png"), mask)

cleaned = cv2.inpaint(img, mask, 5, cv2.INPAINT_TELEA)
# Second pass only on bottom-right for smoother blend on shirt
cleaned = cv2.inpaint(cleaned, sparkle, 5, cv2.INPAINT_NS)

# Light smoothing of the top background gradient (blends any minor residue)
top = cleaned[0:int(h * 0.27), :]
top_smooth = cv2.bilateralFilter(top, 9, 40, 40)
cleaned[0:int(h * 0.27), :] = top_smooth

OUT_DIR.mkdir(parents=True, exist_ok=True)
cv2.imwrite(str(OUT), cleaned, [cv2.IMWRITE_JPEG_QUALITY, 92, cv2.IMWRITE_JPEG_PROGRESSIVE, 1])
print(f"wrote {OUT} ({OUT.stat().st_size / 1024:.1f} KB)")

# Responsive variants
from PIL import Image
pil = Image.fromarray(cv2.cvtColor(cleaned, cv2.COLOR_BGR2RGB))
for target_w, suffix in [(640, "-sm"), (1024, "-md"), (1600, "-lg")]:
    ratio = target_w / pil.width
    target_h = int(pil.height * ratio)
    resized = pil.resize((target_w, target_h), Image.LANCZOS)
    path_jpg = OUT_DIR / f"yossi-founder{suffix}.jpg"
    path_webp = OUT_DIR / f"yossi-founder{suffix}.webp"
    resized.save(path_jpg, "JPEG", quality=88, progressive=True, optimize=True)
    resized.save(path_webp, "WEBP", quality=84, method=6)
    print(f"wrote {path_jpg.name} + {path_webp.name} ({target_w}x{target_h})")

pil.save(OUT_DIR / "yossi-founder.webp", "WEBP", quality=86, method=6)
print("done")
