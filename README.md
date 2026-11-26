# SHASTI.EXE ♡ — A Digital Love Experience

A private, interactive love letter from **Dheena (Batman)** to **Shasti (Catwoman)**.
Coquette × Dark Romance. Built with React + Vite + TypeScript + Tailwind CSS + Framer Motion + Lucide.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Production build

```bash
npm run build    # outputs to dist/
npm run preview  # preview the production build
```

## The experience

1. **Access gate** — secret phrase `i love u` (case-insensitive, trims spaces).
   Remembered for the browser session only. This is a playful frontend gate,
   not real authentication.
2. **Opening** — cinematic loading, "Hey, Shasti Babe." → *Enter our little world ♡*
3. **Ch. 01 The Love Letter** — handwritten reveal of Dheena's letter.
4. **Ch. 02 — 101 Reasons** — tappable cards with a progress indicator.
5. **Ch. 03 Our Little Memory** — night-sky timeline with a typing story.
6. **Ch. 04 Batman × Catwoman** — split-screen characters, Gotham skyline, dialogue.
7. **Ch. 05 The Little Things** — scrapbook cards (add photos later, see below).
8. **Ch. 06 The Main Question** — "Do you know how much I love you?" Both answers work.
9. **Ch. 07 The Last Message** — cinematic ending with *Read it all again ♡*

A persistent music player (bottom-right) survives all page transitions.
It never autoplays — music starts only when Shasti taps play.

## Edit the personal content

Everything personal lives in **`src/data/content.ts`**:

- `CONFIG.secretPhrase` — the gate password
- `CONFIG.songSrc` — path to the music file (see Music below)
- `LETTER_PARAGRAPHS` — the love letter
- `REASONS` — all 101 reasons (title + longer detail per card)
- `MEMORY_CHAPTERS` / `MEMORY_STORY` — placeholders marked `[Add … here]`
  for dates/conversations Dheena hasn't supplied yet
- `DIALOGUE` — Batman × Catwoman lines
- `LITTLE_THINGS` — set `photo: "/photos/smile.jpg"` to add real photos
  (put files in `public/photos/`)
- `APPRECIATION_MESSAGE` — shown for "Tell me again 🥺"

## Music

Drop the owner's licensed audio file at:

```
public/audio/ey-sandakara.mp3
```

(or change `songSrc` in `src/data/content.ts`).
Do not commit copyrighted music you don't have permission to use.
Until a file is added, the player gracefully falls back to a gentle
built-in loop so the control still works.

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel: **Add New → Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output: `dist`.
   (A `vercel.json` with these settings is included.)
4. Deploy. Done — share the link with Shasti Babe. ♡

## Notes

- Mobile-first, tested layout at 360 / 390 / 430px widths; no horizontal overflow.
- Respects `prefers-reduced-motion`.
- Semantic HTML, labelled controls, keyboard-focusable buttons/inputs.
- No backend, no database, no API keys.
