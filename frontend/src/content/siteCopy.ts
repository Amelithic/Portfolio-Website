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
    { label: 'GitHub', to: 'https://github.com/Amelithic', icon: 'ph-github-logo' },
    { label: 'LinkedIn', to: 'https://www.linkedin.com/in/amelie-mccarthy/', icon: 'ph-linkedin-logo' },
    { label: 'Email', to: 'mailto:amelie@amelithic.com', icon: 'ph-envelope-simple' },
  ],
  ui: {
    seeMore: 'See more',
    seeLess: 'See less',
    pinned: 'Pinned',
    filteringBy: 'Filtering by',
    all: 'All',
    empty: 'Nothing here yet.',
    illustration: 'Illustration',
  },
  home: {
    hero: {
      eyebrow: 'Welcome to my portfolio website',
      greeting: "Hello, I'm",
      name: "Amélie",
      tagline: 'I love creating and learning.',
      sub: 'I design and build projects across all areas of STEAM - from small experiments to larger projects, and I write about the process along the way.',
      viewProjects: 'View Projects',
      aboutMe: 'About Me',
    },
    intro: {
      heading: 'A little about me',
      subheading: 'Code, design, art, and everything between.',
      paragraphs: [
        "I'm an Immersive Software Engineering (ISE) student who enjoys turning ideas into real-life creations :)",
        "With a love for both the technical and the artistic, my work lives where creativity meets technology.",
        'This site is my corner of the internet: a portfolio of projects, a blog of learnings, and a place to reach me.',
      ],
      goToAbout: 'Go to About Me',
    },
    timelineSection: {
      heading: 'Timeline',
      subheading: 'Work, study, every step to get here.',
    },
    projectsSection: {
      heading: 'Projects',
      subheading: "A few things I've built.",
    },
    blogSection: {
      heading: 'Recent Blog Posts',
      subheading: "Things I've learned and want to document.",
      carouselLabel: 'Recent blog posts',
    },
    contactSection: {
      heading: 'Get in Touch',
      body: "Whether it's a project, a question, or just to say hi - feel free to reach out!",
      action: 'Contact Me',
    },
  },
  about: {
    title: 'About Me',
    lede: 'A short story of how I got here, told in a few paragraphs and a lot of curiosity.',
    blocks: [
      {
        icon: 'ph-sparkle',
        heading: 'The beginning of my tech journey',
        image: '/images/page/about/tech_journey.webp',
        paragraphs: [
          "My tech journey started with a Tech Kids summer camp when I was 13. We were introduced to the Raspberry Pi, basic Python scripting for Minecraft Education edition, and creating basic HTML pages, and I got hooked - I spent the time asking more and more questions to find the limit to what I could make with these tools, even beyond what the camp tutors could help me with!",
          "This led to me continuing to build up my knowledge of coding in HTML and Python, then CSS and JS, and many other technologies through self-teaching - all with the goal of someday learning how to make a full website end-to-end.",
          'Over time I learned more about web and software development, and have become deeply fascinated about pushing the limits of what I can make using these tools!',
        ],
      },
      {
        icon: 'ph-palette',
        heading: 'Art, and other things',
        image: '/images/page/about/art.webp',
        paragraphs: [
          "Even before I discovered coding, I had a creative streak, with a focus in art. In primary school, I discovered my talent for art, winning 1st place in a local art competition by the age of 12.",
          "From that point onwards, my art journey was deeply encouraged and I built up my design skills, being asked to create paintings, graphic designs for music albums, and posters for events during my time at primary and secondary school. Notably, I was chosen in my last year of secondary school to assist in creating some street art for my town's skatepark benches, as part of the Waterford Walls project, with two professional street artists. This solidified in my mind the lasting impact I could make with my skills on my community, and the people and places around me.",
          "Aside from my academic ability, my artwork became the thing I was known best for. However, when the time came to choose my career direction, I was still torn between going towards my artistic side or towards my technical side - which I still continued to build up on the side by exploring computer repair and furthering my web development journey with Python Discord bots and Flask web servers, MySQL databases and basic CRUD web apps!",
          "And so, I took a year for myself to explore the artistic side - I completed a 1-year post-Leaving Cert course in Art and Graphic Design, having so much fun and passing with full distinctions.",
        ],
      },
      {
        icon: 'ph-subtract-square',
        heading: 'Combining design and code',
        image: '/images/page/about/clarity.webp',
        paragraphs: [
          "Art and design have always been part of my life, but over time I found myself pulled toward the technical side of things.",
          "This is where I seeked out a space where creativity and computing overlapped, which led me to study Creative Computing at SETU Waterford for a year. That course blended fundamentals of computing with digital media - UI/UX, graphic design, P5.js, 3D modelling, animation - and it gave me a clearer sense of direction.",
          "That year taught me a lot. I realised that while I enjoyed design, what really excited me was the challenge and depth of software. I found that my design background gave me a rare and unique perspective in the tech world, where these two aspects often feel separate. And of course, it gave me some fun miscellaneous skills and experiences to aid me in future projects!",
          "Until this point, I did not realise I could just fully pursue coding - I had just seen it as something I did on the side. Software felt like something I chose for myself, rather than something I happened to be good at. Which is why, during that year, I worked extremely hard to build up a portfolio and put my all into applying for the course I held back on - Immersive Software Engineering (also known as ISE) at the University of Limerick.",
          "I started ISE in September 2025, and that's what I've been doing ever since!"
        ],
      },
      {
        icon: 'ph-planet',
        heading: 'Beyond the screen',
        image: '/images/page/about/beyond.webp',
        paragraphs: [
          "As well as software engineering, technology and design, I also enjoy to explore countless other interests.",
          "I enjoy travelling, photography, collecting semi-precious gemstones, learning about all things space and science, and trying not to kill my houseplants!",
        ],
      },
    ],
  },
  contacts: {
    title: 'Contacts',
    lede: "The best way to reach me is through LinkedIn or email. For everything else, here's where you can find me around the internet.",
    socialsHeading: 'Socials',
    platformsHeading: 'Where I post',
    socials: [
      { label: 'GitHub', to: 'https://github.com/Amelithic', icon: 'ph-github-logo', note: 'Code and repositories' },
      { label: 'LinkedIn', to: 'https://www.linkedin.com/in/amelie-mccarthy/', icon: 'ph-linkedin-logo', note: 'Professional profile' },
      { label: 'Email', to: 'mailto:amelie@amelithic.com', icon: 'ph-envelope-simple', note: 'Direct contact' },
    ],
    platforms: [
      { label: 'Behance', to: 'https://www.behance.net/amelithic', icon: 'ph-behance-logo', note: 'Graphic design' },
      { label: 'Dribbble', to: '#', icon: 'ph-dribbble-logo', note: 'Design shots' },
      { label: 'Pinterest', to: '#', icon: 'ph-pinterest-logo', note: 'Art and inspiration' },
      { label: 'GitHub', to: 'https://github.com/Amelithic', icon: 'ph-github-logo', note: 'Programming' },
      { label: 'Devpost', to: 'https://devpost.com/amelithic', icon: 'ph-code', note: 'Hackathon projects' },
      { label: 'Medium', to: '#', icon: 'ph-medium-logo', note: 'Long-form writing' },
      { label: 'Substack', to: '#', icon: 'ph-pen-nib', note: 'Newsletter' },
    ],
  },
  projects: {
    hero: {
      eyebrow: 'Projects',
      title: "Things I've",
      highlight: 'made',
      sub: 'A selection of projects - from small experiments to full builds.',
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
    missingText: "That post doesn't exist or has moved :/",
    back: 'Back to Blog',
  },
  projectPost: {
    published: 'Published',
    missingTitle: 'Project not found',
    missingText: "That project doesn't exist or has moved :/",
    back: 'Back to Projects',
  },
  notFound: {
    title: 'This page is lost in space',
    text: "The page you're looking for doesn't exist or has moved :/",
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
