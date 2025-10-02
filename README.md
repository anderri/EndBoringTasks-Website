# End Boring Tasks — Website Starter

A production-ready Next.js 14 + Tailwind starter with your brand colors and a working contact endpoint.

## Quickstart
```bash
pnpm i
pnpm dev
```

## Environment
Create `.env.local`:
```
WEBHOOK_URL= # optional: Make.com/n8n webhook
CONTACT_TO_EMAIL= # optional: e.g. hello@endboringtasks.com
SMTP_URL= # optional: e.g. smtp://user:pass@smtp.server:587
NEXT_PUBLIC_GA_ID= # optional
```

## Brand
- Colors: Blue #4A67F8, Magenta #DB37B8, Navy #090816
- Typography: ITC Avant Garde Gothic Std (add licensed webfont as @font-face in `app/globals.css`)

## Deploy
- Recommended: Vercel. Set env vars in the dashboard.
