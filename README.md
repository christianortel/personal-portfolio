# christianortel.com — Personal Portfolio

Portfolio of **Christian Ortel** — Senior Data Analyst & AI/Analytics Engineer (Tampa, FL).
Editorial "warm paper" design with a fast, responsive portfolio ID hero. Live at
[christianortel.com](https://christianortel.com).

## Highlights

- **Recruiter-first hero** — an immediately rendered portfolio ID, concise positioning,
  verified impact highlights, and direct routes to work and the downloadable resume.
- **Two themes** — warm cream/ink/amber light (default) + graphite dark, persisted
  toggle, no flash-of-wrong-theme.
- **ReactBits-style effects, hand-rolled** — decrypted/scramble text, blur-in
  headings, magnetic buttons, cursor spotlight cards, 3D tilt, shiny + animated
  gradient text, staggered mobile menu. All GSAP/CSS, no extra deps, all
  `prefers-reduced-motion` aware.
- **⌘K command palette** (cmdk) — jump to pages, copy email, download resume.
- **Real content** — specific professional outcomes (Citi reporting automation:
  4 weeks to 10 minutes; Gemini/RAG over a 1.5M-row Snowflake dataset), four
  ventures ([Tallownaise](https://tallownaise.com),
  [Motionless Labs](https://motionlesslabs.com), Peptipedia, toxinmap), and the
  public GitHub catalog grouped by category (AI & LLM, data & prediction,
  Web3, games & extensions).
- **SEO/a11y** — per-route meta + canonical + branded OG images, JSON-LD
  (Person/WebSite/Breadcrumb), sitemap + robots, skip link, focus rings.

## Stack

TanStack Start v1 (React 19, file-based routing) · Vite · TypeScript strict ·
Tailwind v4 · shadcn/ui · GSAP + ScrollTrigger ·
builds to Cloudflare Workers (nitro `cloudflare-module` preset), deployable
with wrangler — no platform lock-in.

## Development

```bash
npm install
npm run dev        # http://localhost:8080
npm run build      # production build (Cloudflare Workers output)
npm test           # vitest — data-invariant tests for projects/site config
npx tsc --noEmit   # typecheck
```

Routes live in `src/routes/` (never edit `routeTree.gen.ts`), shared data in
`src/lib/` (`site.ts` = domain/contact constants, `projects.ts` = project cards),
effects in `src/components/fx/`.

---

Designed and built by Christian Ortel.
