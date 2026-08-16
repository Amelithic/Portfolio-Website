export interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  category: string
  tags: string[]
  datePublished: string
  dateEdited?: string
  pinned?: boolean
  banner?: string
}
