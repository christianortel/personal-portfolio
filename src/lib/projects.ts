export interface ProjectMetric {
  k: string;
  v: string;
}

import tallownaiseImg from "@/assets/projects/tallownaise.jpg";
import motionlessImg from "@/assets/projects/motionless.jpg";

export interface Project {
  n: string;
  year: string;
  client: string;
  title: string;
  blurb: string;
  metrics: ProjectMetric[];
  tag: string;
  href: string;
  /** Optional card artwork (product shot / site imagery). */
  image?: string;
  /** One personality line, rendered in italic serif on the card. */
  fun?: string;
}

export interface RepoProject {
  name: string;
  blurb: string;
  lang: string;
  href: string;
  category: "AI & LLM" | "Data & prediction" | "Web3 & smart contracts" | "Games & extensions";
}

export const REPO_CATEGORIES = [
  "AI & LLM",
  "Data & prediction",
  "Web3 & smart contracts",
  "Games & extensions",
] as const;

export const FEATURED_PROJECTS: Project[] = [
  {
    n: "01",
    year: "2026 · Pre-launch",
    client: "tallownaise.com · Founder",
    title: "Tallownaise — real mayo, made with grass-fed beef tallow",
    blurb:
      "A consumer food brand I built end-to-end: classic mayonnaise remade with grass-fed beef tallow and pasture-raised eggs — no seed oils, no gums, no stabilizers. Brand, site, and direct-to-consumer stack are production-ready and heading to market.",
    metrics: [
      { k: "Founder", v: "brand + product + site" },
      { k: "0", v: "seed oils · gums · stabilizers" },
      { k: "DTC", v: "e-commerce build" },
    ],
    tag: "Venture · CPG",
    href: "https://tallownaise.com",
    image: tallownaiseImg,
    fun: "The mascot is a highland cow. That part was non-negotiable.",
  },
  {
    n: "02",
    year: "2026 · Pre-launch",
    client: "motionlesslabs.com · Founder",
    title: "Motionless Labs — research-peptide catalog with verified COAs",
    blurb:
      "A members-only, research-use-only catalog where every batch links to a third-party certificate of analysis — gated catalog access, lot documentation, order tooling, and secure member accounts in one private workspace. Built and production-ready.",
    metrics: [
      { k: "COA", v: "verified per batch" },
      { k: "Members", v: "gated catalog + accounts" },
      { k: "Full-stack", v: "storefront + docs + orders" },
    ],
    tag: "Venture · E-commerce",
    href: "https://motionlesslabs.com",
    image: motionlessImg,
    fun: "Every vial ships with receipts — literally.",
  },
  {
    n: "03",
    year: "2026 · Pre-launch",
    client: "peptipedia.com · Founder",
    title: "Peptipedia — a plain-language peptide encyclopedia",
    blurb:
      "The education arm of Motionless Labs, kept deliberately separate from anything for sale: reference pages and research summaries on peptides, written so a non-scientist can follow the evidence.",
    metrics: [
      { k: "Reference", v: "plain-language entries" },
      { k: "Separate", v: "education ≠ store" },
      { k: "Founder", v: "with Motionless Labs" },
    ],
    tag: "Venture · Education",
    href: "https://peptipedia.com",
    fun: "Wikipedia energy, peptide subject matter.",
  },
  {
    n: "04",
    year: "2026 · Pre-launch",
    client: "toxinmap · Founder",
    title: "3D globe for U.S. toxic releases & PFAS exposure context",
    blurb:
      "A U.S.-first interactive globe exploring toxic releases, PFAS contamination, wastewater pathways, modeled air-toxics screening, and literature-backed emerging chemicals of concern. Launching at toxinmap.com.",
    metrics: [
      { k: "3D", v: "interactive globe" },
      { k: "Public", v: "data joins" },
      { k: "Open source", v: "on GitHub" },
    ],
    tag: "Environment · Data viz",
    href: "https://github.com/christianortel/toxinmap",
    fun: "Find out what's in your backyard. Sorry in advance.",
  },
  {
    n: "05",
    year: "2026",
    client: "rockstar-games-sales",
    title: "Interactive atlas of Rockstar Games releases & sales",
    blurb:
      "Next.js atlas of Rockstar releases — sales estimates, platform breakdowns, head-to-head comparisons, and a built-in SQL data lab for ad-hoc questions over the canon.",
    metrics: [
      { k: "Next.js", v: "TypeScript" },
      { k: "SQL lab", v: "in-browser" },
      { k: "Catalog", v: "full Rockstar" },
    ],
    tag: "Side project · Analytics",
    href: "https://github.com/christianortel/rockstar-games-sales",
    fun: "Your GTA childhood, quantified.",
  },
  {
    n: "06",
    year: "2026",
    client: "marketing-analytics-suite",
    title: "Multi-channel marketing intelligence (ROAS / CPA)",
    blurb:
      "Full-stack Python + SQL suite for optimizing multi-channel ad spend — channel-level ROAS, CPA, and incrementality views designed to be wired straight into a planning loop.",
    metrics: [
      { k: "Python", v: "+ SQL" },
      { k: "ROAS / CPA", v: "modeled" },
      { k: "Multi-ch", v: "attribution" },
    ],
    tag: "Growth · Marketing",
    href: "https://github.com/christianortel/marketing-analytics-suite",
    fun: "Finds out which ad dollars are lying to you.",
  },
  {
    n: "07",
    year: "2026",
    client: "chromehearts-price-tracker",
    title: "Resale price tracker across Grailed, StockX, Poshmark, eBay, Rinkan",
    blurb:
      "Tracks Chrome Hearts retail pricing and pulls live resale comps across the major secondary markets — a working playground for scrape pipelines, cleaning, and longitudinal price analysis.",
    metrics: [
      { k: "6+", v: "marketplaces" },
      { k: "Python", v: "scrape + ETL" },
      { k: "Longitudinal", v: "price series" },
    ],
    tag: "E-commerce · Pricing",
    href: "https://github.com/christianortel/chromehearts-price-tracker",
    fun: "Streetwear pricing is chaos. This is its spreadsheet.",
  },
];

/** Full public-repo catalog from github.com/christianortel (original work, no forks). */
export const MORE_PROJECTS: RepoProject[] = [
  // AI & LLM
  {
    name: "livestream-agent-dazzle",
    blurb: "An AI agent experiment for live-stream interaction.",
    lang: "HTML",
    href: "https://github.com/christianortel/livestream-agent-dazzle",
    category: "AI & LLM",
  },
  {
    name: "ChatGPT-Whatsapp",
    blurb: "WhatsApp chatbot bridging conversations to GPT on the go.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/ChatGPT-Whatsapp",
    category: "AI & LLM",
  },
  {
    name: "discord-voice-bot",
    blurb: "Voice-enabled Discord bot experiments.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/discord-voice-bot",
    category: "AI & LLM",
  },
  {
    name: "chatgpt3gametest",
    blurb: "A mini game built entirely by prompting GPT-3 — early LLM tinkering.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/chatgpt3gametest",
    category: "AI & LLM",
  },
  // Data & prediction
  {
    name: "UFC-FightPredictor",
    blurb: "End-to-end data science app predicting UFC fight outcomes.",
    lang: "Python",
    href: "https://github.com/christianortel/UFC-FightPredictor",
    category: "Data & prediction",
  },
  {
    name: "premier-league-predictor",
    blurb: "Web scraping + statistical modeling for football match analysis.",
    lang: "Python",
    href: "https://github.com/christianortel/premier-league-predictor",
    category: "Data & prediction",
  },
  {
    name: "toxins-dashboard",
    blurb: "Companion dashboard to toxinmap for environmental data slices.",
    lang: "TypeScript",
    href: "https://github.com/christianortel/toxins-dashboard",
    category: "Data & prediction",
  },
  {
    name: "coldplunge-sauna-redlight-tracker",
    blurb: "Recovery-protocol tracker for cold plunge, sauna, and red-light sessions.",
    lang: "TypeScript",
    href: "https://github.com/christianortel/coldplunge-sauna-redlight-tracker",
    category: "Data & prediction",
  },
  // Web3 & smart contracts
  {
    name: "OpenEmoji-NFT",
    blurb: "Open-source emoji NFT collection — Solidity smart contracts.",
    lang: "Solidity",
    href: "https://github.com/christianortel/OpenEmoji-NFT",
    category: "Web3 & smart contracts",
  },
  {
    name: "RealEstateDemo",
    blurb: "Demo for decentralizing property sales as NFTs on EVM chains.",
    lang: "Solidity",
    href: "https://github.com/christianortel/RealEstateDemo",
    category: "Web3 & smart contracts",
  },
  {
    name: "Hotel-Room-NFT-v1",
    blurb: "Tokenized hotel-room access experiment in Solidity.",
    lang: "Solidity",
    href: "https://github.com/christianortel/Hotel-Room-NFT-v1",
    category: "Web3 & smart contracts",
  },
  {
    name: "GreedyBot",
    blurb: "Crypto trading bot v1.1 — signals and automated execution.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/GreedyBot",
    category: "Web3 & smart contracts",
  },
  {
    name: "mytestnetprojects",
    blurb: "A grab bag of local EVM testnet experiments.",
    lang: "Solidity",
    href: "https://github.com/christianortel/mytestnetprojects",
    category: "Web3 & smart contracts",
  },
  // Games & extensions
  {
    name: "flappy-bird",
    blurb: "Polished browser remake of Flappy Bird as a static web app.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/flappy-bird",
    category: "Games & extensions",
  },
  {
    name: "interactivebuddy-v2",
    blurb: "Remake of the original Newgrounds Interactive Buddy flash game.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/interactivebuddy-v2",
    category: "Games & extensions",
  },
  {
    name: "bionicreader-google-extension",
    blurb: "Privacy-first focus-reading Chrome extension for calmer web reading.",
    lang: "JavaScript",
    href: "https://github.com/christianortel/bionicreader-google-extension",
    category: "Games & extensions",
  },
  {
    name: "personal-portfolio",
    blurb: "This site — TanStack Start, React 19, GSAP, and a physics-based 3D lanyard.",
    lang: "TypeScript",
    href: "https://github.com/christianortel/personal-portfolio",
    category: "Games & extensions",
  },
];
