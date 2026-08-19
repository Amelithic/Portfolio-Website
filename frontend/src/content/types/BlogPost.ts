export interface BlogFrontmatter {
  title: string
  description: string
  category: string
  tags: string[]
  datePublished: string
  dateEdited?: string
  pinned?: boolean
  banner?: string
}

export interface BlogPost extends BlogFrontmatter {
  slug: string
  contentFile: string
  wordCount: number
  readingTime: string
}
