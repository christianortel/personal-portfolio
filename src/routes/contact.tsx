import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DecryptText } from "@/components/fx/DecryptText";
import { Magnetic } from "@/components/fx/Magnetic";
import {
  EMAIL,
  PHONE,
  SITE_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  LINK_HUB_URL,
  RESUME_URL,
  RESUME_FILENAME,
  ogImage,
} from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Christian Ortel" },
      {
        name: "description",
        content:
          "Get in touch with Christian Ortel — Senior Data Analyst in Tampa, FL. Open to senior analyst, analytics engineering, and applied-AI roles.",
      },
      { property: "og:title", content: "Contact — Christian Ortel" },
      {
        property: "og:description",
        content: "Email, phone, GitHub, and LinkedIn — open to full-time and contract data roles.",
      },
      { property: "og:url", content: `${SITE_URL}/contact` },
      { property: "og:image", content: ogImage("contact") },
      { name: "twitter:image", content: ogImage("contact") },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/contact` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "Contact", item: `${SITE_URL}/contact` },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
  notFoundComponent: () => <div className="p-10 text-foreground">Not found</div>,
  errorComponent: ({ reset }) => (
    <div className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <p className="text-foreground">Could not load this page.</p>
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

function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (permissions / non-secure context) — mailto link still works.
    }
  };

  return (
    <div id="top" className="relative flex min-h-screen flex-col bg-background text-foreground">
      <SiteNav />

      <main id="main" className="page-enter mx-auto w-full max-w-[1400px] flex-1 px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <DecryptText text="[ Contact ]" />
        </p>
        <h1 className="font-display text-[clamp(2.4rem,8vw,7.5rem)] font-light leading-[0.95] tracking-[-0.03em]">
          Got a data
          <br />
          <span className="italic text-signal">problem</span> worth solving?
          <span className="caret" />
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-[1.2fr_1fr] sm:gap-16">
          <div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
              Open to senior analyst, analytics engineering, and applied-AI roles
              — full-time or contract, Tampa or remote. Send the question, the
              constraint, and anything you've already tried; I'll reply with how
              I'd approach it.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Magnetic className="inline-block" strength={0.2}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-3 font-display text-2xl font-light tracking-tight underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal sm:text-4xl"
                >
                  {EMAIL}
                  <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
              </Magnetic>
              <button
                onClick={copyEmail}
                aria-label="Copy email address"
                className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-signal hover:text-foreground"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-signal" /> : <Copy className="h-3.5 w-3.5" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>

            <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              or call · {PHONE}
            </div>

            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              Download resume
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <ul className="space-y-4 self-end font-mono text-xs uppercase tracking-[0.18em]">
            {[
              ["GitHub", "@christianortel", GITHUB_URL],
              ["LinkedIn", "in/christianortel", LINKEDIN_URL],
              ["hoo.be", "christianortel", LINK_HUB_URL],
              ["Website", "christianortel.com", SITE_URL],
            ].map(([k, v, href]) => (
              <li key={k}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid grid-cols-[100px_minmax(0,1fr)_auto] items-center gap-4 border-t border-line pt-4 transition-colors hover:text-signal"
                >
                  <span className="text-muted-foreground">{k}</span>
                  <span className="truncate text-foreground/90 normal-case tracking-normal">{v}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-signal" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
