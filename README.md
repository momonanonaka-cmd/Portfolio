# Personal Portfolio

An editorial, minimal personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion — centered on an interactive **Map of Thought**.

## 1. Run it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000). The dev server has hot reload — edits to any file in `src/` show up instantly.

To check the production build before deploying:

```bash
npm run build
npm start
```

## 2. Where to edit your personal information

Almost everything content-related lives in `src/data/`. You should rarely need to touch the component files (`src/components/`) to update content.

| File | What it controls |
|---|---|
| `src/data/site.ts` | Your name, role, tagline, hero intro, email, social links, contact statement. **Start here.** |
| `src/data/thoughts.ts` | The nodes on the Map of Thought (see below). |
| `src/data/projects.ts` | The Projects section. |
| `src/data/experience.ts` | The Experience timeline. |
| `src/data/writing.ts` | Essays / writing entries. |
| `src/data/connections.ts` | The paired "X × Y" cards in the Connections section. |

Every placeholder is marked with a `// TODO` comment or bracketed text like `[City]` — search the `src/data/` folder for `TODO` to find everything that still needs your real information.

## 3. How to add a Map of Thought node

Open `src/data/thoughts.ts` and add an entry to the `thoughts` array:

```ts
{
  id: "my-new-idea",       // unique, kebab-case
  title: "My New Idea",
  category: "concept",     // "interest" | "industry" | "concept" | "place" | "value" | "skill"
  size: "small",           // "large" | "medium" | "small" — controls visual weight
  x: 40,                   // position, 0–100 (% of the map's width)
  y: 60,                   // position, 0–100 (% of the map's height)
  description: "A sentence or two, written in the first person, that appears in the detail panel.",
  related: ["technology", "design"], // ids of other nodes this should connect to
  projects: ["connect"],   // optional — ids from projects.ts
}
```

Tips:
- Place new nodes near their thematic neighbors (check nearby `x`/`y` values) so the constellation stays legible instead of overlapping.
- `related` should be reciprocal where it makes sense — if A lists B, consider adding A to B's `related` array too, so the connection line appears regardless of which node the visitor hovers first.
- `large` nodes get always-on labels; `medium`/`small` nodes reveal their label on hover, focus, or when a related node is active.

## 4. How to add a project

Open `src/data/projects.ts` and add an entry to the `projects` array. Each project needs a `shortDescription` (shown in the list) and a `longDescription` (shown when "Read more" is expanded). `relatedThoughts` should reference `id`s from `thoughts.ts` — these appear as tags on hover and drive the "related projects" list inside the Map of Thought detail panel.

## 5. How to add a piece of writing

Open `src/data/writing.ts` and add an entry to the `writing` array. Each entry automatically gets its own page at `/writing/<slug>` — no routing code to touch.

The `content` field is currently an array of plain paragraphs (placeholder). If you'd like to write in Markdown or MDX instead:

1. Install MDX support: `npm install @next/mdx @mdx-js/loader @mdx-js/react`
2. Store each essay as a `.mdx` file (e.g. `src/content/writing/my-essay.mdx`) instead of inline strings.
3. In `src/app/writing/[slug]/page.tsx`, replace the `entry.content.map(...)` block with your MDX renderer.

The rest of the site (the list view, metadata, routing) doesn't need to change.

## 6. How to change images

- **Portrait (About section):** set `portrait: "/portrait.jpg"` in `src/data/site.ts` and add the image file to `public/portrait.jpg`. Leave it `null` to hide the image entirely.
- **Project images:** add an `image` path (e.g. `"/projects/connect.jpg"`) to any entry in `src/data/projects.ts` and drop the file in `public/projects/`. (The current build doesn't render project images yet — add an `<Image>` inside `ProjectCard.tsx` once you have real photography/screenshots, so you're not shipping placeholder art.)
- **Social share image:** replace `public/og-image.png` (1200×630px) — this is what shows up when the site is shared on social media / iMessage.
- **Favicon:** replace `src/app/favicon.ico`.

## 7. Deploying to Vercel (free)

1. Push this project to a GitHub (or GitLab/Bitbucket) repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave the default settings (Vercel auto-detects Next.js) and click **Deploy**.
4. Every subsequent push to your main branch redeploys automatically.

Alternatively, from the command line:

```bash
npm install -g vercel
vercel
```

## 8. Connecting a custom domain

1. In the Vercel dashboard, open your project → **Settings → Domains**.
2. Add your domain (e.g. `yourname.com`).
3. Vercel will show you DNS records (usually an `A` record or `CNAME`) — add these at your domain registrar.
4. Once DNS propagates (a few minutes to a few hours), Vercel issues an SSL certificate automatically.
5. Update `siteUrl` in `src/app/layout.tsx`, `src/app/robots.ts`, and `src/app/sitemap.ts` to your real domain so metadata, Open Graph tags, and the sitemap point to the right place.

## Project structure

```
src/
  app/            # routes: home page, /writing/[slug], robots, sitemap
  components/      # Navbar, Hero, ThoughtMap/, About, Experience, Projects, Writing, Connections, Contact, Footer
  data/            # site.ts, thoughts.ts, projects.ts, experience.ts, writing.ts, connections.ts — edit these for content
  lib/             # small shared utilities (cn, useMediaQuery)
```

## Accessibility & motion

- The Map of Thought's nodes are real, focusable `<button>` elements — the whole thing is navigable with Tab/Enter/Space, no mouse required.
- The detail panel is a proper dialog (`role="dialog"`, `aria-modal`, focus is sent to the close button on open, `Escape` closes it).
- Everything respects `prefers-reduced-motion`: floating/parallax motion is disabled and transitions collapse to near-instant.
