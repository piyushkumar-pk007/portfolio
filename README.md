# Piyush Kumar Portfolio

Single-page portfolio and project showcase for Piyush Kumar, built with React, Vite, Tailwind CSS, React Router, Framer Motion, Lucide React, and Recharts.

## Quickstart

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Edit Content

All portfolio content lives in `src/content/`.

- `src/content/profile.js` controls personal details, hero copy, nav labels, and global UI copy.
- `src/content/skills.js` controls grouped skills.
- `src/content/experience.js` controls experience timeline entries.
- `src/content/projects.js` controls project cards and auto-routed project detail pages.
- `src/content/education.js` controls education cards.
- `src/content/achievements.js` controls competitions and certifications.

## Replace The Resume PDF

The download button points to:

`public/resume/Piyush_Kumar_Resume.pdf`

Replace the placeholder file at that path with the real resume PDF and keep the filename the same, or update `profile.resumeUrl` in `src/content/profile.js`.

## Add A New Project

1. Add a new object to the `projects` array in `src/content/projects.js`.
2. Provide a unique `slug`.
3. Fill in the card summary, pipeline, modules, impact metrics, pitches, and honesty note.

Project cards on the home page and routes under `/projects/:slug` are generated automatically from this content.

## Deployment

### Vercel

This project works as a standard Vite deployment:

1. Import the repo into Vercel.
2. Keep the default build command: `npm run build`
3. Keep the default output directory: `dist`

### Netlify

Use:

- Build command: `npm run build`
- Publish directory: `dist`

The included `public/_redirects` file enables SPA routing for direct visits to project detail URLs.

## Resume And Content Notes

- GitHub, LinkedIn, and repository URLs are currently placeholders from the prompt and should be confirmed.
- The project detail pages intentionally preserve the honesty framing notes from the content layer.

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- Lucide React
- Recharts

## Credits

- Portfolio content provided in the project brief
- Fonts: Inter and JetBrains Mono via Google Fonts
