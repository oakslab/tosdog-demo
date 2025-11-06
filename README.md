# TOSDog AI Demo

A demo Terms of Service management site built with Next.js 16, featuring a modern landing page and Redis-backed content management.

## Features

- Modern AI text editor landing page
- Dynamic Terms of Service page
- Dynamic Privacy Policy page
- Admin panel for managing both policies
- Redis storage for content
- Dark mode support
- Responsive design with Tailwind CSS

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Redis (node-redis)
- react-markdown
- Tailwind CSS v4

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables:

Copy `.env.local.example` to `.env.local` and add your Redis URL:

```bash
REDIS_URL=your_redis_url_here
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

- `/` - Landing page for TOSDog AI
- `/terms-of-service` - Terms of Service display
- `/privacy-policy` - Privacy Policy display
- `/admin` - Admin panel for managing ToS and Privacy Policy
- `/api/update-tos` - API endpoint for updating content

## Admin Panel

Visit `/admin` to manage both Terms of Service and Privacy Policy content. The admin panel supports markdown formatting for rich text content.

## Deployment

The easiest way to deploy is on Vercel. Make sure to set the `REDIS_URL` environment variable in your deployment settings.
