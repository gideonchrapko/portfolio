# Content (Markdown)

Two collections drive the site: **pages** (front + about) and **projects**.

## Pages (front page + about)

- **`pages/home.md`** – Front page content (title, description, body).
- **`pages/about.md`** – About page content.

Edit the frontmatter (title, description) and the body (Markdown). Use `![alt](path)` for images; put images in `public/` or next to the `.md` file and reference them by path.

## Projects

- **`projects/*.md`** – One file per project. Frontmatter: `title`, `description`, optional `date`, `url` (live project link), `image`, `images`, `sections`, `draft`, `tags`, `category`, etc. Set `url` to a full URL (e.g. `https://example.com`) to show a “View site →” link in the project header.
- List: **`/projects`**
- Single: **`/projects/<filename-without-ext>`** (e.g. `project-1.md` → `/projects/project-1`).

Add a new project by creating `projects/my-project.md` with the same frontmatter. Set `draft: true` to hide it from the list.

### Tags (single source of truth)

- **Add or remove tags:** Edit **`src/data/tags.ts`** only. That file is the single source of truth used everywhere:
  - **Projects page** – filter badges and labels
  - **Experience** – `src/data/experience.ts` lists capabilities as an array of tag **slugs** (e.g. `capabilities: ["react", "nextjs"]`); labels are resolved from `tags.ts`
  - **Project .md frontmatter** – use the same slugs: `tags: [react, nextjs, editorial]`
- Project frontmatter is validated at build time: if you use a tag slug that isn’t in `tags.ts`, the build will fail and tell you to add it there.

### Images

- **In-repo (recommended):** Put images under **`public/projects/<project-slug>/`** (e.g. `public/projects/my-project/01.jpg`). In frontmatter use paths from the site root: `image: /projects/my-project/hero.jpg` or `images: [/projects/my-project/01.jpg, ...]`. Same for `sections[].images` and `sections[].videos`.
- **External:** You can use full URLs instead (e.g. Vercel Blob, S3, Cloudinary). Paste the URL in `image`, `images`, or `sections[].images`; the project page accepts both paths and URLs.

### Videos (and keeping file size low)

**Where to add videos**

- **Top-level:** In the project frontmatter use `videos:` with a list of URLs (or paths from `public/`), or objects with `webm`/`mp4` for both codecs:
  ```yaml
  videos:
    - https://your-cdn.com/demo.mp4
  # Or for WebM + MP4 (browser picks best):
  # videos:
  #   - webm: https://cdn.example.com/demo.webm
  #     mp4: https://cdn.example.com/demo.mp4
  ```
- **Per section:** Use `sections[].videos` the same way when the project has sections:
  ```yaml
  sections:
    - title: Lottie Animations
      videos:
        - https://your-cdn.com/lottie-final.mp4
  ```

**Lowest file size approach**

1. **Don’t put video files in the repo** – They bloat the repo and the deployment. Host them elsewhere and use **full URLs** in frontmatter.
2. **Use a CDN / video host** – e.g. **Vercel Blob**, **Cloudinary**, **Mux**, or **Bunny Stream**. You get streaming, caching, and often automatic encoding.
3. **Compress before upload** – Shorter clips and lower resolution/bitrate keep size down. Example with FFmpeg (WebM is often smaller than MP4 at similar quality):
   ```bash
   # WebM (VP9), ~1 Mbps, good for web
   ffmpeg -i input.mp4 -c:v libvpx-vp9 -b:v 1M -c:a libopus -b:a 128k output.webm
   # MP4 (H.264) fallback for Safari
   ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
   ```
4. **Use both WebM and MP4 for smallest size** – You can give the browser a choice so it picks the format it supports (Chrome/Firefox often use WebM, Safari uses MP4). Use an object with `webm` and/or `mp4` URLs instead of a single string:
   ```yaml
   videos:
     - webm: https://cdn.example.com/demo.webm
       mp4: https://cdn.example.com/demo.mp4
   ```
   The template renders `<video>` with two `<source>` elements; the browser chooses one. List WebM first in the object so it’s preferred where supported.
5. **Show video controls** – You can show the browser’s native playback UI (play, pause, progress, volume) in two ways:
   - **Project default:** In frontmatter set `showVideoControls: true` to show controls on all videos in that project (default is `false`).
   - **Per video:** For object-style entries (with `webm`/`mp4`), add `controls: true` or `controls: false` to override the project default for that video only:
   ```yaml
   videos:
     - webm: https://cdn.example.com/a.webm
       mp4: https://cdn.example.com/a.mp4
       controls: false
     - webm: https://cdn.example.com/b.webm
       mp4: https://cdn.example.com/b.mp4
       controls: true
   ```
6. **Site behavior** – The project page uses `preload="metadata"` so the full file isn’t downloaded until the user presses play.

**Summary:** Host videos on a CDN, compress them (e.g. with FFmpeg), and put the CDN URLs in `videos` or `sections[].videos`. Avoid storing large video files in `public/`.

## Config

**`src/content.config.ts`** defines the schema (required/optional fields). Adjust the schema there if you add new frontmatter fields.
