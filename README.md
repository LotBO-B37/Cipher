# The Cipher Archive

An Astro rebuild of the existing HTML archive, keeping the same visual structure and folder names where practical, but moving the content into documented Astro components and content collections.

## Features

- Reusable Astro layout and UI components.
- Fully documented archive entries.
- Content collection schema validation.
- Static deployment on Netlify.
- Expand/collapse archive entries with a small client script.

## Folder structure

```text
/
├─ astro.config.mjs
├─ netlify.toml
├─ package.json
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ EntryCard.astro
│  │  ├─ Hero.astro
│  │  ├─ Nav.astro
│  │  └─ SectionHead.astro
│  ├─ content/
│  │  └─ entries/
│  ├─ content.config.ts
│  ├─ layouts/
│  │  └─ Base.astro
│  ├─ pages/
│  │  ├─ archive.astro
│  │  └─ index.astro
│  └─ scripts/
│     └─ archive.js
```

## Content workflow

1. Add a new Markdown file to `src/content/entries/`.
2. Fill in the required frontmatter fields from the schema.
3. Use `sections` for documented body content.
4. Build and deploy as normal.

## Deployment

- `npm install`
- `npm run build`
- Push to GitHub.
- Connect the repo to Netlify.
- Deploy using `dist` as the publish directory.

## Notes

This build is designed to preserve the existing naming and structure as much as possible while improving documentation and maintainability.
