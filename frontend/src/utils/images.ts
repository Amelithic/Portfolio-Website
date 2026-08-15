export const pageImages = {
  homeHero: '/images/page/home-hero.webp',
  homeIntro: '/images/page/home-intro.webp',
  aboutBeginning: '/images/page/about-beginning.webp',
  aboutDesignCode: '/images/page/about-design-code.webp',
  aboutBeyondScreen: '/images/page/about-beyond-screen.webp',
  blogHero: '/images/page/blog-hero.webp',
  projectsHero: '/images/page/projects-hero.webp',
} as const

export type PageImageName = keyof typeof pageImages

export function getImageUrl(name: PageImageName): string {
  return pageImages[name]
}
