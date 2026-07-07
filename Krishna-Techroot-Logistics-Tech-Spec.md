# Krishna Techroot Logistics — Technical Specification Document

**Version:** 1.0  
**Date:** July 2026  
**Status:** Draft — Ready for Development  
**Audience:** Frontend developers, deployment engineers, integration engineers

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Goals & Constraints](#2-goals--constraints)
3. [Phase Scope](#3-phase-scope)
4. [Information Architecture](#4-information-architecture)
5. [Page Specifications](#5-page-specifications)
6. [Design System](#6-design-system)
7. [Technology Stack](#7-technology-stack)
8. [Project Structure](#8-project-structure)
9. [Component Specifications](#9-component-specifications)
10. [Content Data Model](#10-content-data-model)
11. [Responsive & Accessibility](#11-responsive--accessibility)
12. [SEO Requirements](#12-seo-requirements)
13. [Phase 2 — Deployment Spec](#13-phase-2--deployment-spec)
14. [Phase 3 — Integration Spec](#14-phase-3--integration-spec)
15. [Environment Variables](#15-environment-variables)
16. [Performance Requirements](#16-performance-requirements)
17. [Client Assets Required](#17-client-assets-required)
18. [Acceptance Criteria](#18-acceptance-criteria)
19. [Out of Scope](#19-out-of-scope)
20. [Open Questions](#20-open-questions)

---

## 1. Project Overview

### 1.1 Client

| Field | Value |
|-------|-------|
| Brand Name | Krishna Techroot Logistics |
| Legal Name | KRISHNA TECH ROUTE LOGISTICS PRIVATE LIMITED |
| CIN | `U60210RJ2022PTC083532` |
| Incorporated | 1 September 2022 |
| RoC | Jaipur, Rajasthan |
| Industry | Surface transport / logistics (road freight) |

### 1.2 Project Summary

Build a **new, modern, professional corporate website** for a pan-India logistics company. The client does **not** currently have a production-ready website built for them. Public data on the internet (MCA filings, third-party listings, `techroute.co.in`) is **reference only** — not to be copied verbatim.

### 1.3 Primary Business Context

- **Model:** B2B + B2C surface transport
- **Core cargo:** Textile / fabric (grey cloth from Tamil Nadu → Rajasthan), machinery, general cargo
- **Services:** FTL, Part Truck Load (PTL/Parcel), ODC (100–150 tonne), door-to-door
- **Min shipment:** 50 kg
- **Team:** ~25 staff
- **Customers:** 600–700
- **Priority geography:** Rajasthan, Maharashtra, Tamil Nadu, Gujarat (pan-India positioning)

### 1.4 Delivery Model

Three independent phases. Each phase has a clear deliverable and can be accepted separately.

| Phase | Focus | Deliverable |
|-------|-------|-------------|
| Phase 1 | Design + static site | HTML/CSS/JS files, 5 pages, responsive |
| Phase 2 | Hosting + deploy | Live site on client domain with HTTPS |
| Phase 3 | Integrations | Forms, WhatsApp, analytics, branch locator |

---

## 2. Goals & Constraints

### 2.1 Goals

- Premium logistics-industry visual quality (trust, scale, professionalism)
- Clear communication of **services**, **coverage**, and **office locations**
- Mobile-first responsive experience
- Fast load times on 4G mobile networks in India
- Clean codebase easy to hand off to client's software engineer

### 2.2 Hard Constraints

| Constraint | Detail |
|------------|--------|
| **No revenue data** | Do NOT display turnover, monthly revenue, profit, or MCA financial figures anywhere |
| **No fake content** | No Lorem ipsum, no placeholder "0+" counters, no fake testimonials |
| **No Phase 3 in Phase 1** | Forms, WhatsApp widgets, backend email — Phase 3 only |
| **No CMS in Phase 1** | Static site; content hardcoded or in JSON/JS config |
| **Verified data only** | Use gathered client data; mark TBD fields clearly |

### 2.3 Brand Naming

Display name and legal name may differ. Use both correctly:

```
Header / branding:  Krishna Techroot Logistics
Footer / legal:     KRISHNA TECH ROUTE LOGISTICS PRIVATE LIMITED
                    CIN: U60210RJ2022PTC083532
```

> **Open:** Confirm final display brand name with client (Techroot vs Tech Route).

---

## 3. Phase Scope

### 3.1 Phase 1 — Design & Development

**In scope:**
- UI/UX design (5 pages)
- Responsive HTML/CSS/JS implementation
- Scroll animations, stat counters (with real numbers only)
- Google Maps embed on Contact page (static iframe)
- Basic SEO meta tags
- 1 revision round

**Out of scope:**
- Server deployment
- Form backends
- WhatsApp integration
- CMS
- Shipment tracking
- User authentication

### 3.2 Phase 2 — Hosting & Deployment

**In scope:**
- Coordinate with client's software engineer
- Deploy static files to agreed hosting
- Domain DNS configuration
- SSL/HTTPS setup
- Post-deploy smoke testing
- Handover documentation

**Out of scope:**
- Hosting subscription cost (client pays)
- Domain registration cost (client pays)
- Ongoing server administration

### 3.3 Phase 3 — Integrations

**In scope:**
- WhatsApp click-to-chat (floating + inline CTAs)
- Contact form → email delivery
- Get a Quote form → email delivery
- Click-to-call on mobile
- Google Analytics 4
- Branch locator (state → city filter, if data provided)

**Optional (quote separately):**
- Shipment tracking API integration
- Customer login portal
- CMS
- Hindi/English i18n

---

## 4. Information Architecture

### 4.1 Sitemap

```
/
├── index.html              (Home)
├── services.html           (Services)
├── network.html            (Network / Coverage)
├── about.html              (About Us)
└── contact.html            (Contact Us)
```

### 4.2 Navigation (Global Header)

```
Logo | Home | Services | Network | About | Contact | [Get a Quote]
```

- `Get a Quote` CTA button — styled as primary accent button
- Phase 1: links to `#quote` section on Contact page or `contact.html#quote`
- Phase 3: opens quote form modal or scrolls to live form

### 4.3 Footer (Global)

```
Column 1: Logo + short tagline
Column 2: Quick Links (all pages)
Column 3: Services (FTL, PTL, ODC, Door-to-Door)
Column 4: Contact (phone TBD, email TBD, primary address)

Bottom bar:
  © 2026 Krishna Techroot Logistics
  KRISHNA TECH ROUTE LOGISTICS PRIVATE LIMITED
  CIN: U60210RJ2022PTC083532 | Est. 2022 | Jaipur, Rajasthan
```

---

## 5. Page Specifications

### 5.1 Home (`index.html`)

#### Sections (top to bottom)

| # | Section ID | Component | Content |
|---|------------|-----------|---------|
| 1 | `hero` | HeroBanner | Headline, subheadline, 2 CTAs, background image |
| 2 | `stats` | StatsBar | 4 animated counters (real data) |
| 3 | `services` | ServiceCardGrid | 4 service cards with icons |
| 4 | `coverage` | CoverageHighlight | India map visual + 4 state highlights |
| 5 | `why-us` | FeatureGrid | 4–6 trust differentiators |
| 6 | `industries` | IndustryTags | Textile, machinery, general cargo |
| 7 | `cta` | CTABanner | "Ready to ship?" + Get a Quote button |
| 8 | `footer` | Footer | Global footer |

#### Hero Copy (default)

```
Headline:    Pan India Surface Transport
Subheadline: FTL · Part Load · ODC Heavy Cargo · Door-to-Door Delivery
             Specialists in textile logistics — Tamil Nadu to Rajasthan
CTA Primary: Get a Quote → contact.html#quote
CTA Secondary: Our Services → services.html
```

#### Stats Bar (verified numbers only)

| Stat | Value | Label |
|------|-------|-------|
| 1 | 700+ | Happy Customers |
| 2 | 25+ | Team Members |
| 3 | 50 kg | Minimum Shipment |
| 4 | 150T | ODC Capacity |

> Animation: count-up on scroll into viewport (Intersection Observer). Final values as above — not animated from 0 if reduced-motion preferred; use `prefers-reduced-motion` fallback.

---

### 5.2 Services (`services.html`)

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | "Our Services" + breadcrumb |
| 2 | Service Detail Cards | FTL, PTL, ODC, Door-to-Door — each expandable/full card |
| 3 | Textile Specialist | Highlight TN → RJ grey cloth corridor |
| 4 | Value-Added Services | Grid of 12–18 items (see 5.2.1) |
| 5 | CTA | Get a Quote |

#### 5.2.1 Service Definitions

**FTL (Full Truck Load)**
- Full truck capacity for large freight volumes
- Any truck size, any destination in India
- Positioned near raw material sources, plants, customers

**PTL / Part Truck Load (Sundry / Parcel)**
- Shipments as small as 50 kg minimum
- Pan-India network, hub consolidation
- Cost-effective for smaller loads

**ODC (Over Dimensional Cargo)**
- Heavy/oversized consignments
- Capacity: 100–150 tonne
- Challenging terrain, long distances

**Door-to-Door**
- Pickup to final delivery
- B2B and B2C

**Textile / Fabric (Industry Focus)**
- Grey cloth from Tamil Nadu to Rajasthan
- Fabric, textile, garment industry supply chain

#### 5.2.2 Value-Added Services List

Implement as icon + label grid (no backend):

- Extensive Fleet Network
- Multiple Deliveries from Single Location
- Standardised Billing
- Warehousing & Storage
- Multi-Location Pickup & Delivery
- Single Point Billing
- Key Account Management
- POD / e-POD
- Sunday / Holiday Service on Demand
- Door-to-Door Services
- Time-Bound Deliveries
- Round-the-Clock Services (Major Locations)
- Time-Sensitive Delivery
- Early Morning Deliveries
- Retail Store Distribution
- Return Management
- Hub and Spoke System
- Track and Trace *(Phase 3: link to tracking if available)*
- Specialized Material Handling

---

### 5.3 Network / Coverage (`network.html`)

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | "Our Network" |
| 2 | India Map | Visual map with highlighted states |
| 3 | Priority Corridors | TN → RJ textile route featured |
| 4 | State Cards | RJ, MH, TN, GJ — role + description |
| 5 | Pan-India Statement | Nationwide surface transport capability |

#### State Card Data

```json
{
  "states": [
    {
      "code": "RJ",
      "name": "Rajasthan",
      "role": "Primary Hub",
      "description": "Operations center at Sanganer. Diggi Road factory. Registered office at Omega Muhana, Jaipur.",
      "cities": ["Jaipur", "Sanganer"]
    },
    {
      "code": "TN",
      "name": "Tamil Nadu",
      "role": "Origin Market",
      "description": "Major source of grey cloth and textile cargo. Key import corridor for fabric logistics.",
      "cities": ["Chennai", "Coimbatore"]
    },
    {
      "code": "GJ",
      "name": "Gujarat",
      "role": "Corporate Office",
      "description": "Corporate office at SG Highway, Ahmedabad. Western India network coverage.",
      "cities": ["Ahmedabad"],
      "status": "TBD — confirm with client"
    },
    {
      "code": "MH",
      "name": "Maharashtra",
      "role": "Network Coverage",
      "description": "Pan-India route coverage including western and central corridors.",
      "cities": ["Mumbai", "Pune"]
    }
  ]
}
```

#### Map Implementation (Phase 1)

- **Option A (recommended):** Static SVG map of India with CSS-highlighted state paths for RJ, MH, TN, GJ
- **Option B:** Illustrated map image with overlay hotspots
- **Not required Phase 1:** Interactive GIS / Google Maps API for full network

---

### 5.4 About Us (`about.html`)

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | "About Us" |
| 2 | Company Story | Founded Sept 2022, Jaipur. Growth to 600–700 customers. |
| 3 | Mission | Surface transport value across India (from gathered copy, polished) |
| 4 | Vision | Most preferred surface transport company |
| 5 | Values | Transparency, commitment, integrity |
| 6 | Culture | Society + customer commitment |
| 7 | By the Numbers | Customers, team, min load, ODC — no revenue |
| 8 | Leadership | Director names (MCA verified) — optional photos TBD |

#### Leadership Data (MCA — Tofler)

| Name | Role |
|------|------|
| Amar Singh | Director |
| Chanderpal | Director |
| Mange Ram Sharma | Director |
| Mankesh | Director |

> Display as name + role only unless client provides photos/bios.

#### Mission Copy (polished from reference)

> At the core of our mission is creating tremendous value for our stakeholders. We strive to surpass customer expectations by offering exceptional surface transportation services across India — through advanced technology, an expansive service network, a skilled team, transparent culture, and robust infrastructure.

---

### 5.5 Contact Us (`contact.html`)

#### Sections

| # | Section | Content |
|---|---------|---------|
| 1 | Page Hero | "Contact Us" |
| 2 | Office Cards | One card per confirmed office |
| 3 | Map Embeds | Google Maps iframe per office |
| 4 | Contact Details | Phone, email — TBD from client |
| 5 | Quote Section | `#quote` — Phase 1: static CTA; Phase 3: live form |

#### Office Data (pending client confirmation)

```json
{
  "offices": [
    {
      "id": "ops-sanganer",
      "label": "Operations Hub",
      "name": "Sanganer Office",
      "address": "Diggi Road, Sanganer, Jaipur, Rajasthan",
      "pincode": "TBD",
      "phone": "TBD",
      "email": "TBD",
      "mapQuery": "Diggi Road, Sanganer, Jaipur, Rajasthan",
      "status": "confirmed — client notes"
    },
    {
      "id": "registered",
      "label": "Registered Office",
      "name": "Jaipur Registered Office",
      "address": "A-523, 5th Floor, Block-A, Omega Muhana Sanganer, Jaipur, Rajasthan",
      "pincode": "302029",
      "phone": "TBD",
      "email": "TBD",
      "mapQuery": "Omega Muhana Sanganer Jaipur",
      "status": "MCA verified"
    },
    {
      "id": "corporate-ahmedabad",
      "label": "Corporate Office",
      "name": "Ahmedabad Office",
      "address": "1005-1006, 10th Floor, D Wing, Westgate, SG Highway, Ahmedabad, Gujarat",
      "pincode": "380054",
      "phone": "079 4911 3211",
      "email": "info@techroute.co.in",
      "mapQuery": "Westgate SG Highway Ahmedabad",
      "status": "TBD — confirm with client (from reference site)"
    }
  ]
}
```

#### Google Maps Embed (Phase 1)

```html
<iframe
  src="https://maps.google.com/maps?q={encoded_address}&output=embed"
  width="100%"
  height="300"
  style="border:0;"
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade"
  title="Office location map">
</iframe>
```

---

## 6. Design System

### 6.1 Color Palette

```css
:root {
  /* Primary */
  --color-navy-900: #0f172a;   /* Hero backgrounds, headings */
  --color-navy-800: #1e293b;   /* Cards, footer */
  --color-navy-700: #334155;   /* Body text dark */

  /* Accent */
  --color-accent-500: #f97316; /* Primary CTA, highlights */
  --color-accent-600: #ea580c; /* CTA hover */
  --color-accent-400: #fb923c; /* Secondary accent */

  /* Gold (optional highlights) */
  --color-gold-400: #fbbf24;

  /* Neutrals */
  --color-slate-50:  #f8fafc;  /* Section backgrounds */
  --color-slate-100: #f1f5f9;
  --color-slate-200: #e2e8f0;  /* Borders */
  --color-slate-500: #64748b;  /* Muted text */
  --color-slate-700: #334155;  /* Body text */
  --color-white:     #ffffff;

  /* Semantic */
  --color-success: #059669;
  --color-error:   #dc2626;
}
```

### 6.2 Typography

```css
/* Primary font */
--font-sans: 'Inter', system-ui, -apple-system, sans-serif;

/* Scale */
--text-xs:   0.75rem;   /* 12px — labels */
--text-sm:   0.875rem;  /* 14px — captions */
--text-base: 1rem;      /* 16px — body */
--text-lg:   1.125rem;  /* 18px — lead */
--text-xl:   1.25rem;   /* 20px — card titles */
--text-2xl:  1.5rem;    /* 24px — section titles */
--text-3xl:  1.875rem;  /* 30px — page heroes */
--text-4xl:  2.25rem;   /* 36px — home hero */
--text-5xl:  3rem;      /* 48px — home hero desktop */

/* Weights */
--font-normal:   400;
--font-medium:   500;
--font-semibold: 600;
--font-bold:     700;
--font-extrabold:800;
```

**Google Fonts import:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
```

### 6.3 Spacing Scale

```
4px · 8px · 12px · 16px · 24px · 32px · 48px · 64px · 96px
```

### 6.4 Border Radius

```css
--radius-sm:  6px;   /* buttons, inputs */
--radius-md:  8px;   /* cards */
--radius-lg:  12px;  /* large cards */
--radius-xl:  16px;  /* hero inner elements */
--radius-full:9999px; /* pills, tags */
```

### 6.5 Shadows

```css
--shadow-sm:  0 1px 3px rgba(0,0,0,.08);
--shadow-md:  0 4px 16px rgba(0,0,0,.10);
--shadow-lg:  0 8px 32px rgba(0,0,0,.12);
--shadow-hero:0 20px 60px rgba(15,23,42,.3);
```

### 6.6 Button Styles

**Primary CTA**
```css
.btn-primary {
  background: var(--color-accent-500);
  color: white;
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-weight: 700;
  font-size: var(--text-sm);
  transition: background .2s, transform .15s;
}
.btn-primary:hover {
  background: var(--color-accent-600);
  transform: translateY(-1px);
}
```

**Secondary CTA**
```css
.btn-secondary {
  background: transparent;
  color: white;
  border: 1px solid rgba(255,255,255,.4);
  padding: 12px 28px;
  border-radius: var(--radius-sm);
  font-weight: 600;
}
```

### 6.7 Section Patterns

Alternate section backgrounds for visual rhythm:

```
Hero          → navy-900 background
Stats         → white
Services      → slate-50
Coverage      → navy-800 (dark section)
Why Us        → white
CTA Banner    → accent gradient
Footer        → navy-900
```

---

## 7. Technology Stack

### 7.1 Phase 1 (Required)

| Layer | Technology | Version | Notes |
|-------|------------|---------|-------|
| Markup | HTML5 | — | Semantic elements, accessible |
| Styling | CSS3 | — | Custom properties; Tailwind optional |
| Script | Vanilla JavaScript | ES6+ | No framework required Phase 1 |
| Icons | Lucide Icons or inline SVG | latest | CDN or local |
| Fonts | Google Fonts (Inter) | — | `display=swap` |
| Build | None required | — | Plain files acceptable; Vite optional |

### 7.2 Optional Build Tooling

If using a build step (recommended for maintainability):

```
Vite 5.x + vanilla HTML/CSS/JS
```

```bash
npm create vite@latest krishna-techroot-logistics -- --template vanilla
```

### 7.3 Phase 3 Integrations

| Feature | Recommended Service | Alternative |
|---------|--------------------|-|
| Contact form email | Formspree | EmailJS, Web3Forms |
| Quote form email | Formspree (separate form ID) | Custom Node endpoint |
| WhatsApp | Direct `wa.me` links | No API needed |
| Analytics | Google Analytics 4 | Plausible (if client prefers) |
| Maps | Google Maps embed iframe | OpenStreetMap embed |

### 7.4 Phase 2 Hosting Options

Engineer to confirm. Site is static — compatible with:

- Netlify
- Vercel
- Cloudflare Pages
- AWS S3 + CloudFront
- Shared hosting (cPanel — upload files to `public_html`)
- Client VPS (Nginx static file serving)

---

## 8. Project Structure

### 8.1 Recommended File Tree

```
krishna-techroot-logistics/
├── index.html
├── services.html
├── network.html
├── about.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── main.css           # Entry — imports all partials
│   │   ├── variables.css      # Design tokens
│   │   ├── base.css           # Reset, typography
│   │   ├── components.css     # Buttons, cards, nav, footer
│   │   ├── sections.css       # Hero, stats, etc.
│   │   └── utilities.css      # Helpers
│   │
│   ├── js/
│   │   ├── main.js            # Entry point
│   │   ├── nav.js             # Mobile menu, sticky header
│   │   ├── animations.js      # Scroll animations, counters
│   │   └── config.js          # Site-wide content config (JSON-like)
│   │
│   ├── images/
│   │   ├── logo/              # Client logo (TBD)
│   │   ├── hero/              # Hero backgrounds
│   │   ├── services/          # Service illustrations
│   │   ├── map/               # India map SVG/PNG
│   │   └── icons/             # Custom icons if needed
│   │
│   └── fonts/                 # Self-hosted Inter (optional)
│
├── data/
│   └── site-content.json      # All copy, offices, services — single source of truth
│
├── docs/
│   ├── DEPLOYMENT.md          # Phase 2 handover guide
│   └── CONTENT-UPDATE.md      # How to update content in config
│
├── .env.example               # Phase 3 env vars (not committed)
├── robots.txt
├── sitemap.xml
└── README.md
```

### 8.2 Content Config Pattern

Centralize all copy in `data/site-content.json` or `assets/js/config.js` so content updates don't require hunting through HTML files.

```javascript
// assets/js/config.js
export const SITE = {
  brand: {
    displayName: 'Krishna Techroot Logistics',
    legalName: 'KRISHNA TECH ROUTE LOGISTICS PRIVATE LIMITED',
    cin: 'U60210RJ2022PTC083532',
    founded: 2022,
    tagline: 'Pan India Surface Transport Company',
  },
  contact: {
    phone: 'TBD',          // e.g. '+91XXXXXXXXXX'
    whatsapp: 'TBD',       // Phase 3
    email: 'TBD',          // e.g. 'info@krishnatechroot.com'
  },
  stats: [
    { value: 700, suffix: '+', label: 'Happy Customers' },
    { value: 25,  suffix: '+', label: 'Team Members' },
    { value: 50,  suffix: ' kg', label: 'Minimum Shipment' },
    { value: 150, suffix: 'T', label: 'ODC Capacity' },
  ],
  // ... offices, services, states
};
```

---

## 9. Component Specifications

### 9.1 GlobalHeader

```
Behavior:
  - Sticky on scroll (add background + shadow after 60px scroll)
  - Mobile: hamburger menu → slide-in drawer
  - Active page link highlighted
  - "Get a Quote" always visible as accent button

Props / data:
  - logoSrc, navLinks[], ctaLabel, ctaHref

Accessibility:
  - nav aria-label="Main navigation"
  - mobile menu button aria-expanded, aria-controls
  - focus trap in mobile drawer
```

### 9.2 HeroBanner

```
Variants: home (full-screen), inner-page (shorter, ~40vh)

Home hero:
  - Background: dark overlay on logistics image (60% opacity navy)
  - H1: white, extrabold
  - Subheadline: slate-300
  - 2 CTA buttons

Inner hero:
  - H1 + breadcrumb (Home > Services)
  - No background image required — gradient acceptable
```

### 9.3 StatsBar

```
Layout: 4 columns desktop, 2x2 tablet, 2x2 mobile
Animation: Intersection Observer → count up over 1.5s (ease-out)
Reduced motion: show final value immediately
```

### 9.4 ServiceCard

```
Structure:
  - Icon (64x64 SVG)
  - Title (h3)
  - Description (2–3 lines)
  - Optional "Learn more" link

Hover: lift (translateY -4px) + shadow-md
```

### 9.5 OfficeCard

```
Structure:
  - Label badge (Operations / Registered / Corporate)
  - Office name
  - Full address
  - Phone (tel: link)
  - Email (mailto: link)
  - Map embed below card
```

### 9.6 IndiaMap (Network page)

```
Phase 1: SVG with 4 highlighted states
  - RJ, TN, GJ, MH filled with accent color
  - Other states: slate-200
  - Optional: tooltip on hover with state name

Phase 3 upgrade: click state → scroll to state card
```

### 9.7 CTABanner

```
Full-width accent gradient section
Headline + subtext + single primary button
Used at bottom of Home, Services, About
```

### 9.8 Footer

```
4-column desktop → stacked mobile
Bottom legal bar always visible
All footer links must be valid (no # placeholders in production)
```

### 9.9 QuoteForm (Phase 3 only)

```
Fields:
  - firstName* (text)
  - lastName (text)
  - company (text)
  - email* (email)
  - phone* (tel, pattern: Indian 10-digit)
  - fromCity* (text)
  - toCity* (text)
  - weight (text, placeholder: "e.g. 500 kg")
  - cargoType (select: Textile | Machinery | General | ODC/Heavy | Other)
  - message (textarea)

Validation: HTML5 + JS before submit
Submit: POST to Formspree endpoint
Success: inline thank-you message, hide form
Error: inline error message, retain form data
```

### 9.10 WhatsAppButton (Phase 3 only)

```
Floating button: bottom-right, fixed, z-index 999
Icon: WhatsApp green circle
Link: https://wa.me/{phone}?text={encoded_message}

Default message:
  "Hi, I would like to enquire about logistics services with Krishna Techroot Logistics."

Mobile: 56x56px button
Desktop: 56x56px + tooltip on hover
```

---

## 10. Content Data Model

### 10.1 Full `site-content.json` Schema

```json
{
  "$schema": "site-content-v1",
  "brand": {
    "displayName": "string",
    "legalName": "string",
    "cin": "string",
    "founded": "number",
    "tagline": "string"
  },
  "contact": {
    "phone": "string | null",
    "whatsapp": "string | null",
    "email": "string | null"
  },
  "stats": [
    { "value": "number", "suffix": "string", "label": "string" }
  ],
  "services": [
    {
      "id": "string",
      "title": "string",
      "shortDescription": "string",
      "fullDescription": "string",
      "icon": "string"
    }
  ],
  "states": [ "..." ],
  "offices": [ "..." ],
  "directors": [
    { "name": "string", "role": "string" }
  ],
  "valueAddedServices": ["string"],
  "whyUs": [
    { "title": "string", "description": "string", "icon": "string" }
  ]
}
```

### 10.2 Prohibited Content Fields

Do **not** add these fields to any data model or template:

```json
{
  "revenue": "NEVER",
  "turnover": "NEVER",
  "monthlyIncome": "NEVER",
  "profit": "NEVER",
  "ebitda": "NEVER",
  "netWorth": "NEVER"
}
```

---

## 11. Responsive & Accessibility

### 11.1 Breakpoints

```css
/* Mobile first */
--bp-sm:  640px;   /* Large phones */
--bp-md:  768px;   /* Tablets */
--bp-lg:  1024px;  /* Small laptops */
--bp-xl:  1280px;  /* Desktops */
--bp-2xl: 1536px;  /* Large screens */
```

### 11.2 Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;   /* mobile */
}
@media (min-width: 768px) {
  .container { padding: 0 32px; }
}
```

### 11.3 Accessibility Requirements (WCAG 2.1 AA target)

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | Min 4.5:1 body text, 3:1 large text |
| Focus states | Visible focus ring on all interactive elements |
| Alt text | All images — descriptive alt; decorative → `alt=""` |
| Heading hierarchy | One H1 per page, no skipped levels |
| Form labels | All inputs have associated `<label>` |
| Skip link | "Skip to main content" as first focusable element |
| Reduced motion | Respect `prefers-reduced-motion` |
| Language | `<html lang="en">` |

---

## 12. SEO Requirements

### 12.1 Per-Page Meta

| Page | Title | Description |
|------|-------|-------------|
| Home | Krishna Techroot Logistics \| Pan India Surface Transport | Leading logistics company offering FTL, part load, ODC and door-to-door delivery across India. Textile specialists — Tamil Nadu to Rajasthan. |
| Services | Services \| Krishna Techroot Logistics | Full truck load, part truck load, ODC heavy cargo up to 150 tonnes, and door-to-door delivery services across India. |
| Network | Network & Coverage \| Krishna Techroot Logistics | Pan-India surface transport network with operations across Rajasthan, Maharashtra, Tamil Nadu and Gujarat. |
| About | About Us \| Krishna Techroot Logistics | Krishna Techroot Logistics — established 2022 in Jaipur, Rajasthan. 25+ team members serving 700+ customers across India. |
| Contact | Contact Us \| Krishna Techroot Logistics | Get in touch with Krishna Techroot Logistics. Offices in Sanganer, Jaipur and Ahmedabad. Enquire about FTL, part load and ODC services. |

### 12.2 Open Graph Tags (all pages)

```html
<meta property="og:type" content="website">
<meta property="og:site_name" content="Krishna Techroot Logistics">
<meta property="og:title" content="{page title}">
<meta property="og:description" content="{page description}">
<meta property="og:image" content="/assets/images/og-image.jpg">
<meta property="og:url" content="https://{domain}/{page}">
```

### 12.3 Structured Data (Home page)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Krishna Techroot Logistics",
  "legalName": "KRISHNA TECH ROUTE LOGISTICS PRIVATE LIMITED",
  "url": "https://{domain}",
  "logo": "https://{domain}/assets/images/logo/logo.png",
  "foundingDate": "2022-09-01",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "A-523, 5th Floor, Block-A, Omega Muhana Sanganer",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "302029",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "{phone}",
    "contactType": "customer service"
  },
  "sameAs": []
}
```

### 12.4 `robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://{domain}/sitemap.xml
```

### 12.5 `sitemap.xml`

List all 5 HTML pages with `<lastmod>` set to deployment date.

---

## 13. Phase 2 — Deployment Spec

### 13.1 Pre-Deployment Checklist

- [ ] All `TBD` placeholders replaced with real client data
- [ ] All internal links tested (no 404s)
- [ ] All images optimized (WebP preferred, max 200KB hero)
- [ ] `robots.txt` and `sitemap.xml` present
- [ ] Favicon set (16, 32, 180, 512px)
- [ ] OG image created (1200×630px)
- [ ] No console errors
- [ ] Lighthouse Performance ≥ 85 mobile

### 13.2 Deployment Handoff Doc (`docs/DEPLOYMENT.md`)

Must include:
1. File upload instructions for client's hosting type
2. DNS record changes required (A record / CNAME)
3. SSL setup steps
4. How to verify deployment (checklist)
5. Contact for developer support

### 13.3 Domain

- Preferred: confirm with client (`techroute.co.in` exists — may replace or use new domain)
- DNS propagation: allow 24–48 hours

### 13.4 HTTPS

- Force HTTPS redirect at server/CDN level
- Update all internal asset paths to relative (not hardcoded `http://`)

---

## 14. Phase 3 — Integration Spec

### 14.1 Contact Form

**Endpoint:** Formspree `https://formspree.io/f/{FORM_ID}`

```html
<form action="https://formspree.io/f/{CONTACT_FORM_ID}" method="POST">
  <input type="hidden" name="_subject" value="New Contact — Krishna Techroot Logistics">
  <input type="text" name="_gotcha" style="display:none"> <!-- honeypot -->
  <!-- fields -->
</form>
```

**Fields:** name*, email*, phone, message*

### 14.2 Quote Form

**Endpoint:** Separate Formspree form ID

**Fields:** See Section 9.9

**Post-submit:**
- Show success message: *"Thank you! Our team will contact you within 24 hours."*
- Optional: redirect to `contact.html?submitted=true`

### 14.3 WhatsApp Integration

```javascript
// config.js
whatsapp: {
  number: '91XXXXXXXXXX',  // no + or spaces
  defaultMessage: 'Hi, I would like to enquire about logistics services.'
}

// Link builder
const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
```

**Placement:**
1. Floating button — all pages
2. Contact page — inline button
3. CTA sections — "Chat on WhatsApp" secondary button
4. Mobile header — optional icon

### 14.4 Click-to-Call

```html
<a href="tel:+91XXXXXXXXXX">+91 XXXXX XXXXX</a>
```

Apply to all phone number displays. Test on iOS Safari and Android Chrome.

### 14.5 Google Analytics 4

```html
<!-- In <head> of all pages -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

Store measurement ID in `.env` / `config.js` — not hardcoded in repo if open source.

### 14.6 Branch Locator

**Data required from client:**

```json
{
  "branches": [
    {
      "state": "Rajasthan",
      "city": "Jaipur",
      "branchName": "Sanganer Hub",
      "address": "Diggi Road, Sanganer",
      "phone": "TBD"
    }
  ]
}
```

**UI:**
- State dropdown → filters city dropdown → shows branch card(s)
- Pure frontend filter — no API call
- Empty state: "No branches listed for this city. Contact us."

---

## 15. Environment Variables

Phase 3 only. Store in `.env` (never commit):

```bash
# .env.example
CONTACT_FORM_ID=your_formspree_contact_id
QUOTE_FORM_ID=your_formspree_quote_id
GA_MEASUREMENT_ID=G-XXXXXXXXXX
WHATSAPP_NUMBER=91XXXXXXXXXX
CONTACT_EMAIL=info@example.com
SITE_URL=https://yourdomain.com
```

If using vanilla HTML without build step, inject via `config.js` at deploy time (replace placeholders).

---

## 16. Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance (mobile) | ≥ 85 |
| Lighthouse Accessibility | ≥ 90 |
| Lighthouse SEO | ≥ 90 |
| First Contentful Paint | < 2.0s on 4G |
| Total page weight (per page) | < 1.5 MB |
| Hero image | WebP, ≤ 200 KB |
| JS bundle (Phase 1) | < 50 KB minified |
| CSS | < 30 KB minified |

### Optimization Checklist

- [ ] Lazy load below-fold images (`loading="lazy"`)
- [ ] Preload hero image and Inter font
- [ ] Minify CSS/JS for production
- [ ] Use WebP with JPEG fallback
- [ ] No unnecessary third-party scripts in Phase 1
- [ ] Defer non-critical JS

---

## 17. Client Assets Required

| Asset | Format | Size | Phase | Status |
|-------|--------|------|-------|--------|
| Logo (color) | SVG or PNG | — | 1 | TBD |
| Logo (white, for dark bg) | SVG or PNG | — | 1 | TBD |
| Favicon | ICO/PNG | 32×32 | 1 | TBD |
| Hero background | JPG/WebP | 1920×1080 | 1 | Stock OK |
| Truck/warehouse photos | JPG/WebP | — | 1 | Stock OK |
| OG image | JPG | 1200×630 | 2 | Generate from design |
| Branch list | JSON/Excel | — | 3 | TBD |
| Phone number | — | — | 1 | TBD |
| Email address | — | — | 1 | TBD |
| WhatsApp number | — | — | 3 | TBD |
| Domain name decision | — | — | 2 | TBD |
| Hosting credentials | — | — | 2 | TBD |

---

## 18. Acceptance Criteria

### 18.1 Phase 1 Done When:

- [ ] All 5 pages render correctly on Chrome, Firefox, Safari, Edge
- [ ] Mobile responsive at 375px, 768px, 1280px
- [ ] No `TBD` in user-visible content (or clearly marked "Contact us" where data missing)
- [ ] No revenue/financial data anywhere
- [ ] No Lorem ipsum or placeholder testimonials
- [ ] Stats show real numbers with animation
- [ ] Navigation works across all pages
- [ ] Meta tags present on all pages
- [ ] `robots.txt` and `sitemap.xml` included
- [ ] Client sign-off after 1 revision round

### 18.2 Phase 2 Done When:

- [ ] Site accessible at agreed domain over HTTPS
- [ ] All pages load without mixed-content warnings
- [ ] SSL certificate valid
- [ ] DNS correctly configured
- [ ] `DEPLOYMENT.md` handed to client's engineer
- [ ] Smoke test passed on mobile and desktop

### 18.3 Phase 3 Done When:

- [ ] Contact form submits and email received
- [ ] Quote form submits and email received
- [ ] WhatsApp button opens correct chat with pre-filled message
- [ ] Click-to-call works on mobile
- [ ] GA4 recording page views (verify in Real-Time report)
- [ ] Branch locator filters correctly (if data provided)
- [ ] No JS console errors on any page

---

## 19. Out of Scope

The following are explicitly **not part of this project** unless separately quoted:

- Revenue / financial dashboard or display
- Shipment tracking backend
- Customer login / portal
- Payment gateway
- CMS (WordPress, Strapi, etc.) — Phase 1
- Native mobile app
- ERP / TMS integration
- Multi-language (Hindi) — optional add-on
- Blog / news section
- Careers / job listings page
- Admin panel
- Email hosting setup
- Logo design (unless add-on purchased)

---

## 20. Open Questions

Resolve with client before marking Phase 1 complete:

| # | Question | Impact |
|---|----------|--------|
| 1 | Final brand name: Techroot or Tech Route? | Header, logo, meta titles |
| 2 | Which offices to show? All 3 or only Sanganer? | Contact page |
| 3 | Primary phone number and email? | Contact, footer, tel: links |
| 4 | Is Ahmedabad office official? | Contact page |
| 5 | Logo assets available? | Header, favicon, OG |
| 6 | Real photos or stock images? | Visual authenticity |
| 7 | Domain: new or replace techroute.co.in? | Phase 2 |
| 8 | Related company Krishna Carrying Corporation — mention on site? | About page |
| 9 | Director names/photos — show on About? | About page |
| 10 | Branch list for locator — available? | Phase 3 |

---

## Appendix A — Related Entities (Reference Only)

**Do not auto-publish without client approval.**

| Entity | CIN | Relation |
|--------|-----|----------|
| KRISHNA CARRYING CORPORATION PRIVATE LIMITED | U52290RJ2025PTC107470 | Same directors (Chanderpal, Mankesh, Amar Singh) — incorporated Oct 2025 |

---

## Appendix B — Reference Links (Not for Production Copy)

| Resource | URL | Use |
|----------|-----|-----|
| MCA / Tofler | tofler.in company page | Company verification |
| Existing reference site | techroute.co.in | Design/services reference only |
| Tracxn | tracxn.com legal entity | Financial context — do NOT display |

---

## Appendix C — Revision History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | July 2026 | — | Initial technical spec |

---

*End of Technical Specification Document*