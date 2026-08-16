export interface Project {
  slug: string
  title: string
  description: string
  content: string
  category: string
  tags: string[]
  datePublished: string
  pinned?: boolean
  image?: string
  video?: string
}
