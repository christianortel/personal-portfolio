import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X, Command } from "lucide-react";
import { OPEN_CMDK_EVENT } from "@/components/CommandPalette";
import { ThemeToggle } from "@/components/ThemeToggle";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "@/lib/site";

const NAV_LINKS = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

const MENU_LINKS = [{ to: "/", label: "Home" }, ...NAV_LINKS] as const;

export function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll and close on Escape while the mobile menu is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 sm:py-6">
        <Link
          to="/"
          aria-label="Christian Ortel — home"
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-foreground/90"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-signal animate-pulse" />
          Christian Ortel
        </Link>
        <nav
          aria-label="Primary"
          className="hidden gap-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:flex"
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Open command palette (Ctrl+K)"
            onClick={() => window.dispatchEvent(new Event(OPEN_CMDK_EVENT))}
            className="hidden items-center gap-1.5 rounded-full border border-line bg-background/40 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur transition-colors hover:border-signal hover:text-foreground md:flex"
          >
            <Command className="h-3 w-3" />K
          </button>
          <Link
            to="/contact"
            className="group flex items-center gap-2 rounded-full border border-line bg-background/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] backdrop-blur transition-colors hover:bg-signal hover:text-ink"
          >
            <span className="shiny-text group-hover:text-inherit">Open to work</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-full border border-line bg-background/40 text-foreground backdrop-blur md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu — full-screen overlay with staggered links */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl md:hidden">
          <nav
            aria-label="Mobile"
            className="mt-28 flex flex-col gap-2 px-8"
            onClick={() => setMenuOpen(false)}
          >
            {MENU_LINKS.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                style={{ "--i": i } as React.CSSProperties}
                className="menu-link border-t border-line py-4 font-display text-4xl font-light tracking-tight transition-colors hover:text-signal"
                activeProps={{ className: "text-signal italic" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div
            className="menu-link mt-auto mb-12 flex flex-col gap-4 px-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
            style={{ "--i": MENU_LINKS.length } as React.CSSProperties}
          >
            <a href={`mailto:${EMAIL}`} className="hover:text-signal">{EMAIL}</a>
            <div className="flex gap-6">
              <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
                GitHub
              </a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-signal">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
