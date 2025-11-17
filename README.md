# Antiquebooks — Starter Website

This repository is a starter Next.js + TypeScript site built to match the provided sitemap and page requirements for Antiquebooks.

Features implemented:
- Next.js (App Router) + TypeScript
- Tailwind CSS for styling
- Client-side Cart context with localStorage persistence (cart icon with count)
- Header/navigation with Collection dropdown, language switcher (EN | SK | DE), search icon, Account & Cart links
- Static pages: Homepage, About, Contact (with contact form), Gallery, Shop
- Collection listing and dynamic routes:
  - /collection
  - /collection/[category-name]
  - /collection/[category-name]/[item-name]
- Basic Account pages (login/register/orders) as placeholders
- Cart and Checkout pages (client-side, mock checkout)
- Example data in /data/collections.ts

This is a static/demo implementation. Replace or hook up to a backend as needed.

Getting started

1. Install dependencies
   npm install

2. Run development server
   npm run dev

3. Build & run production
   npm run build
   npm run start

Notes
- Contact form is client-side only (shows success message). Hook up an API route or third-party service to receive messages.
- Language switcher is a UI stub that toggles language state — no translations included. Integrate i18n as desired.
- Replace sample data in /data/collections.ts with real data.
