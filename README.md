# Birthday Surprise

A static, Vercel-ready Next.js birthday experience built with TypeScript, Framer Motion, Lucide icons, and local assets only.

## Personalize it

Edit `src/data/birthday.ts` to change the name, date, every message, the letter, appreciation cards, timeline, captions, and photo paths. Personal details are not hardcoded into UI components.

Replace `public/memories/1.jpg` through `6.jpg` with your own photos (keep the filenames, or update paths in the config). Replace `public/music/birthday.mp3` with your song. Music starts only after the visitor opens the surprise.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000. Validate with:

```bash
npm run typecheck
npm run lint
npm run build
```

## Deploy to Vercel

Push this `birthday-surprise` folder to a Git repository, import it at Vercel, and use the default Next.js build settings. No database, authentication, API key, or paid service is required; it works on Vercel Hobby.
