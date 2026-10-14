# 🏛️ Local Business Web Platforms — High-Conversion Portfolio Suite

[![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![i18n](https://img.shields.io/badge/i18n-PT--PT%20%7C%20EN-orange?style=for-the-badge)](https://github.com/imperador1k/sites-freelancing)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **A curated showcase of modern, high-performance digital platforms engineered for local businesses, construction firms, and specialized contractors.** Designed with a multi-tenant branch architecture for zero-friction client onboarding, high-conversion UX, and native bilingual support.

---

## 🎯 Repository Overview & Purpose

This repository houses a **modular web application ecosystem** built for small-to-medium businesses (SMBs) and contractors in Portugal and across Europe. 

Rather than deploying boilerplate template code, every client instance in this suite is treated as a dedicated digital flagship:
* **Strict Visual Hierarchy:** Tailored color palettes, curated Google Fonts, and custom branding designed to convey trust, solidity, and craftsmanship.
* **Instant Conversion Pathways:** Strategic WhatsApp click-to-chat triggers, direct phone links, and frictionless quote request flows.
* **Turnkey Client Delivery:** A centralized single-file configuration (`clientData.js`) allows new client deployments in under 30 minutes without touching core UI logic.

---

## 🌟 Client Directory & Branch Architecture

This repository utilizes an **isolated branch multi-tenant architecture**. The `main` branch acts as the agnostic, unopinionated core engine. Specific client projects live on dedicated branches:

| Branch | Client / Brand | Industry / Niche | Market & Scope | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`main`** | **Core Master Blueprint** | Architecture & Contractor Base | Global / Template | 🟢 **Stable v2.0** |
| [`King-Construções-Lda`](https://github.com/imperador1k/sites-freelancing/tree/King-Constru%C3%A7%C3%B5es-Lda) | **King Construções Lda.** | Civil Construction & Turnkey Renovations | Lisbon, Algarve & Portugal | 🚀 **Live Production** |

---

## ⚡ Core Engineering Highlights

### 1. 🌐 Zero-Dependency Bilingual Engine (i18n)
* Built directly on React's `Context API` with persistent `localStorage` synchronization.
* Instant client-side switching between **Português (PT-PT)** and **English (EN)** with zero external bundle bloat (`react-i18next` not needed).
* Real-time DOM attribute binding (`<html lang="...">`) ensuring search engines properly index localized metadata.

### 2. 📱 Micro-Interactions & Mobile-First Excellence
* **Reactive Glassmorphism Navigation:** Automatically shifts from floating translucent backdrop to frosted blur on scroll (`scrollY > 30`).
* **Jitter-Free Mobile Drawer:** Full-screen responsive drawer (`100dvh`) featuring complete scroll-locking on `document.documentElement` and `body` to eliminate bounce and background scrolling bugs.
* **Viewport-Triggered Dynamic Counters:** Smooth interpolation that ticks from `0` to target statistics (e.g., `+800 Projects`, `15+ Years`) only when scrolled into view.
* **Architectural Scroll Beam:** Bespoke vertical animated SVG line guiding user eyes through the conversion funnel.

### 3. 🎨 Single Source of Truth (`src/config/clientData.js`)
All presentation copy, imagery URLs, business coordinates, and brand tokens are decoupled from the component tree:
```javascript
export const clientData = {
  colors: { primary: '#F58220', dark: '#14181F', ... },
  contact: { phone: '+351 913...', whatsappNumber: '351913450515', ... },
  pt: { company, navLinks, hero, about, services, gallery, process, footer },
  en: { company, navLinks, hero, about, services, gallery, process, footer },
};
```

---

## 📂 Project Architecture

```text
sites-freelancing/
├── .agents/                    # Autonomous AI agent skills & customization rules
│   └── skills/adaptador-cliente-pt/  # Specialized client adaptation workflow
├── public/                     # Brand logos, catalog PDFs, and background textures
├── src/
│   ├── components/             # Atomic, decoupled React UI components
│   │   ├── ui/                 # Micro-components (LanguageSwitcher, Counters, WhatsApp)
│   │   ├── Navbar.jsx          # Adaptive glass header + mobile full-screen drawer
│   │   ├── Hero.jsx            # Dynamic headline, badge, and dual conversion CTAs
│   │   ├── About.jsx           # Value proposition, trust badges, and highlights
│   │   ├── Stats.jsx           # Animated numeric KPIs with viewport observer
│   │   ├── Services.jsx        # Grid showcase of client specialties
│   │   ├── Gallery.jsx         # Project showcase cards with hover magnification
│   │   ├── Process.jsx         # 4-step structured delivery timeline
│   │   ├── Contact.jsx         # Direct click-to-WhatsApp and schedule cards
│   │   └── Footer.jsx          # Pre-footer banner, sitemap, and back-to-top button
│   ├── config/
│   │   └── clientData.js       # Centralized business data schema (PT/EN)
│   ├── context/
│   │   └── LanguageContext.jsx # React context provider for global locale state
│   ├── App.jsx                 # Top-level composition and layout orchestration
│   ├── index.css               # Design system tokens, custom utilities, and scrollbar rules
│   └── main.jsx                # Application root mounting with LanguageProvider
├── index.html                  # Semantic HTML5 entry point with responsive meta tags
├── tailwind.config.js          # Dynamic HSL/HEX color mapping and custom typography
└── vite.config.js              # High-speed bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0 or higher)
* **npm** or **pnpm**

### Installation & Development
```bash
# 1. Clone the repository
git clone https://github.com/imperador1k/sites-freelancing.git
cd sites-freelancing

# 2. Install dependencies
npm install

# 3. Launch local development server
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🛠️ Rapid Client Onboarding Workflow

To launch a brand new client platform from this foundation:

```bash
# 1. Ensure you are on the updated main template
git checkout main
git pull origin main

# 2. Spawn a dedicated branch for the client
git checkout -b Client-Brand-Name

# 3. Customize clientData.js
# Open src/config/clientData.js and populate:
# - Brand colors & typography accent
# - Phone, email, WhatsApp numbers
# - Localized PT and EN copy blocks
# - High-definition project photos (Google Photos =w1200-h800-no supported)

# 4. Replace the logo asset in public/image.png

# 5. Commit & Push to GitHub
git add .
git commit -m "feat(client): launch customized platform for Client Brand Name"
git push -u origin Client-Brand-Name
```

---

## 📈 Performance & Quality Standards

* **100% Mobile Responsive:** Tested on narrow 360px Android devices up to 4K ultrawide monitors.
* **Core Web Vitals Optimized:** Zero Cumulative Layout Shift (CLS), sub-second First Contentful Paint (FCP).
* **SEO Best Practices:** Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`), structured OpenGraph meta tags, and descriptive ARIA labels.

---

## 👨‍💻 Author & Inquiries

Built by a Full-Stack Engineer and Digital Product Architect specializing in high-converting web solutions for enterprises and local market leaders.

* **GitHub:** [@imperador1k](https://github.com/imperador1k)
* **Repository:** [sites-freelancing](https://github.com/imperador1k/sites-freelancing)
* **Open to Collaborations:** Freelance projects, contracting, and full-time technical leadership roles.

---

<p align="center">
  <sub>Crafted with engineering precision, clean code principles, and passion in Portugal 🇵🇹</sub>
</p>
