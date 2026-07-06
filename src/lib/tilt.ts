import type { MouseEvent } from "react";

/**
 * ReactBits-style tilt: the card leans toward the pointer in 3D and
 * springs back on leave. Pair with spotlightMove for the full effect.
 */
export function tiltMove(e: MouseEvent<HTMLElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  el.style.transition = "transform 0.1s ease-out";
  el.style.transform = `perspective(700px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg) translateY(-2px)`;
}

export function tiltReset(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  el.style.transition = "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)";
  el.style.transform = "";
}
