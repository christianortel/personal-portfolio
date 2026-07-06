import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import badgeBack from "@/assets/badge-back.jpg";
import badgePhoto from "@/assets/badge-front-photo.jpg";
import portrait from "@/assets/portrait.jpg";
import citiLogo from "@/assets/logos/citi.png";
import onigiriLogo from "@/assets/logos/onigiri.png";
import jpmorganLogo from "@/assets/logos/jpmorgan.png";
import idefiLogo from "@/assets/logos/idefi.png";
import worldstarLogo from "@/assets/logos/worldstar.png";
import nusretLogo from "@/assets/logos/nusret.png";
import tdLogo from "@/assets/logos/td.png";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { FEATURED_PROJECTS } from "@/lib/projects";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DecryptText } from "@/components/fx/DecryptText";
import { Magnetic } from "@/components/fx/Magnetic";
import { spotlightMove } from "@/lib/spotlight";
import {
  SITE_URL,
  EMAIL,
  PHONE,
  PHONE_INTL,
  GITHUB_URL,
  LINKEDIN_URL,
  LINKTREE_URL,
  RESUME_URL,
  RESUME_FILENAME,
  ogImage,
} from "@/lib/site";

const Lanyard = lazy(() => import("@/components/lanyard/Lanyard"));

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christian Ortel",
  jobTitle: "Senior Data Analyst",
  email: `mailto:${EMAIL}`,
  telephone: PHONE_INTL,
  url: SITE_URL,
  sameAs: [
    GITHUB_URL,
    "https://www.linkedin.com/in/christianortel",
    LINKTREE_URL,
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Tampa",
    addressRegion: "FL",
    addressCountry: "US",
  },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Suffolk University" },
  knowsAbout: [
    "SQL",
    "Python",
    "Snowflake",
    "Tableau",
    "Power BI",
    "Retrieval-Augmented Generation",
    "Prompt Engineering",
    "Risk & Compliance Analytics",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christian Ortel — Senior Data Analyst & AI/Analytics Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Christian Ortel — Senior Data Analyst with a background in financial services, risk, and AI-assisted analytics. SQL, Python, RAG, and shipped products.",
      },
      { property: "og:title", content: "Christian Ortel — Senior Data Analyst" },
      {
        property: "og:description",
        content:
          "Risk analytics, RAG / LLM workflows, and shipped side-projects across fintech, e-commerce pricing, and environmental data.",
      },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: ogImage("home") },
      { name: "twitter:image", content: ogImage("home") },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(PERSON_JSON_LD),
      },
    ],
  }),
  component: Index,
});

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  ["SQL", "Snowflake · Oracle SQL · Teradata · warehouse-grade modeling"],
  ["Python", "pandas · NumPy · automation · reporting pipelines"],
  ["AI / RAG", "Retrieval-augmented generation · Gemini · prompt engineering"],
  ["BI & Viz", "Tableau · Power BI · Excel VBA · Power Automate"],
  ["Engineering", "Git · Kubernetes · R · HTML / CSS · TypeScript"],
  ["Domain", "Risk · compliance · payments · financial services data"],
];

const EXPERIENCE = [
  {
    co: "Citi Bank N.A.",
    logo: citiLogo,
    role: "AVP — Data Science Senior Analyst",
    where: "Tampa, FL",
    when: "Jan 2023 – Mar 2026",
    bullets: [
      "Automated the monthly ICRM stakeholder report with a Python ETL over Jira sprint data and KPIs — turnaround went from 4 weeks of manual work to 10 minutes.",
      "Led deployment of Google Gemini through a custom RAG framework over a 1.5M-row Snowflake consumer dataset — plain-English-to-SQL with up to four joins for 30+ compliance testers.",
      "Designed and ran A/B prompt tests that raised AI-generated SQL accuracy from 60% to 95%, cutting ad-hoc query turnaround by 80%.",
      "Implemented data-driven compliance testing and reporting programs with SQL, Python, and SAS in line with the Compliance Testing Plan.",
      "Expanded cross-border data access approvals across 60+ countries; validated UAT and Production Tableau dashboards monthly for risk stakeholders.",
    ],
  },
  {
    co: "Onigiri",
    logo: onigiriLogo,
    role: "AI Engineer — side venture",
    where: "Remote",
    when: "Oct 2024 – Jan 2025",
    bullets: [
      "Deployed a Llama 3.1-powered Twitter agent on a custom Python RAG framework.",
      "Integrated the CoinMarketCap API to post real-time market-sentiment analysis via the Twitter API.",
      "Tokenized the project's $ONIGIRI coin — $500K+ market cap in its first month.",
    ],
  },
  {
    co: "JPMorgan Chase & Co.",
    logo: jpmorganLogo,
    role: "Production Support Analyst (via mThree)",
    where: "Tampa, FL",
    when: "Oct 2021 – Dec 2022",
    bullets: [
      "Built Tableau and SQL reporting that gave stakeholders real-time visibility into payment processing for premier clients.",
      "Automated a pre-deployment checklist using SQL + Excel VBA for smoother onboarding to payments infrastructure.",
    ],
  },
  {
    co: "iDecentralize Finance",
    logo: idefiLogo,
    role: "Blockchain Developer",
    where: "Remote",
    when: "Oct 2021 – Jul 2022",
    bullets: [
      "Shipped a Polygon ERC-721 NFT collection that gated access to an arbitrage flash-loan bot.",
      "Designed the smart-contract and backend stack with Solidity, the OpenZeppelin library, and Node.js.",
      "Featured on Dapp University for the 'Greedy Bots' NFT project.",
    ],
  },
  {
    co: "WorldStar HipHop",
    logo: worldstarLogo,
    role: "Software Engineer",
    where: "Remote",
    when: "Nov 2021 – Jan 2022",
    bullets: [
      "Implemented ERC-721 smart contracts in Solidity with phased minting, token ID management, and metadata reveal; deployed the collection to Ethereum Mainnet.",
      "Programmatically generated 10,000 unique NFTs from layered assets using weighted rarity logic and hash-based deduplication; automated metadata + IPFS publishing with Node.js, Moralis, and Ethers.js.",
    ],
  },
  {
    co: "Nusr-Et",
    logo: nusretLogo,
    role: "Accounting Analyst",
    where: "Boston, MA",
    when: "Aug 2020 – Sep 2021",
    bullets: [
      "Excel pivot-table financial statements covering profit, expenses, and tax deductions; resolved billing/invoice issues with the payment processor Shift5.",
    ],
  },
  {
    co: "TD Bank",
    logo: tdLogo,
    role: "Bank Teller I",
    where: "Boston, MA",
    when: "Aug 2019 – Mar 2020",
    bullets: [
      "Customer-facing work: account setup/closure, loan applications, and resolving compromised-card cases.",
    ],
  },
];

function Index() {
  const root = useRef<HTMLDivElement | null>(null);
  const heroTitle = useRef<HTMLHeadingElement | null>(null);
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    setMounted(true);
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) {
        // Skip motion entirely; snap scroll-driven elements to their final state.
        gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((el) => {
          el.style.transform = `scaleX(${el.dataset.bar ?? "1"})`;
        });
        return;
      }

      if (heroTitle.current) {
        const words = heroTitle.current.querySelectorAll<HTMLElement>("[data-word]");
        gsap.fromTo(
          words,
          { yPercent: 110, opacity: 0, filter: "blur(8px)" },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "expo.out",
            stagger: 0.06,
            delay: 0.1,
          },
        );
      }

      // ReactBits-style BlurText for section headings
      gsap.utils.toArray<HTMLElement>("[data-blur]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 34, opacity: 0, filter: "blur(12px)" },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-fade]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-bar]").forEach((el) => {
        const target = Number(el.dataset.bar ?? "0");
        gsap.fromTo(
          el,
          { scaleX: 0 },
          {
            scaleX: target,
            duration: 1.6,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          },
        );
      });

      gsap.utils.toArray<HTMLElement>("[data-row]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: { trigger: el, start: "top 82%" },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteNav />
      <main id="main">
      {/* Hero */}
      <section id="top" className="relative grain isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pb-14 pt-28 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--signal)_10%,transparent),transparent_60%),radial-gradient(ellipse_at_bottom,transparent_30%,var(--background)_85%)]" />

        {/* Lanyard badge — center stage, draggable 3D ID card (client-only, heavy).
            In-flow on small screens so it never covers the headline; raised overlay on lg+.
            Reduced-motion users get a static badge image instead of the physics canvas. */}
        <div className="pointer-events-none relative z-10 flex h-[44svh] justify-center sm:h-[50svh] lg:absolute lg:inset-x-0 lg:-top-[9svh] lg:h-[62svh]">
          <div
            className="pointer-events-auto h-full w-full max-w-[560px] sm:max-w-[720px] lg:max-w-[960px]"
            style={{ touchAction: "none" }}
          >
            {mounted &&
              (reducedMotion ? (
                <div className="flex h-full items-start justify-center pt-6 lg:pt-[12svh]">
                  <img
                    src={badgePhoto}
                    alt="Christian Ortel's ID badge — Senior Data Analyst"
                    width={704}
                    height={960}
                    loading="eager"
                    className="h-[85%] w-auto rounded-2xl object-contain drop-shadow-2xl"
                  />
                </div>
              ) : (
                <Suspense fallback={null}>
                  <Lanyard
                    position={[0, 0, 13]}
                    gravity={[0, -40, 0]}
                    fov={20}
                    frontImage={badgePhoto}
                    backImage={badgeBack}
                    imageFit="cover"
                  />
                </Suspense>
              ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8">
          <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:mb-12">
            <div className="flex min-w-0 flex-col gap-1">
              <span>[ Senior Data Analyst · AI / Analytics Engineer ]</span>
              <span className="text-foreground/60">Tampa, FL · open to remote · est. 2019</span>
            </div>
            <div className="shrink-0 text-right text-foreground/70">
              {time && <>TPA · {time}</>}
            </div>
          </div>

          <h1
            ref={heroTitle}
            className="mx-auto text-center font-display text-[clamp(2.6rem,8vw,8rem)] font-light leading-[0.92] tracking-[-0.035em]"
          >
            {"Data work that".split(" ").map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                <span data-word className="inline-block">{w}</span>
              </span>
            ))}
            <br />
            {"ships.".split(" ").map((w, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden align-bottom">
                <span data-word className="gradient-text inline-block italic">{w}</span>
              </span>
            ))}
          </h1>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-8 text-center sm:mt-10">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              I'm Christian — a Senior Data Analyst with a background in
              financial services, risk, and automation. I build practical things
              with SQL, Python, AI/RAG, and clean data workflows — from
              enterprise risk reporting at Citi to two companies of my own
              heading to market.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Magnetic className="inline-block">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
                >
                  See the work
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
              <Magnetic className="inline-block">
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  className="group inline-flex items-center gap-3 rounded-full border border-line bg-background/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-signal hover:text-signal"
                >
                  Download resume
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
              </Magnetic>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              [ tip · grab the badge & throw it around ]
            </p>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <section className="border-y border-line py-6 overflow-hidden">
        <div className="flex whitespace-nowrap marquee-track font-display text-3xl tracking-tight sm:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 pr-12">
              {[
                "SQL at scale",
                "★",
                "Python automation",
                "★",
                "RAG & LLM workflows",
                "★",
                "Risk & compliance reporting",
                "★",
                "Tableau · Power BI",
                "★",
                "Beef-tallow mayonnaise",
                "★",
              ].map((t, i) => (
                <span key={i} className={t === "★" ? "text-signal" : "italic font-light"}>
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mb-16 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
            <div className="min-w-0">
              <p data-fade className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <DecryptText text="[ 01 · Experience ]" />
              </p>
              <h2 data-blur className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                Seven roles,
                <br />
                <span className="italic text-signal">one trajectory</span>.
              </h2>
            </div>
          </div>

          <ol className="space-y-4">
            {EXPERIENCE.map((r) => (
              <li
                key={r.co + r.when}
                data-row
                onMouseMove={spotlightMove}
                className="spotlight-card grid grid-cols-1 gap-6 rounded-3xl border border-line bg-card/20 p-6 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:p-10"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                      <img
                        src={r.logo}
                        alt={`${r.co} logo`}
                        width={32}
                        height={32}
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                      />
                    </span>
                    <div className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                      {r.co}
                    </div>
                  </div>
                  <div className="mt-3 text-sm text-muted-foreground">{r.role}</div>
                  <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {r.where}
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    {r.when}
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {r.bullets.map((b, i) => (
                    <li key={i} className="border-t border-line pt-3">
                      {b}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="mb-16 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6 sm:mb-24">
            <div className="min-w-0">
              <p data-fade className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <DecryptText text="[ 02 · Selected work ]" />
              </p>
              <h2 data-blur className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-6xl">
                Two ventures &
                <br />
                <span className="italic text-signal">shipped</span> side projects.
              </h2>
            </div>
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              06 / 26
            </span>
          </div>

          <div className="space-y-4">
            {FEATURED_PROJECTS.map((p) => (
              <a
                key={p.n}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                data-row
                onMouseMove={spotlightMove}
                className="spotlight-card group relative grid grid-cols-1 gap-6 rounded-3xl border border-line bg-card/30 p-6 backdrop-blur transition-all hover:border-signal/60 hover:bg-card/60 sm:grid-cols-[80px_1fr_auto] sm:gap-10 sm:p-10"
              >
                <div className="flex items-start justify-between sm:flex-col sm:gap-4">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-signal">
                    {p.n}
                  </span>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {p.year}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    {p.client} · {p.tag}
                  </div>
                  <h3 className="font-display text-2xl font-light leading-tight tracking-tight sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {p.blurb}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 sm:max-w-md">
                    {p.metrics.map((m, i) => (
                      <div key={i} className="border-t border-line pt-3">
                        <div className="font-display text-xl font-light tracking-tight sm:text-2xl">
                          {m.k}
                        </div>
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
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-[1fr_2fr] sm:gap-20">
            <div>
              <p data-fade className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <DecryptText text="[ 03 · Toolkit ]" />
              </p>
              <h2 data-blur className="font-display text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl">
                The tools I
                <br />
                <span className="italic text-signal">reach for</span>.
              </h2>
              <p data-fade className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Warehouse SQL and pragmatic Python first, with a steadily growing
                AI / RAG layer on top. BI tools where the audience lives.
              </p>
            </div>
            <div className="space-y-6">
              {STACK.map(([name, detail], i) => {
                const fill = [0.96, 0.92, 0.82, 0.88, 0.72, 0.9][i] ?? 0.8;
                return (
                  <div key={name} data-fade className="border-t border-line pt-5">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
                      <div className="min-w-0">
                        <div className="font-display text-2xl font-light tracking-tight sm:text-3xl">
                          {name}
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{detail}</div>
                      </div>
                      <div className="shrink-0 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                    </div>
                    <div className="mt-4 h-px w-full bg-line">
                      <div
                        data-bar={fill}
                        className="h-px origin-left bg-signal"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-24 sm:px-8 sm:py-32">
          <p data-fade className="mb-12 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <DecryptText text="[ 04 · About ]" />
          </p>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-[2fr_1fr] sm:gap-20">
            <div className="space-y-8">
              <p data-fade className="font-display text-2xl font-light leading-[1.35] tracking-tight sm:text-4xl">
                I work in the seam between <span className="italic text-signal">analytics, AI, and the business</span> — turning warehouse data and LLM tooling into things stakeholders can actually use.
              </p>
              <p data-fade className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Most recently AVP, Data Science Senior Analyst at Citi (ICRM), with
                prior stops at JPMorgan Chase (payments production support, via
                mThree), iDecentralize Finance (smart contracts + LLM agents),
                WorldStar HipHop, and TD Bank. BS in Big Data &amp; Business Analytics,
                concentration in Cybersecurity, from Suffolk University — Dean's List,
                Trustee Scholarship, Transfer Excellence Award. Right now I'm
                taking two companies of my own to market — <span className="italic text-foreground">Tallownaise</span>,
                real mayo made with grass-fed beef tallow, and{" "}
                <span className="italic text-foreground">Motionless Labs</span>, a
                research-peptide catalog with a verified COA on every batch — on
                top of a shelf of shipped side projects like toxinmap.
              </p>
              <div data-fade className="flex flex-wrap items-center gap-4">
                <a
                  href="/resume"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
                >
                  View full resume
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={RESUME_URL}
                  download={RESUME_FILENAME}
                  className="text-sm font-medium underline decoration-signal decoration-2 underline-offset-[6px] transition-colors hover:text-signal"
                >
                  Download PDF
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <img
                data-fade
                src={portrait}
                alt="Christian Ortel — professional headshot"
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full max-w-[300px] rounded-3xl border border-line object-cover shadow-lg"
              />
              <ul data-fade className="space-y-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {[
                  ["Now", "Launching Tallownaise & Motionless Labs · open to data roles"],
                  ["Prev", "Citi · JPMorgan · WorldStar · iDeFi"],
                  ["Edu", "Suffolk · BS Big Data & Analytics"],
                  ["Certs", "Python PCAP · Google Data · mThree"],
                  ["GitHub", "18+ public repos"],
                  ["Based", "Tampa, FL"],
                ].map(([k, v]) => (
                  <li key={k} className="grid grid-cols-[60px_1fr] gap-4 border-t border-line pt-3">
                    <span className="text-signal">{k}</span>
                    <span className="text-foreground/80 normal-case tracking-normal">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-5 py-28 sm:px-8 sm:py-40">
          <p data-fade className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            <DecryptText text="[ 05 · Let's talk ]" />
          </p>
          <h2
            data-blur
            className="font-display text-[clamp(2.4rem,8vw,7.5rem)] font-light leading-[0.95] tracking-[-0.03em]"
          >
            Got a data
            <br />
            <span className="italic text-signal">problem</span> worth solving?
            <span className="caret" />
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr] sm:gap-16">
            <div data-fade>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                Open to senior analyst, analytics engineering, and applied-AI
                roles — full-time or contract. Send the question, the constraint,
                and anything you've already tried.
              </p>
              <Magnetic className="inline-block" strength={0.2}>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-8 inline-flex items-center gap-3 font-display text-2xl font-light tracking-tight underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal sm:text-4xl"
                >
                  {EMAIL}
                  <ArrowUpRight className="h-6 w-6 sm:h-8 sm:w-8" />
                </a>
              </Magnetic>
              <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                or call · {PHONE}
              </div>
            </div>
            <ul data-fade className="space-y-4 self-end font-mono text-xs uppercase tracking-[0.18em]">
              {[
                ["GitHub", "@christianortel", GITHUB_URL],
                ["LinkedIn", "in/christianortel", LINKEDIN_URL],
                ["Website", "christianortel.com", SITE_URL],
                ["Email", EMAIL, `mailto:${EMAIL}`],
              ].map(([k, v, href]) => (
                <li key={k}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
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
        </div>
      </section>
      </main>

      <SiteFooter />
    </div>
  );
}
