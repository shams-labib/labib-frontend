# 🌊 The Deep Work Blueprint

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-Animation-green?style=for-the-badge)](https://greensock.com/gsap/)

A premium, high-converting landing page for **The Deep Work Blueprint** course. Designed with a "Premium Dark" aesthetic, featuring glassmorphism, smooth GSAP animations, and a focus on user experience to master focus and productivity.

---

## ✨ Key Features

- **🎯 Premium Dark UI**: Expertly crafted dark-themed interface with neon accents and glowing visual effects.
- **🚀 Smooth Animations**: Integrated **GSAP** and **Framer Motion** for a butter-smooth reveal and scroll experience.
- **📱 Fully Responsive**: Optimized for all devices, ensuring the "Pricing Card" and "Footer" look perfect on mobile.
- **🌓 Dark/Light Mode**: Seamless theme switching using `next-themes` and Lucide icons.
- **⏳ Dynamic Countdown**: Real-time sales timer to create urgency for the 30% discount.
- **📜 Smooth Scrolling**: Powered by **Lenis Scroll** for a high-end feel.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) & [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theming**: [Next Themes](https://github.com/pacocoursey/next-themes)
- **Typography**: SF Pro Display (Premium Apple Font)

---

## 📂 Project Structure

```text
labib-frontend/
├── app/
│   ├── layout.js       # Global layout with Lenis & ThemeProvider
│   └── page.js         # Main entry point combining all sections
├── components/
│   ├── shared/
│   │   └── Animation.jsx # Reusable GSAP scroll trigger component
│   ├── Navbar.jsx
│   ├── Footer.jsx      # Premium footer with CTA card
│   └── ThemeToggle.jsx # Custom theme switcher logic
├── pages/              # Section-wise components
│   ├── Hero.jsx
│   ├── StruggleSection.jsx
│   ├── FeatureIntro.jsx
│   ├── CourseCurriculum.jsx
│   ├── Testimonials.jsx
│   └── PricingCard.jsx # Dynamic pricing with countdown timer
└── public/
    └── fonts/          # SF Pro local font files

🚀 Getting Started
Prerequisites
Make sure you have Node.js and npm/yarn installed.

Installation
1.Clone the repository:

Bash
git clone [https://github.com/your-username/deep-work-blueprint.git](https://github.com/your-username/deep-work-blueprint.git)
2.Install dependencies:

Bash
npm install
3.Run the development server:

Bash
npm run dev
4.Open http://localhost:3000 in your browser.

🎨 Design Highlights
Glassmorphism: Used in the Testimonials and Pricing cards for a modern look.

Blue Glowing Accents: Brand color #3b82f6 used for primary buttons and shadows.

Custom Hook: Specialized timer logic for the course enrollment deadline.

🤝 Contact
Shams All Labib Frontend & Full-Stack Web Developer

LinkedIn | Portfolio | Email

Created with ❤️ for high-performance learning.