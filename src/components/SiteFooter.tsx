import { Link } from "@tanstack/react-router";

const FOOTER_ROUTES = [
  { to: "/projects", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-5 py-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:px-8">
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {FOOTER_ROUTES.map((l) => (
            <Link key={l.to} to={l.to} className="transition-colors hover:text-signal">
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/christianortel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-signal"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/christianortel"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-signal"
          >
            LinkedIn
          </a>
        </nav>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6">
          <span className="min-w-0 truncate">
            © 2026 Christian Ortel · Built in Tampa, deployed at the edge
          </span>
          <a href="#top" className="shrink-0 transition-colors hover:text-signal">
            ↑ Top
          </a>
        </div>
      </div>
    </footer>
  );
}
