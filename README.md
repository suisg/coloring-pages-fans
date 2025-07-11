# Coloring Pages Fans

**Live Site**: [Coloring Pages Fans](https://www.coloringpages.fans)
**Repository**: <https://github.com/suisg/coloring-pages-fans.git>

A modern, high-performance web application offering a vast collection of free printable coloring pages for kids and adults. Built with Next.js 15, React 19, Tailwind CSS, and TypeScript, the platform delivers an engaging, mobile-first experience optimized for both users and search engines.

## ✨ Key Features

- **Extensive Library** – Thousands of hand-curated coloring pages across popular categories such as animals, cartoons, holidays, and mandalas.
- **Instant Download & Print** – One-click download of high-resolution PDFs for hassle-free printing.
- **Mobile-First UI** – Fully responsive design powered by Tailwind CSS, Radix UI, and Shadcn UI components.
- **Lightning-Fast Performance** – Leveraging Next.js App Router, server components, and edge caching for SEO-friendly, near-instant page loads.
- **Dynamic SEO** – Automatic generation of meta titles, descriptions, and Open Graph tags ensuring every coloring page ranks well.
- **Accessible & Inclusive** – WCAG-compliant color palette, keyboard navigation, and screen-reader support.


The project is engineered from the ground up to dominate "coloring pages" search results:

1. **Semantic URLs** – Category-based routing (e.g. `/animals/lion-coloring-pages`) packed with relevant keywords.
2. **Meta Data Automation** – Dynamic `<title>`, `<meta name="description">`, canonical links, and JSON-LD structured data.
3. **Optimized Images** – Lazy-loaded, properly sized thumbnails with descriptive `alt` text containing "coloring pages" variations.
4. **Performance Scores** – 90+ Lighthouse scores for Performance, Accessibility, Best Practices, and SEO.
5. **Robots & Sitemaps** – `robots.txt` and automated XML sitemaps keep search engines updated on new coloring pages.

> *Tip for contributors:* Maintain natural keyword density (0.8–1.2 %) and avoid keyword stuffing. Aim for user value first.

## 🏗️ Tech Stack

| Layer            | Technology |
| ---------------- | ---------- |
| Framework        | [Next.js 15](https://nextjs.org/) |
| UI Library       | [React 19](https://react.dev/) |
| Styling          | [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/) |
| Language         | TypeScript (strict mode) |
| Deployment       | Vercel / Any Node.js-compatible platform |
| Linting & Format | ESLint, Prettier |

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/suisg/coloring-pages-fans.git
cd coloring-pages-fans

# 2. Install dependencies
npm install  # or pnpm install / yarn

# 3. Start the development server
npm run dev  # http://localhost:3000
```

Open <http://localhost:3000> in your browser. Changes are hot-reloaded.

## 📜 Scripts

| Command            | Description |
| ------------------ | ----------- |
| `npm run dev`      | Start local dev server |
| `npm run build`    | Create an optimized production build |
| `npm run start`    | Start Next.js in production mode |
| `npm run lint`     | Run ESLint in strict mode |
| `npm run format`   | Auto-format with Prettier |
| `npm run export`   | Optional static export |

## 🌐 Deployment

The app is **production-ready** and can be deployed with one click on Vercel:

1. Fork this repo and push your changes.
2. Import the repo in your Vercel dashboard.
3. Set the build command to `npm run build` and output directory to `.next` (default).
4. Enable automatic deployments on push.

Alternatively, deploy to Netlify, AWS Amplify, or any Docker-compatible host.
        # Images, favicon, robots.txt, etc.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Create a new branch: `git checkout -b feature/amazing-feature`.
2. Commit your changes with clear messages.
3. Ensure `npm run lint` passes and add unit tests if applicable.
4. Open a pull request targeting `main` and describe your changes.

## 🛡️ License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

Made with ❤️ for everyone who loves **coloring pages**. Let your creativity flow! 