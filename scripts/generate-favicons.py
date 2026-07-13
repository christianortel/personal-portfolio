from pathlib import Path

from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
INK = "#081426"
DEEP_INK = "#030913"
PAPER = "#f5efe5"
SIGNAL = "#e5a33b"
SIGNAL_DARK = "#c9892b"


def serif_font(size: int):
    candidates = [
        Path("C:/Windows/Fonts/georgiab.ttf"),
        Path("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf"),
        Path("/System/Library/Fonts/Supplemental/Georgia Bold.ttf"),
    ]
    for candidate in candidates:
        if candidate.exists():
            return ImageFont.truetype(str(candidate), size=size)
    return ImageFont.load_default()


def draw_mark(size: int):
    scale = size / 512
    image = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(image)

    def box(values):
        return tuple(round(value * scale) for value in values)

    draw.rounded_rectangle(box((0, 0, 512, 512)), radius=round(104 * scale), fill=INK)
    draw.rounded_rectangle(
        box((24, 24, 488, 488)),
        radius=round(78 * scale),
        outline=SIGNAL_DARK,
        width=max(1, round(12 * scale)),
    )
    draw.rounded_rectangle(
        box((183, 42, 329, 86)),
        radius=round(22 * scale),
        fill=DEEP_INK,
        outline=SIGNAL_DARK,
        width=max(1, round(7 * scale)),
    )

    font_c = serif_font(round(266 * scale))
    font_o = serif_font(round(230 * scale))
    draw.text(box((84, 102)), "C", font=font_c, fill=PAPER, stroke_width=0)
    draw.text(box((247, 126)), "O", font=font_o, fill=SIGNAL, stroke_width=0)

    bars = [(112, 15), (151, 8), (180, 22), (221, 8), (252, 15), (291, 8), (321, 22), (362, 14)]
    for x, width in bars:
        top = 393 if width > 10 else 379
        draw.rectangle(box((x, top, x + width, 454)), fill=PAPER)

    return image


favicon = draw_mark(96)
favicon.save(PUBLIC / "favicon.png", optimize=True)

apple_touch = draw_mark(180)
apple_touch.save(PUBLIC / "apple-touch-icon.png", optimize=True)

ico_source = draw_mark(256)
ico_source.save(PUBLIC / "favicon.ico", sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])

print("Generated favicon.png, favicon.ico, and apple-touch-icon.png")
