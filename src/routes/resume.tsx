import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowLeft } from "lucide-react";
import { RESUME_URL, RESUME_FILENAME, SITE_URL, ogImage } from "@/lib/site";

const FILENAME = RESUME_FILENAME;

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Christian Ortel" },
      {
        name: "description",
        content: "Download or view Christian Ortel's resume — Senior Data Analyst & AI/Analytics Engineer.",
      },
      { property: "og:title", content: "Resume — Christian Ortel" },
      {
        property: "og:description",
        content: "Senior Data Analyst & AI/Analytics Engineer resume.",
      },
      { property: "og:url", content: `${SITE_URL}/resume` },
      { property: "og:image", content: ogImage("resume") },
      { name: "twitter:image", content: ogImage("resume") },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/resume` }],
  }),
  component: ResumePage,
  notFoundComponent: () => <div className="p-10 text-foreground">Not found</div>,
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="text-foreground">Could not load resume.</p>
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

function ResumePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8">
          <a
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Back to site
          </a>
          <div className="flex items-center gap-3">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground sm:inline-flex"
            >
              Open in new tab
            </a>
            <a
              href={RESUME_URL}
              download={FILENAME}
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-transform hover:scale-[1.02]"
            >
              Download PDF
              <ArrowDown className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="page-enter mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
              Resume
            </h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Christian Ortel · Senior Data Analyst & AI/Analytics Engineer
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-line bg-card/30 shadow-2xl">
          <div className="relative aspect-[8.5/11] w-full sm:aspect-auto sm:h-[calc(100vh-260px)]">
            <iframe
              src={RESUME_URL}
              title="Christian Ortel resume"
              className="absolute inset-0 h-full w-full"
            />
            {/* Fallback for browsers / mobile that can't render the PDF inline */}
            <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-8 text-center">
              <p className="text-muted-foreground">
                Your browser can't preview the PDF inline.
              </p>
              <a
                href={RESUME_URL}
                download={FILENAME}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-ink"
              >
                Download PDF
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Last updated: June 2026
          </p>
          <a
            href={RESUME_URL}
            download={FILENAME}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Download resume
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
