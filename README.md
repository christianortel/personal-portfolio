# christianortel.com — Personal Portfolio

Portfolio of **Christian Ortel** — Senior Data Analyst & AI/Analytics Engineer (Tampa, FL).
Editorial "warm paper" design with a physics-based 3D lanyard hero. Launching at
[christianortel.com](https://christianortel.com).

## Highlights

- **3D lanyard hero** — draggable ID badge on a rope (Three.js + Rapier physics via
  `@react-three/fiber`), photo front, QR-coded back that scans to the site.
  Draco-free WebP-texture GLB (2.4 MB → 257 KB).
- **Two themes** — warm cream/ink/amber light (default) + graphite dark, persisted
  toggle, no flash-of-wrong-theme.
- **ReactBits-style effects, hand-rolled** — decrypted/scramble text, blur-in
  headings, magnetic buttons, cursor spotlight cards, 3D tilt, shiny + animated
  gradient text, staggered mobile menu. All GSAP/CSS, no extra deps, all
  `prefers-reduced-motion` aware.
- **⌘K command palette** (cmdk) — jump to pages, copy email, download resume.
- **Real content** — experience with quantified outcomes (Citi ICRM RAG: 60%→95%
  AI-SQL accuracy), four ventures ([Tallownaise](https://tallownaise.com),
  [Motionless Labs](https://motionlesslabs.com), Peptipedia, toxinmap), and the
  full original-repo catalog grouped by category (AI & LLM, data & prediction,
  Web3, games & extensions).
- **SEO/a11y** — per-route meta + canonical + branded OG images, JSON-LD
  (Person/WebSite/Breadcrumb), sitemap + robots, skip link, focus rings.

## Stack

TanStack Start v1 (React 19, file-based routing) · Vite · TypeScript strict ·
Tailwind v4 · shadcn/ui · GSAP + ScrollTrigger · Three.js / R3F / Rapier ·
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

Built by Christian Ortel with Claude Code.
