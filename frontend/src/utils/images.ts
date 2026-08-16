export const pageImages = {
  homeHero: '/images/page/home/home-hero.webp',
  homeIntro: '/images/page/home/home-intro.webp',
  homeBackground: '/images/page/home/home-hero.webp',
  blogHero: '/images/page/blog-hero.webp',
  projectsHero: '/images/page/projects-hero.webp',
} as const

export type PageImageName = keyof typeof pageImages

export function getImageUrl(name: PageImageName): string {
  return pageImages[name]
}
