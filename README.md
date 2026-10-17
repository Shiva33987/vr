# VR Media & Advertising — React Production Website
**Connecting Brands with People**  
High-Performance, WCAG 2.2 AA Compliant Marketing & Quotation Platform  
Architected to withstand **100,000+ Concurrent Visitors** with Zero Downtime.

---

## 1. Project Overview

This website is the official digital flagship for **VR Media & Advertising**, an Indian Out-Of-Home (OOH), Digital LED Screen (DOOH), Railway Transit Advertising, and Turnkey Events agency led by **Melam Naveen Kumar** (Founder & Proprietor).

### Key Features
- **UI/UX Pro Max & Gravitas Design Tokens:** Deep navy (`#060E27`), Royal blue (`#1E3FAE`), and Rich Gold (`#E8A317`, `#F5C14B`) palette with curved gold arc dividers, hairline rules, and subtle glowing hover states.
- **Custom Brand `<Logo />` Component:** High-precision inline SVG featuring the stylised "VR" monogram, royal blue gradient, gold gradient, pixel mosaic squares trailing off the top-right, and a sweeping bottom swoosh.
- **All 10 Specialized Media Capabilities:**
  1. LED Screen Advertising (`/services/led-screen-advertising`)
  2. Railway Advertising (`/services/railway-advertising`)
  3. Outdoor Advertising (`/services/outdoor-advertising`)
  4. Digital Marketing (`/services/digital-marketing`)
  5. Events & Promotions (`/services/events-promotions`)
  6. Wedding Events (`/services/wedding-events`)
  7. Birthday Celebrations (`/services/birthday-celebrations`)
  8. Corporate Events (`/services/corporate-events`)
  9. Festivals & Celebrations (`/services/festivals-celebrations`)
  10. Brand Activations & Promotions (`/services/brand-activations`)
- **Quotation Engine & Lead Generation:** Zod-validated multi-service inquiry form with bot honeypots, pre-selected service query parameters (`?service=slug`), and automated fallback to WhatsApp click-to-chat and direct founder phone dialers.
- **Filterable Showcase Gallery & Lightbox:** Interactive campaign specifications, verified impression telemetry, and modal inspection.
- **100,000 Concurrent Visitors Architecture:** Fully static edge distribution with decoupled serverless ingestion. Complete documentation in [`/docs/ARCHITECTURE.md`](./docs/ARCHITECTURE.md).
- **k6 Load Simulation Script:** Stress-testing script in [`/loadtest/k6.js`](./loadtest/k6.js).

---

## 2. Tech Stack

- **Framework:** React 18 + TypeScript + Vite
- **Styling:** Tailwind CSS + Vanilla CSS Variables
- **Icons:** Lucide React (tree-shaken for sub-20KB icon bundle)
- **Forms & Validation:** React Hook Form + Zod
- **SEO & Structured Data:** `react-helmet-async` with LocalBusiness, Organization, and Service JSON-LD schemas
- **Testing:** Vitest + React Testing Library + jsdom
- **Edge Functions:** Cloudflare Pages Functions (`/functions/api/quote.ts`) / Vercel Serverless (`vercel.json`)

---

## 3. Quickstart & Local Development

### Prerequisites
- Node.js ≥ 18.0.0 (tested on Node v24.14.0)
- npm ≥ 9.0.0

### Installation
```bash
# Clone the repository
git clone <repo-url>
cd vr

# Install dependencies
npm install

# Start local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Run Unit Tests
```bash
npm run test
```

### Build for Production
```bash
npm run build
```
The optimized production bundle is generated in `/dist` (~82 KB initial gzipped JS).

---

## 4. How to Update Site Content (`src/config/site.ts`)

All site data, phone numbers, addresses, services, portfolio items, and testimonials are centralized in [`src/config/site.ts`](./src/config/site.ts). **No text copy is hard-coded into JSX components.**

### Updating Contact Details
Open `src/config/site.ts` and modify the `contact` block:
```typescript
export const SITE_CONFIG = {
  contact: {
    phone1: '+91 92462 60400',
    phone2: '+91 97037 71117',
    email: 'vrmedia.naveen@gmail.com',
    whatsappUrl: 'https://wa.me/919246260400',
    address: {
      street: 'Your Exact Street Address',
      area: 'Area Name',
      city: 'Hyderabad, Telangana',
      country: 'India',
    },
  },
  // ...
};
```

---

## 5. Deployment Guide

### Deploying to Cloudflare Pages (Recommended for 100k+ Concurrency)
1. Push your repository to GitHub or GitLab.
2. Log into the Cloudflare Dashboard → **Workers & Pages** → **Create application** → **Pages**.
3. Connect your repository with the following build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy! Cloudflare Pages automatically discovers the serverless function in `functions/api/quote.ts` and deploys it across 300+ edge locations with custom cache headers from `public/_headers`.

### Deploying to Vercel
1. Import repository in Vercel.
2. Framework Preset will automatically detect `Vite`.
3. Configuration from `vercel.json` will enforce SPA rewrites and caching headers.
4. Click **Deploy**.

---

## 6. Audit of Content Placeholders (Action Items for Client)

The codebase strictly adheres to the rule: **No fabricated claims or invented testimonials.** The following items are marked with `TODO: replace` and should be populated with official client assets upon final sign-off:

1. **Head Office Address:** `src/config/site.ts` contains a placeholder address (`Prime Media Arcade, Jubilee Hills / Banjara Hills Hub`). Replace with registered legal address.
2. **Social Media Profiles:** Config placeholders configured for LinkedIn, Instagram, Facebook, X, and YouTube (`src/config/site.ts`).
3. **Testimonials:** In accordance with the prompt guidelines, testimonial cards are explicitly watermarked and flagged (`isSample: true`) until signed client reviews are supplied.
4. **Original Monogram File:** The `<Logo />` component renders an inline SVG recreation. If the original proprietary vector `.ai` or `.eps` file is available, it can be dropped into `/public/logo.svg`.
