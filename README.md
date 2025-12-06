# Joshua Goldberg — Portfolio

A sleek, minimalistic, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed with a strong Apple/iOS-inspired aesthetic featuring smooth animations, glassmorphism effects, and a calm, neutral color palette.

## Tech Stack

- **Next.js 14** (App Router) — React framework with server-side rendering
- **TypeScript** — Type-safe JavaScript
- **Tailwind CSS** — Utility-first CSS framework
- **Framer Motion** — Smooth animations and transitions
- **React 18** — UI library

## Features

- 🎨 **Apple/iOS-inspired design** — Minimal, clean aesthetic with lots of negative space
- ✨ **Smooth animations** — Framer Motion powered transitions and scroll reveals
- 💎 **Glassmorphism effects** — Blurred, translucent card surfaces
- 📱 **Fully responsive** — Mobile, tablet, and desktop optimized
- 🌙 **Dark theme** — Calm, neutral color palette with subtle gradients
- ♿ **Accessible** — Semantic HTML and proper contrast ratios

## Getting Started

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shukigold/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page composing all sections
├── components/
│   ├── Header.tsx        # Fixed navigation header
│   ├── HeroSection.tsx   # Hero section with CTAs
│   ├── WorkSection.tsx   # Selected work showcase
│   ├── AboutSection.tsx  # About and skills section
│   ├── ContactSection.tsx # Contact information and links
│   └── Footer.tsx        # Footer with Spotify playlist link
├── public/               # Static assets
└── ...config files
```

## Customization

### Update Case Study Links

Edit the `projects` array in `components/WorkSection.tsx` with your actual Notion case study URLs:
- Fiverr
- Just Eat Takeaway
- SundaySky
- Elision
- Strength Athletics
- Melio

### Update Contact Information

Edit `components/ContactSection.tsx` to update:
- Email address
- Phone number
- LinkedIn profile URL (update with actual link from your Bento profile)
- Instagram profile URL (update with actual link from your Bento profile)

Edit `components/Footer.tsx` to update:
- Spotify playlist link for "Mellow Moods"

### Update Resume Link

Edit the resume download link in `components/HeroSection.tsx` (currently pointing to a Google Drive placeholder).

## Design Principles

- **Negative space** — Generous whitespace for clarity
- **Soft gradients** — Subtle radial gradients in corners
- **Rounded corners** — Large border radius (rounded-2xl, rounded-3xl)
- **Gentle shadows** — Soft, not harsh shadows
- **Glassmorphism** — Backdrop blur effects on cards
- **Smooth motion** — Natural, premium-feeling animations

## License

Private project — All rights reserved.

## Contact

Joshua Goldberg — Product Designer
- Email: mail@joshgold.design
- Phone: 054-717-4791

