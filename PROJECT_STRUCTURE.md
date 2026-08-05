# Project post structure

Each project lives in `src/content/projects/*.md` with this frontmatter and optional body.

## Frontmatter

| Field           | Required | Description                                                                                                                         |
| --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `title`         | Yes      | Project name (e.g. "Stand With Crypto State Advocacy Editorial")                                                                    |
| `description`   | No       | Short line for cards and SEO                                                                                                        |
| `date`          | No       | When you shipped or finished (YYYY-MM-DD)                                                                                           |
| `draft`         | No       | `true` = hidden from listings (default `false`)                                                                                     |
| `category`      | No       | One of `graphic-design`, `motion`, `engineering` (default `graphic-design`). Used for nav dropdown and projects index grouping. |
| `tags`          | No       | Array for filtering (e.g. `[editorial, illustration]`) — match slugs in Experience capabilities if you want tag links               |
| **Intro (1.1)** |          |                                                                                                                                     |
| `roles`         | No       | Array, e.g. `["Editorial Designer", "Illustration Designer"]`                                                                       |
| `tools`         | No       | Array, e.g. `["Adobe InDesign", "Adobe Illustrator"]`                                                                               |
| `overview`      | No       | PROJECT OVERVIEW paragraph(s) (multiline with `\|`)                                                                                 |
| **Media**       |          |                                                                                                                                     |
| `sections`      | No       | For multi-section projects (see below). If you use this, prefer it over top-level `images`/`videos` for the main content.           |
| `images`        | No       | Simple project: list of image paths (e.g. `/projects/slug/01.jpg`)                                                                  |
| `videos`        | No       | Simple project: list of video paths or URLs                                                                                         |

## Two patterns

### 1. Simple project (intro + one set of media)

Example: Stand With Crypto Editorial (intro + 20 photos).

- Use `roles`, `tools`, `overview`.
- Use top-level `images` and/or `videos` with paths under `public/`.

```yaml
title: Stand With Crypto State Advocacy Editorial
roles: [Editorial Designer, Illustration Designer]
tools: [Adobe InDesign, Adobe Illustrator]
overview: |
  I worked with project coordinators...
images:
  - /projects/stand-with-crypto/01.jpg
  - /projects/stand-with-crypto/02.jpg
```

### 2. Sectioned project (2.1, 2.2, 3.1, etc.)

Example: Coinbase One (intro + sections like "Initial Drafts Regular", "Lottie Animations" with links).

- Use `roles`, `tools`, `overview`.
- Use `sections` — each item can have:
  - `id`: optional (e.g. `"2.1"`)
  - `title`: section heading
  - `images`: array of paths
  - `videos`: array of paths or URLs
  - `link`: single URL (e.g. Lottie share link)

```yaml
title: Coinbase One Full Screen Takeover
roles: [Motion Designer]
tools: [Illustrator, After Effects, Lottie]
overview: |
  For the Coinbase One takeover...
sections:
  - id: '2.1'
    title: Initial Drafts Regular
    images: [/projects/coinbase-one/2-1-01.jpg, ...]
  - id: '4.1'
    title: Lottie Animations
    link: https://app.lottiefiles.com/share/...
    videos: [/projects/coinbase-one/lottie-final.mp4]
```

## Where to put assets

- **Images/videos:** under `public/projects/<project-slug>/` (e.g. `public/projects/coinbase-one-takeover/`).
- In frontmatter use paths starting with `/` (e.g. `/projects/coinbase-one-takeover/01.jpg`).

## Example projects added

- **stand-with-crypto-editorial.md** — simple (intro + images). Set `draft: false` and add your 20 image paths.
- **coinbase-one-takeover.md** — sectioned (intro + sections with images/videos/link). Set `draft: false` and add real paths under `public/projects/coinbase-one/`.

The project page template (`src/pages/projects/[id].astro`) can be updated to render roles, tools, overview, and either a single gallery or sectioned galleries; the schema above supports both.
