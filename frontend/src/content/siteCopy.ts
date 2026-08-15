import { siteConfig } from '@/config/site'

export const siteCopy = {
  nav: {
    home: 'Home',
    about: 'About Me',
    projects: 'Projects',
    blog: 'Blog',
    contacts: 'Contacts',
    allProjects: 'All Projects',
    allPosts: 'All Posts',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    breadcrumb: 'Breadcrumb',
  },
  footer: {
    sitemap: 'Sitemap',
    contacts: 'Contacts',
    rights: 'All rights reserved, 2026.',
  },
  socials: [
    { label: 'GitHub', to: '/contacts', icon: 'ph-github-logo' },
    { label: 'LinkedIn', to: '/contacts', icon: 'ph-linkedin-logo' },
    { label: 'Email', to: '/contacts', icon: 'ph-envelope-simple' },
  ],
  ui: {
    seeMore: 'See more',
    pinned: 'Pinned',
    filteringBy: 'Filtering by',
    all: 'All',
    empty: 'Nothing here yet.',
    illustration: 'Illustration',
  },
  home: {
    hero: {
      eyebrow: 'Welcome to my corner of the web',
      greeting: "Hello, I'm",
      name: siteConfig.brandName,
      tagline: 'I build for the web.',
      sub: 'I design and build minimal, modern experiences — from clean interfaces to full applications, and I write about the process along the way.',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
    },
    intro: {
      heading: 'A little about me',
      subheading: 'Code, design, and everything between.',
      paragraphs: [
        "I'm a developer and designer who enjoys turning ideas into things people actually use. My work lives where thoughtful design meets clean code.",
        'This site is my home on the internet: a portfolio of projects, a blog of learnings, and a place to reach me.',
      ],
      goToAbout: 'Go to About Me',
    },
    projectsSection: {
      heading: 'Projects',
      subheading: "A few things I've built.",
    },
    blogSection: {
      heading: 'Recent Blog Posts',
      subheading: "Things I've learned and want to remember.",
      carouselLabel: 'Recent blog posts',
    },
    contactSection: {
      heading: 'Get in Touch',
      body: "Whether it's a project, a question, or just to say hi — my inbox is always open.",
      action: 'Contact Me',
    },
  },
  about: {
    title: 'About Me',
    lede: 'A short story of how I got here, told in a few paragraphs and a lot of curiosity.',
    blocks: [
      {
        icon: 'ph-sparkle',
        heading: 'The beginning',
        image: '/images/page/about-beginning.webp',
        paragraphs: [
          "It started with a blank HTML file and a burning question: how do I make this look exactly the way I picture it? That single question pulled me into a world where design and code overlap.",
          'Over time I learned that the best interfaces are invisible — you only notice them when they stop working. My goal is to build things that feel effortless.',
        ],
      },
      {
        icon: 'ph-palette',
        heading: 'Design and code',
        image: '/images/page/about-design-code.webp',
        paragraphs: [
          'I treat every project as a design problem first and a programming problem second. Colour, spacing, and type set the mood; architecture and clean code make it last.',
          'This portfolio is itself an example of that philosophy — a typed Vue app built on a token-based design system that adapts to light and dark.',
        ],
      },
      {
        icon: 'ph-coffee',
        heading: 'Beyond the screen',
        image: '/images/page/about-beyond-screen.webp',
        paragraphs: [
          "When I'm not building, I'm probably sketching, playing games, or reading about whatever rabbit hole caught my attention this week. I like keeping the curiosity close.",
          'Want to work together or just chat? The contacts page is one click away.',
        ],
      },
    ],
  },
  contacts: {
    title: 'Contacts',
    lede: "The best way to reach me is through email. For everything else, here's where you can find me around the internet.",
    socialsHeading: 'Socials',
    platformsHeading: 'Where I post',
    socials: [
      { label: 'GitHub', icon: 'ph-github-logo', note: 'Code and repositories' },
      { label: 'LinkedIn', icon: 'ph-linkedin-logo', note: 'Professional profile' },
      { label: 'Email', icon: 'ph-envelope-simple', note: 'Direct contact' },
    ],
    platforms: [
      { label: 'Behance', icon: 'ph-behance-logo', note: 'Graphic design' },
      { label: 'Dribbble', icon: 'ph-dribbble-logo', note: 'Design shots' },
      { label: 'Pinterest', icon: 'ph-pinterest-logo', note: 'Art and inspiration' },
      { label: 'GitHub', icon: 'ph-github-logo', note: 'Programming' },
      { label: 'Devpost', icon: 'ph-code', note: 'Hackathon projects' },
      { label: 'Medium', icon: 'ph-medium-logo', note: 'Long-form writing' },
      { label: 'Substack', icon: 'ph-pen-nib', note: 'Newsletter' },
    ],
  },
  projects: {
    hero: {
      eyebrow: 'Projects',
      title: "Things I've",
      highlight: 'made',
      sub: 'A selection of projects — from small experiments to full builds.',
    },
    allProjectsSection: {
      heading: 'All Projects',
      subheading: 'The latest work, newest first.',
    },
    categoriesSection: {
      heading: 'Categories',
      subheading: 'Browse projects by topic.',
    },
  },
  projectsAll: {
    title: 'All Projects',
    lede: 'Every project, in one place.',
    searchPlaceholder: 'Filter projects…',
    searchAria: 'Filter projects',
    noResults: 'No projects match your search.',
  },
  blog: {
    hero: {
      eyebrow: 'Blog',
      title: 'Notes on building',
      highlight: 'and making',
      sub: 'Short posts about web development, design, and the process of creating things.',
    },
    pinnedSection: {
      heading: 'Pinned',
      carouselLabel: 'Pinned posts',
    },
    latestSection: {
      heading: 'Latest',
      subheading: 'The most recent posts, newest first.',
      showMore: 'Show more',
    },
    categoriesSection: {
      heading: 'Categories',
      subheading: 'Browse posts by topic.',
    },
  },
  blogAll: {
    title: 'All Blog Posts',
    lede: 'Every post, in one place.',
    searchPlaceholder: 'Filter posts…',
    searchAria: 'Filter posts',
    noResults: 'No posts match your search.',
  },
  post: {
    read: 'Read',
    lastEdited: 'Last edited',
    words: 'words',
    missingTitle: 'Post not found',
    missingText: "That post doesn't exist or has moved.",
    back: 'Back to Blog',
  },
  projectPost: {
    published: 'Published',
    missingTitle: 'Project not found',
    missingText: "That project doesn't exist or has moved.",
    back: 'Back to Projects',
  },
  notFound: {
    title: 'This page is lost in space',
    text: "The page you're looking for doesn't exist or has drifted away.",
    backToHome: 'Back to Home',
  },
  search: {
    blog: 'Search posts…',
    blogAria: 'Search posts',
    projects: 'Search projects…',
    projectsAria: 'Search projects',
  },
  menu: {
    label: 'Menu',
    account: 'Account',
    signOut: 'Sign out',
  },
  theme: {
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
  },
  mediaLabels: {
    blogArtwork: 'Blog artwork',
    projectsArtwork: 'Projects artwork',
    about: 'About me',
  },
} as const
