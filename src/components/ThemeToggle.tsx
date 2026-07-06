import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

/**
 * Light is the default; dark is opt-in and remembered in localStorage.
 * A pre-paint script in __root.tsx applies the stored class before hydration.
 */
export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode) — theme still applies for the session.
    }
  };

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className="grid h-9 w-9 place-items-center rounded-full border border-line bg-background/40 text-muted-foreground backdrop-blur transition-colors hover:border-signal hover:text-foreground"
    >
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
