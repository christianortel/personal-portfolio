import { useEffect, useRef } from "react";

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&/[]<>*";

interface DecryptTextProps {
  text: string;
  className?: string;
  /** ms per reveal step; lower = faster */
  speed?: number;
}

/**
 * ReactBits-style "decrypted text": characters scramble and lock in
 * left-to-right when the element scrolls into view. Renders the final
 * text on the server so SEO/reduced-motion users always see real copy.
 */
export function DecryptText({ text, className, speed = 28 }: DecryptTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const played = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;
        io.disconnect();

        let frame = 0;
        const total = text.length;
        const id = setInterval(() => {
          frame++;
          const locked = Math.floor(frame / 2);
          el.textContent = text
            .split("")
            .map((ch, i) => {
              if (ch === " " || i < locked) return ch;
              return CHARSET[Math.floor(Math.random() * CHARSET.length)];
            })
            .join("");
          if (locked >= total) {
            clearInterval(id);
            el.textContent = text;
          }
        }, speed);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [text, speed]);

  return (
    <span ref={ref} aria-label={text} className={className}>
      {text}
    </span>
  );
}
