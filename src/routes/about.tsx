import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { DecryptText } from "@/components/fx/DecryptText";
import { spotlightMove } from "@/lib/spotlight";
import { RESUME_URL, SITE_URL, ogImage } from "@/lib/site";
import portrait from "@/assets/portrait.jpg";
import citiLogo from "@/assets/logos/citi.png";
import onigiriLogo from "@/assets/logos/onigiri.png";
import jpmorganLogo from "@/assets/logos/jpmorgan.png";
import buildspaceLogo from "@/assets/logos/buildspace.png";
import ethglobalLogo from "@/assets/logos/ethglobal.png";
import idefiLogo from "@/assets/logos/idefi.png";
import worldstarLogo from "@/assets/logos/worldstar.png";
import nusretLogo from "@/assets/logos/nusret.png";
import tdLogo from "@/assets/logos/td.png";
import nmLogo from "@/assets/logos/northwestern-mutual.png";
import brLogo from "@/assets/logos/banana-republic.png";
import tallownaiseLogo from "@/assets/logos/tallownaise.png";
import motionlessLogo from "@/assets/logos/motionless.png";
import peptipediaLogo from "@/assets/logos/peptipedia.png";

const CERTIFICATIONS = [
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    when: "Issued Mar 2026",
    note: "SQL, Python, data cleaning, analysis, visualization, and stakeholder-ready reporting.",
  },
  {
    name: "PCAP - Certified Associate in Python Programming",
    issuer: "Python Institute",
    when: "Issued Aug 2025",
    note: "Python fundamentals, object-oriented programming, control flow, data structures, and application logic.",
  },
  {
    name: "FLA Health and Life and Annuity Agent (0215)",
    issuer: "Florida Department of Financial Services",
    when: "Issued Aug 2024 · Expires Aug 2026",
    note: "Financial-services credential covering health, life, annuity, and variable-contract insurance products.",
  },
  {
    name: "Production Support",
    issuer: "mThree",
    when: "Issued Nov 2021",
    note: "Production support foundations across SQL, MySQL, Git, Kubernetes, Linux, R, and enterprise support workflows.",
  },
] as const;

/** Volunteering & community — add entries here and the section renders itself. */
const VOLUNTEERING = [
  {
    org: "Chainlink Labs",
    role: "Blockchain Developer",
    when: "Oct 2021 - Nov 2021",
    note: "Hackathon project exploring privacy-preserving medical data ownership: a neural-network concept for CT scan image analysis paired with ERC-based access control so patients could tokenize medical information and control who sees images, answers, and related records.",
  },
  {
    org: "buildspace",
    role: "Blockchain Developer",
    when: "Jun 2022 - Aug 2022",
    note: "Blockchain developer cohort where I built an NFT membership concept around my father's original horror-themed airbrush artwork, translating physical art into collector tiers with signed artwork, merchandise, video calls, and other fan experiences.",
  },
  {
    org: "MegaVolt Corp",
    role: "Project Intern",
    when: "Apr 2022 - Jun 2022",
    note: "Worked with Franky Nines and the MegaVolt team connected to the SupDucks ecosystem, learning how NFT-native brands build community and helping with technical experiments around the MegaToads project.",
  },
  {
    org: "ETHGlobal",
    role: "Blockchain Developer",
    when: "Jan 2022",
    note: "NFT hackathon where we created Greedy Bots on Polygon: randomized robot NFTs that granted access to a locally run arbitrage trading bot designed to route trades across DeFi networks and protocols.",
  },
  {
    org: "Suffolk University Blockchain Club",
    role: "Blockchain Consultant",
    when: "Mar 2022 - Present",
    note: "Advised students and early developers on blockchain learning paths and career opportunities, helping multiple people move into Web3 roles including developers at Koi Network and Mythical Games.",
  },
  {
    org: "University of the Nations, Kona",
    role: "Mission Builder",
    when: "May 2021 - Jul 2021",
    note: "Served as a Christian volunteer with YWAM in Kona, Hawaii, supporting cafeteria operations and helping with group transportation and logistics as a driver.",
  },
] as const;

const TIMELINE = [
  {
    co: "Tallownaise",
    logo: tallownaiseLogo,
    role: "Founder",
    when: "Now · Pre-launch",
    note: "Consumer food brand — classic mayonnaise remade with grass-fed beef tallow and pasture-raised eggs; no seed oils, gums, or stabilizers. Brand, product, and DTC storefront built end-to-end at tallownaise.com.",
  },
  {
    co: "Motionless Labs",
    logo: motionlessLogo,
    role: "Founder",
    when: "Now · Pre-launch",
    note: "Members-only, research-use-only peptide catalog with a third-party COA linked to every batch — gated catalog access, lot documentation, and order tooling at motionlesslabs.com.",
  },
  {
    co: "Peptipedia",
    logo: peptipediaLogo,
    role: "Founder",
    when: "Now · Pre-launch",
    note: "Plain-language peptide encyclopedia at peptipedia.xyz — the education companion to Motionless Labs, kept deliberately separate from anything for sale.",
  },
  {
    co: "Citi Bank N.A.",
    logo: citiLogo,
    role: "AVP — Data Science Senior Analyst",
    when: "Jan 2023 – Mar 2026",
    note: "ICRM analytics: Gemini RAG over a 1.5M-row Snowflake dataset, stakeholder reporting automated from 4 weeks to 10 minutes, compliance testing programs in SQL/Python/SAS, and cross-border data approvals across 60+ countries.",
  },
  {
    co: "Onigiri",
    logo: onigiriLogo,
    role: "AI Engineer — side venture",
    when: "Oct 2024 – Jan 2025",
    note: "Llama 3.1 Twitter agent on a custom Python RAG framework posting CoinMarketCap-driven market sentiment; the project's $ONIGIRI token reached a $500K+ market cap in its first month.",
  },
  {
    co: "JPMorgan Chase & Co.",
    logo: jpmorganLogo,
    role: "Production Support Analyst (via mThree)",
    when: "Oct 2021 – Dec 2022",
    note: "Real-time Tableau + SQL reporting for premier-client payment processing; automated pre-deployment checklists with SQL and Excel VBA.",
  },
  {
    co: "Buildspace & EthGlobal",
    logo: buildspaceLogo,
    logo2: ethglobalLogo,
    role: "Blockchain Developer — cohort & hackathon",
    when: "Jan – Feb 2022",
    note: "Built and deployed dApps with permissioned data access at the smart-contract level; owned the backend for a radiology NFT product; shipped a multi-call trading bot executing flash-loan trades on DeFi exchanges at the EthGlobal NFT hackathon.",
  },
  {
    co: "iDecentralize Finance",
    logo: idefiLogo,
    role: "Blockchain Developer",
    when: "Oct 2021 – Jul 2022",
    note: "Polygon ERC-721 collection gating an arbitrage flash-loan bot; Solidity + OpenZeppelin + Node.js stack; featured on Dapp University for the 'Greedy Bots' NFT project.",
  },
  {
    co: "WorldStar HipHop",
    logo: worldstarLogo,
    role: "Software Engineer",
    when: "Nov 2021 – Jan 2022",
    note: "ERC-721 contracts with phased minting and metadata reveal, deployed to Ethereum Mainnet; generated 10,000 unique NFTs with weighted rarity logic and automated IPFS publishing.",
  },
  {
    co: "Nusr-Et",
    logo: nusretLogo,
    role: "Accounting Analyst",
    when: "Aug 2020 – Sep 2021",
    note: "Excel pivot-table financial statements; billing and payment-processor issue resolution with Shift5.",
  },
  {
    co: "TD Bank",
    logo: tdLogo,
    role: "Bank Teller I",
    when: "Aug 2019 – Mar 2020",
    note: "Customer-facing work — accounts, loans, and compromised-card resolution.",
  },
  {
    co: "Northwestern Mutual",
    logo: nmLogo,
    role: "Financial Advisor",
    when: "Nov 2018 – May 2019",
    note: "Client financial planning across cash management, insurance coverage, and investments; licensed Massachusetts & New York insurance agent (life, health, travel accident).",
  },
  {
    co: "Banana Republic",
    logo: brLogo,
    role: "Grade 3 Manager",
    when: "Jul 2018 – Aug 2019",
    note: "Promoted to Grade 3 Manager within two months; ran inventory control and sales-floor operations.",
  },
];

const SKILLS = [
  "SQL (Snowflake · Oracle · Teradata)",
  "Python (pandas · NumPy)",
  "Retrieval-Augmented Generation",
  "Prompt Engineering · A/B Testing",
  "Tableau · Tableau Prep",
  "Power BI · Looker",
  "Excel VBA",
  "Power Automate",
  "Alteryx",
  "SAS",
  "R Studio",
  "Git · Jira / Confluence",
  "Kubernetes · Linux",
  "ETL & Data Cleansing",
  "Data Modeling",
  "ML Model Training",
  "HTML / CSS · TypeScript",
  "Solidity · Web3 (Hardhat · IPFS)",
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Christian Ortel" },
      {
        name: "description",
        content:
          "Christian Ortel is a Senior Data Analyst in Tampa, FL — financial services, risk analytics, AI/RAG workflows, and a long tail of shipped side projects.",
      },
      { property: "og:title", content: "About — Christian Ortel" },
      {
        property: "og:description",
        content:
          "Senior Data Analyst: Citi, JPMorgan, blockchain and LLM side quests, Suffolk University. The full story.",
      },
      { property: "og:url", content: `${SITE_URL}/about` },
      { property: "og:image", content: ogImage("about") },
      { name: "twitter:image", content: ogImage("about") },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/about` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
            { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}/about` },
          ],
        }),
      },
    ],
  }),
  component: AboutPage,
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

function AboutPage() {
  return (
    <div id="top" className="relative min-h-screen bg-background text-foreground">
      <SiteNav />

      <main
        id="main"
        className="page-enter mx-auto max-w-[1400px] px-5 pb-24 pt-32 sm:px-8 sm:pt-40"
      >
        <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <DecryptText text="[ About ]" />
        </p>
        <div className="grid grid-cols-1 items-end gap-10 sm:grid-cols-[minmax(0,1fr)_auto]">
          <h1 className="font-display text-4xl font-light leading-[1.02] tracking-tight sm:text-7xl">
            Analyst by trade,
            <br />
            <span className="italic text-signal">builder</span> by habit.
          </h1>
          <img
            src={portrait}
            alt="Christian Ortel — professional headshot"
            width={800}
            height={800}
            loading="eager"
            className="aspect-square w-40 rounded-3xl border border-line object-cover shadow-lg sm:w-52"
          />
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 sm:mt-20 sm:grid-cols-[2fr_1fr] sm:gap-20">
          <div className="space-y-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              I'm a Senior Data Analyst with experience in financial services, analytics, and
              automation, focused on turning complex data into practical business solutions. My
              background covers large enterprise datasets — SQL, Python, Tableau, Power BI, and
              Excel — in service of reporting, operational performance, risk monitoring, and
              decision-making.
            </p>
            <p>
              At Citi I supported risk and compliance stakeholders through dashboard development,
              reporting automation, data validation, and large-scale analysis inside a centralized
              analytics function. The work I like best reduces manual effort, improves data quality,
              and helps teams decide faster: a monthly report that went from four weeks of assembly
              to ten minutes, and a Gemini RAG workflow that lets 30+ compliance testers query a
              1.5M-row Snowflake dataset in plain English.
            </p>
            <p>
              I'm especially interested in roles where analytics, automation, and strategy come
              together. Right now I'm also taking founder-led projects to market: Tallownaise, real
              mayonnaise made with grass-fed beef tallow; Motionless Labs, a research-peptide
              catalog with a verified COA on every batch; and Peptipedia, a separate education
              layer. The rest of the ledger includes toxinmap, a Rockstar Games sales atlas, resale
              price trackers, sports-outcome predictors, and shipped NFT projects.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                Education
              </h2>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed">
                <li className="border-t border-line pt-3">
                  <div className="text-foreground">Suffolk University — Sawyer Business School</div>
                  <div className="mt-1 text-muted-foreground">
                    BS, Big Data &amp; Business Analytics · Cybersecurity concentration · May 2021
                    <br />
                    GPA 3.4 · Dean's List · Trustee Scholarship · Transfer Excellence Award
                  </div>
                </li>
                <li className="border-t border-line pt-3">
                  <div className="text-foreground">Hudson Valley Community College — Troy, NY</div>
                  <div className="mt-1 text-muted-foreground">
                    AS, Business Administration · May 2019
                    <br />
                    GPA 3.1 · Dean's List (2018–2019)
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                Certifications
              </h2>
              <ul className="mt-4 space-y-3">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name} className="border-t border-line pt-3">
                    <div className="text-sm font-medium text-foreground">{cert.name}</div>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                      {cert.issuer} · {cert.when}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {cert.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <section className="mt-24 sm:mt-32">
          <h2 className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            [ The road so far ]
          </h2>
          <ol className="space-y-4">
            {TIMELINE.map((t) => (
              <li
                key={t.co + t.when}
                onMouseMove={spotlightMove}
                className="spotlight-card grid grid-cols-1 gap-4 rounded-3xl border border-line bg-card/20 p-6 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                      <img
                        src={t.logo}
                        alt={`${t.co} logo`}
                        width={28}
                        height={28}
                        loading="lazy"
                        className="h-7 w-7 object-contain"
                      />
                    </span>
                    {"logo2" in t && t.logo2 && (
                      <span className="-ml-5 grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl border border-line bg-white shadow-sm">
                        <img
                          src={t.logo2}
                          alt=""
                          width={28}
                          height={28}
                          loading="lazy"
                          className="h-7 w-7 object-contain"
                        />
                      </span>
                    )}
                    <div className="font-display text-xl font-light tracking-tight sm:text-2xl">
                      {t.co}
                    </div>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">{t.role}</div>
                  <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                    {t.when}
                  </div>
                </div>
                <p className="self-center text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {t.note}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Volunteering & community — appears once VOLUNTEERING has entries */}
        {VOLUNTEERING.length > 0 && (
          <section className="mt-24">
            <h2 className="mb-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              [ Volunteering & community ]
            </h2>
            <ol className="space-y-4">
              {VOLUNTEERING.map((v) => (
                <li
                  key={v.org + v.when}
                  onMouseMove={spotlightMove}
                  className="spotlight-card grid grid-cols-1 gap-4 rounded-3xl border border-line bg-card/20 p-6 sm:grid-cols-[1fr_2fr] sm:gap-12 sm:p-8"
                >
                  <div>
                    <div className="font-display text-xl font-light tracking-tight sm:text-2xl">
                      {v.org}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">{v.role}</div>
                    <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                      {v.when}
                    </div>
                  </div>
                  <p className="self-center text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {v.note}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Skills */}
        <section className="mt-24">
          <h2 className="mb-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            [ Skills ]
          </h2>
          <ul className="flex flex-wrap gap-3">
            {SKILLS.map((s) => (
              <li
                key={s}
                className="rounded-full border border-line bg-card/30 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground/85"
              >
                {s}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-20 flex flex-wrap items-center gap-4">
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            View resume
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link
            to="/contact"
            className="text-sm font-medium underline decoration-signal decoration-2 underline-offset-[6px] transition-colors hover:text-signal"
          >
            Get in touch
          </Link>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
