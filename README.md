# TERAIT Technologies — Enterprise IT Website

A premium, ultra-modern enterprise website built with React 18 + Vite + TypeScript + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar with mega menu
│   │   └── Footer.tsx          # Enterprise footer
│   └── ui/
│       ├── LoadingScreen.tsx   # Animated loading screen
│       ├── CursorGlow.tsx      # Cursor glow + scroll progress + WhatsApp
│       ├── Section.tsx         # Animated section wrappers
│       └── PageTransition.tsx  # Page transition wrapper
├── pages/
│   ├── Home.tsx                # Landing page with hero, services, testimonials
│   ├── About.tsx               # Company story, timeline, values
│   ├── Services.tsx            # All 12 IT services with details
│   ├── CCTV.tsx                # Dedicated cinematic CCTV page
│   ├── Industries.tsx          # 8 industry verticals
│   ├── Projects.tsx            # Case studies with metrics
│   ├── Careers.tsx             # Job openings + culture
│   ├── Blog.tsx                # Tech blog with categories
│   └── Contact.tsx             # Contact form + office locations
├── data/
│   └── company.ts              # All company data, services, stats
├── styles/
│   └── globals.css             # Tailwind + custom design system
└── App.tsx                     # Router + layout
```

---

## 🎨 Design System

**Colors:**
- Deep Navy: `#020817` (background)
- Cyber Blue: `#0ea5e9` (primary accent)
- Cyber Cyan: `#06b6d4` (secondary)
- Electric Blue: `#3b82f6` (gradient)

**Fonts (Google Fonts - auto-loaded):**
- Display: Syne (headings)
- Body: DM Sans (paragraphs)
- Mono: JetBrains Mono (code/labels)

**Key CSS classes:**
- `.btn-primary` — Primary CTA button
- `.btn-secondary` — Ghost button
- `.glass-dark` — Glassmorphism dark card
- `.cyber-border` — Animated cyber border
- `.gradient-text` — Blue gradient text
- `.grid-bg` — Cyber grid background
- `.section-padding` — Consistent section padding
- `.container-xl` — Max-width container

---

## 📄 Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, industries, testimonials |
| About | `/about` | Story, timeline, values, locations |
| Services | `/services` | All 12 IT services detailed |
| CCTV | `/cctv` | Cinematic CCTV surveillance page |
| Industries | `/industries` | 8 industry verticals |
| Projects | `/projects` | 4 enterprise case studies |
| Careers | `/careers` | 8 open positions + culture |
| Blog | `/blog` | 6 tech blog posts |
| Contact | `/contact` | Form + office locations |

---

## ⚙️ Customization

### Update company info
Edit `src/data/company.ts`:
- Change phone, email, WhatsApp
- Update office addresses
- Edit services list
- Modify stats, testimonials, blog posts

### Change colors
Edit `tailwind.config.js` under `theme.extend.colors`.

### Add a new page
1. Create `src/pages/NewPage.tsx`
2. Add route in `src/App.tsx`
3. Add link in `src/components/layout/Navbar.tsx`

---

## 📦 Tech Stack

- **React 18** — UI framework
- **Vite** — Build tool (lightning fast)
- **TypeScript** — Type safety
- **Tailwind CSS 3** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **React Router DOM v6** — Client-side routing
- **Lucide React** — Icon library
- **React Hook Form** — Form handling
- **GSAP** — Advanced animations (ready to use)
- **Swiper.js** — Touch sliders (ready to use)

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Static hosting
```bash
npm run build
# Serve the dist/ folder
```

---

## 📞 Company: TERAIT Technologies Pvt Ltd
- Website: https://teraittech.com
- LinkedIn: https://www.linkedin.com/company/terait-technologies-pvt-ltd
