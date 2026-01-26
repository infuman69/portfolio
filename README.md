This is a [Next.js](https://nextjs.org) portfolio website for Soham Saha Roy, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Environment Setup

1. Copy the example environment file:
```bash
cp .env.example .env.local
```

2. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://ssroy.com
```

### Running the Development Server

First, install dependencies and run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Updating Content

All portfolio content is centralized in `app/data/portfolio.ts`. Update this file to modify:
- Personal information (name, location, role, bio)
- Work experience
- Projects
- Social media links

The site URL is configured via environment variables for easy deployment across different environments.

## Features

- 🎨 Dark/Light theme support
- 📱 Fully responsive design
- ⚡ Optimized for performance
- 🔍 SEO optimized with structured data
- 📊 Sitemap and robots.txt auto-generated
- 🎯 TypeScript for type safety

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
