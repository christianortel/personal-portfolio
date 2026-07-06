import { useRef, type ReactNode, type PointerEvent } from "react";

interface MagneticProps {
  children: ReactNode;
  /** How far the child is pulled toward the cursor (0–1). */
  strength?: number;
  className?: string;
}

/** ReactBits-style magnet: the child leans toward the cursor and springs back. */
export function Magnetic({ children, strength = 0.35, className }: MagneticProps) {
  const inner = useRef<HTMLDivElement | null>(null);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = inner.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    el.style.transition = "transform 0.1s ease-out";
    el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
  };

  const onLeave = () => {
    const el = inner.current;
    if (!el) return;
    el.style.transition = "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)";
    el.style.transform = "translate(0, 0)";
  };

  return (
    <div className={className} onPointerMove={onMove} onPointerLeave={onLeave}>
      <div ref={inner}>{children}</div>
    </div>
  );
}
