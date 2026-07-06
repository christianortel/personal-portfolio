import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DecryptText } from "@/components/fx/DecryptText";
import { spotlightMove } from "@/lib/spotlight";
import { tiltMove, tiltReset } from "@/lib/tilt";
import { SITE_URL, ogImage } from "@/lib/site";
import { FEATURED_PROJECTS, MORE_PROJECTS } from "@/lib/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Christian Ortel" },
      {
        name: "description",
        content:
          "Selected work and shipped side projects by Christian Ortel — enterprise RAG at Citi, toxinmap.com, sales atlases, price trackers, predictors, and more.",
      },
      { property: "og:title", content: "Projects — Christian Ortel" },
      {
        property: "og:description",
        content:
          "Enterprise analytics work and 18+ shipped side projects across data viz, AI, pricing, and sports prediction.",
      },
      { property: "og:url", content: `${SITE_URL}/projects` },
      { property: "og:image", content: ogImage("projects") },
      { name: "twitter:image", content: ogImage("projects") },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/projects` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/projects` },
          ],
        }),
      },
    ],
  }),
  component: ProjectsPage,
  notFoundComponent: () => <div className="p-10 text-foreground">Not found</div>,
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="text-foreground">Could not load projects.</p>
        <button
          onClick={reset}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
        >
          Try again
        </button>
      </div>
    </div>
  ),
});

function ProjectsPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <SiteNav />

      <main id="main" className="page-enter mx-auto max-w-[1400px] px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <DecryptText text="[ Work ]" />
        </p>
        <h1 className="font-display text-4xl font-light leading-[1.02] tracking-tight sm:text-7xl">
          Two ventures &
          <br />
          <span className="italic text-signal">shipped</span> side projects.
        </h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Up top: the two companies I'm taking to market. After them, the side
          projects with the most moving parts — the enterprise analytics work
          lives with my experience and in the resume. Below it all, the wider
          GitHub shelf.
        </p>

        {/* Featured */}
        <div className="mt-16 space-y-4 sm:mt-20">
          {FEATURED_PROJECTS.map((p) => (
            <a
              key={p.n}
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
              onMouseMove={spotlightMove}
              className="spotlight-card group relative grid grid-cols-1 gap-6 rounded-3xl border border-line bg-card/30 p-6 backdrop-blur transition-all hover:border-signal/60 hover:bg-card/60 sm:grid-cols-[80px_1fr_auto] sm:gap-10 sm:p-10"
            >
              <div className="flex items-start justify-between sm:flex-col sm:gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-signal">{p.n}</span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.year}</span>
              </div>
              <div className="min-w-0">
                <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.client} · {p.tag}
                </div>
                <h2 className="font-display text-2xl font-light leading-tight tracking-tight sm:text-4xl">
                  {p.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {p.blurb}
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 sm:max-w-md">
                  {p.metrics.map((m, i) => (
                    <div key={i} className="border-t border-line pt-3">
                      <div className="font-display text-xl font-light tracking-tight sm:text-2xl">{m.k}</div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
                {p.fun && (
                  <p className="mt-6 font-display text-lg font-light italic text-signal">
                    <span className="mr-2 not-italic">★</span>
                    {p.fun}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-6">
                {p.image && (
                  <img
                    src={p.image}
                    alt={`${p.client} artwork`}
                    width={640}
                    height={400}
                    loading="lazy"
                    className="hidden aspect-[16/10] w-56 rounded-2xl border border-line object-cover shadow-md transition-transform duration-500 group-hover:-rotate-2 group-hover:scale-[1.04] sm:block lg:w-72"
                  />
                )}
                <span className="mt-auto grid h-12 w-12 shrink-0 place-items-center rounded-full border border-line transition-all group-hover:border-signal group-hover:bg-signal group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* The shelf */}
        <section className="mt-24 sm:mt-32">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl font-light tracking-tight sm:text-5xl">
              The <span className="italic text-signal">rest of the shelf</span>.
            </h2>
            <a
              href="https://github.com/christianortel"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
            >
              All repos →
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {MORE_PROJECTS.map((r) => (
              <a
                key={r.name}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseMove={(e) => {
                  spotlightMove(e);
                  tiltMove(e);
                }}
                onMouseLeave={tiltReset}
                className="spotlight-card group flex flex-col justify-between gap-6 rounded-3xl border border-line bg-card/20 p-6 hover:border-signal/60 hover:bg-card/50"
              >
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="min-w-0 break-words font-mono text-sm text-foreground/90">{r.name}</h3>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-signal transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.blurb}</p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {r.lang}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
