import type { MouseEvent } from "react";

/**
 * Pointer handler for `.spotlight-card` elements: keeps the CSS radial
 * highlight (--mx/--my) under the cursor. Spread as onMouseMove.
 */
export function spotlightMove(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}
