import type { BlogPost } from '../types/BlogPost'

export const blogPosts: BlogPost[] = [
  {
    slug: 'hello-world',
    title: 'Hello, World!',
    description:
      'The first post on this blog. A short introduction to what I do and what I will be writing about.',
    content:
      "Welcome to my blog. This is the very first post, so let me set the scene.\n\nI am a developer and designer who loves building things on the web. This site is a place for me to share what I learn, document my projects, and occasionally ramble about the details that make great software and great interfaces.\n\nExpect posts about web development, design, tooling, and the occasional deep dive into a project I have been working on. If anything here helps you, or sparks a conversation, reach out through the contacts page.",
    category: 'General',
    tags: ['general', 'intro', 'welcome'],
    datePublished: '2026-01-15',
    dateEdited: '2026-01-20',
    pinned: true,
    banner: '/images/blog/hello-world.webp',
  },
  {
    slug: 'setting-up-a-vue3-portfolio',
    title: 'Building a Vue 3 Portfolio from Scratch',
    description:
      'How I structured this very site: domain-based folders, typed content, and a theme system that just works.',
    content:
      "Every portfolio site starts as a blank page, and deciding how to structure the code before writing any of it saves a lot of pain later.\n\nI settled on a domain-based layout: the blog and projects live in their own folders, each with their own router, components, and views. The main router simply imports those sub-routers, so adding a new section later means creating a folder, not rewiring the whole app.\n\nContent is typed with TypeScript interfaces and stored as plain data for now, which keeps things simple while leaving room to swap in a markdown pipeline or a real backend later.",
    category: 'Development',
    tags: ['vue', 'typescript', 'vite', 'architecture'],
    datePublished: '2026-02-03',
    banner: '/images/blog/setting-up-a-vue3-portfolio.webp',
  },
  {
    slug: 'designing-with-space-purple',
    title: 'Designing with a Space Purple Palette',
    description:
      'Why dark purple, blue gradients, and thin borders feel both modern and calm.',
    content:
      "The colour of a site sets its mood before a single word is read. For this portfolio I wanted something that felt like space: deep, quiet, and a little magical.\n\nI anchored the palette around a very dark purple background with violet and blue accents. Gradients run from violet through indigo to blue, echoing the colours of distant nebulae. Borders are thin and slightly translucent, keeping the interface light even in dark mode.\n\nA clean, minimalist layout lets the colour breathe. The whole design relies on a handful of tokens defined once in CSS and reused everywhere, so switching between dark and light themes is a matter of changing variables.",
    category: 'Design',
    tags: ['design', 'ui', 'colour', 'branding'],
    datePublished: '2026-02-18',
    banner: '/images/blog/designing-with-space-purple.webp',
  },
  {
    slug: 'typescript-tips-2026',
    title: 'Five TypeScript Tips I Wish I Knew Earlier',
    description:
      'Small TypeScript habits that have quietly made my codebase safer and my days shorter.',
    content:
      "TypeScript rewards the small decisions you make consistently. Here are five that have stuck with me.\n\nFirst, prefer `interface` for objects and `type` for unions. Second, use `satisfies` to check a value against a type without widening it. Third, keep `strict` on and let the compiler complain early.\n\nFourth, make impossible states impossible: model your data so that invalid combinations cannot be represented. Finally, let the framework infer your types wherever possible instead of annotating everything by hand.",
    category: 'Development',
    tags: ['typescript', 'tips', 'best-practices'],
    datePublished: '2026-03-07',
    banner: '/images/blog/typescript-tips-2026.webp',
  },
  {
    slug: 'from-markdown-to-blog',
    title: 'From Markdown to Blog Post',
    description:
      'The content pipeline behind this site, and the plan to upgrade it from plain text to full markdown.',
    content:
      "Writing in markdown feels natural, so it was only a matter of time before this blog started consuming markdown files directly.\n\nRight now posts are typed objects with plain text content, which is perfect for a foundation. The next step is a parser that converts markdown into styled HTML, plus a schema to validate every post against the same shape.\n\nThat keeps the editorial workflow in plain files while the rendering stays flexible. If a future backend appears, the typed service layer will slot right in without touching the components.",
    category: 'Development',
    tags: ['markdown', 'content', 'writing'],
    datePublished: '2026-03-25',
    banner: '/images/blog/from-markdown-to-blog.webp',
  },
  {
    slug: 'deploying-to-netlify',
    title: 'Deploying a Vue App to Netlify',
    description:
      'From localhost to production in a few clicks, including the redirects your router needs.',
    content:
      "Netlify makes deployment feel almost too easy. Build the project, point it at the repository, and your site is live.\n\nThere is one classic gotcha: a client-side router needs every path to fall back to index.html. Without that rewrite, refreshing /blog/posts/hello-world returns a 404. A single redirect rule fixes it, and with it in place every route works straight from the address bar.",
    category: 'Development',
    tags: ['netlify', 'deploy', 'hosting'],
    datePublished: '2026-04-12',
    banner: '/images/blog/deploying-to-netlify.webp',
  },
]
