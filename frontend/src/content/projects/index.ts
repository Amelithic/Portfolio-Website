import type { Project } from '../types/Project'

export const projects: Project[] = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'The site you are looking at right now. A Vue 3, TypeScript, and Vite playground with a blog and project gallery.',
    content:
      "This portfolio began as a way to show my work, and quickly became a project in its own right.\n\nIt is built with Vue 3 and TypeScript on Vite, organised into domain folders so the blog and projects sections can grow independently. Styling runs on a token-based system that supports both a dark space theme and a light theme with one toggle.\n\nThe content layer is typed and ready for a markdown pipeline or a future backend, so the components I am building today will survive the upgrade.",
    category: 'Web Development',
    tags: ['vue', 'typescript', 'vite', 'frontend'],
    datePublished: '2026-04-20',
    pinned: true,
    image: '/images/projects/portfolio-website.webp',
  },
  {
    slug: 'weather-app',
    title: 'Weather App',
    description:
      'A clean single-page weather dashboard with search, geolocation, and a seven-day forecast.',
    content:
      "A small but complete weather dashboard that pulls live data from a public API.\n\nIt supports searching for any city, falling back to your current location when you allow it. The forecast is presented as a horizontal strip of cards, each showing the high, low, and weather condition for a day.\n\nThe interface follows the same design language as this site: thin borders, soft gradients, and a theme that adapts to your preference.",
    category: 'Web Development',
    tags: ['vue', 'api', 'javascript'],
    datePublished: '2026-02-10',
    image: '/images/projects/weather-app.webp',
  },
  {
    slug: 'game-jam-2025',
    title: 'Game Jam 2025 Entry',
    description:
      'A 48-hour game built around a single mechanic. Rough, scrappy, and surprisingly fun.',
    content:
      "Game jams are the best way to remember why you love making things: tight deadlines, wild ideas, and no time to second-guess.\n\nFor this entry I built a compact puzzle game around a single mechanic, keeping the scope small enough to finish in a weekend. The whole thing was playable from the first hour and polished from there.\n\nIt won no awards, but shipping it taught me more about scoping than any tutorial ever has.",
    category: 'Game Development',
    tags: ['game', 'jam', 'godot'],
    datePublished: '2025-11-08',
    image: '/images/projects/game-jam-2025.webp',
  },
  {
    slug: 'studio-branding',
    title: 'Branding for a Small Studio',
    description:
      'A full identity package: logo, colour system, typography, and a short brand guide.',
    content:
      "A local studio asked for an identity that felt modern without chasing trends.\n\nI designed a geometric logo that scales from favicon to sign, paired with a restrained colour system and a flexible typographic scale. The brand guide documents how the elements combine, so the studio can apply the identity consistently across print and screen.\n\nThe process reinforced how much of design is listening: the strongest direction came from a single phrase in our first conversation.",
    category: 'Design',
    tags: ['branding', 'design', 'identity'],
    datePublished: '2025-09-15',
    image: '/images/projects/studio-branding.webp',
  },
]
