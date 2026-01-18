# The Bruce Group - Marketing Website

This is the public marketing website for The Bruce Group, Australia's premier property intelligence and management firm.

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

## Deployment to Vercel

1. Push this folder to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically detect it as a Next.js project and deploy

### Environment Variables

No environment variables are required for the marketing site. The Formspree integration is configured in `lib/config.ts`.

## Project Structure

```
marketing/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── enquire/           # Waitlist enquiry form
│   ├── markets/           # Markets page
│   ├── privacy/           # Privacy policy
│   ├── services/          # Service pages
│   │   ├── stays/         # Holiday & Executive Stays
│   │   ├── rentals/       # Premium Residential
│   │   └── intelligence/  # Property Intelligence
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Header, footer
│   └── ui/               # UI components (logo)
├── lib/                   # Utilities
│   ├── config.ts         # Site configuration
│   └── utils.ts          # Helper functions
└── public/               # Static assets
    └── images/           # Images and icons
```

## Configuration

All site configuration is centralised in `lib/config.ts`:

- Company information (name, contact, address)
- Service details and pricing
- Market listings
- Statistics
- Formspree endpoint

## Forms

The site uses [Formspree](https://formspree.io) for form handling. Forms are configured to submit to the endpoint specified in `lib/config.ts`.

Current endpoint: `https://formspree.io/f/mgooandl`

## Styling

The site uses:
- Tailwind CSS for styling
- Custom CSS variables for the design system
- Google Fonts: Playfair Display, Source Serif Pro, Inter, Cormorant Garamond

The complete design system is defined in `app/globals.css`.

## Legal Pages

Privacy Policy and Terms of Service pages are included and comply with:
- Privacy Act 1988 (Cth)
- Australian Privacy Principles
- Queensland state regulations
- Australian Consumer Law

These pages should be reviewed by a legal professional before going live.
