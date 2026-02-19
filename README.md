# 🚀 My Profile — Space × Travel × Modern

A personal portfolio website built with **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** — featuring a space-inspired dark/light theme, live GitHub repo integration, and smooth scroll-driven animations.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)

---

## ✨ Features

| Feature | Details |
|---------|---------|
| 🌗 Dark / Light theme | Toggle with smooth CSS shader transitions |
| 🎞️ Scroll animations | Fade-in sections powered by Framer Motion |
| 📦 Live GitHub repos | Fetched from GitHub API — always up to date |
| 🧩 Reusable components | `CTAButton`, `ScrollToTop`, theme context |
| 📱 Responsive | Mobile-first layout with Tailwind utilities |
| ⚡ Fast | Vite + SWC for instant HMR and optimized builds |

---

## 🗂️ Project Structure

```
src/
├── components/       # Reusable UI (CTAButton, ScrollToTop)
├── context/          # ThemeContext (dark/light provider)
├── hooks/            # Custom hooks (useTheme, useGitHubRepos, useActiveSection)
├── layouts/          # Navbar
├── sections/         # Page sections (Home, About, Project, Travel, Contact)
├── data/             # Static data
├── assets/           # Images & icons
├── index.css         # Tailwind + space-shader styles
└── App.tsx           # Root component
```

---

## 🛠️ Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7** (SWC plugin)
- **Tailwind CSS 3.4** — utility-first styling + custom `.space-shader`
- **Framer Motion** — scroll & hover animations
- **Lucide React** — icons
- **GitHub REST API** — live project cards

---

## 🚀 Getting Started

```bash
# Clone
git clone https://github.com/Jalukit/my-profile.git
cd my-profile

# Install
npm install

# Dev server (http://localhost:5173)
npm run dev

# Production build
npm run build
npm run preview
```

---

## 🌗 Theme Shader

The site uses a custom CSS `.space-shader` class that adapts between themes:

| Theme | Gradient |
|-------|----------|
| ☀️ Light | Soft sky: `#f8fafc → #eef2ff → #ffffff` |
| 🌙 Dark | Deep space: `#000000 → #0f172a → #111827` |

Toggle via the 🌙 / ☀️ button in the navbar.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Built with ☕ and cosmic curiosity by [Jalukit](https://github.com/Jalukit)
