import type { Component } from 'vue'
import type { BlogPost, BlogFrontmatter } from '@/content/types/BlogPost'
import wordCounts from '@/content/blog/word-counts.json'

interface BlogModule {
  default: Component
  frontmatter: BlogFrontmatter
}

const mdxModules = import.meta.glob<BlogModule>('@/content/blog/*.mdx', { eager: true })

function slugFromPath(path: string): string {
  return path.split('/').pop()?.replace(/\.mdx$/, '') ?? ''
}

const blogPosts: BlogPost[] = Object.entries(mdxModules).map(([path, mod]) => {
  const slug = slugFromPath(path)
  const counts = wordCounts[slug as keyof typeof wordCounts]
  return {
    ...mod.frontmatter,
    slug,
    contentFile: path,
    wordCount: counts?.wordCount ?? 0,
    readingTime: counts?.readingTime ?? '1 min read',
  }
})

export function getAllPosts(): BlogPost[] {
  return blogPosts
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPinnedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.pinned)
}

export function getLatestPosts(count = 3): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished)).slice(0, count)
}

export function getPostTags(limit = 10): string[] {
  const counts = new Map<string, number>()
  for (const post of blogPosts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag]) => tag)
}

export function filterPosts(options: { search?: string; category?: string } = {}): BlogPost[] {
  const { search, category } = options
  const query = search?.trim().toLowerCase() ?? ''
  return blogPosts.filter((post) => {
    const matchesCategory = category ? post.tags.includes(category) : true
    const matchesSearch = query
      ? `${post.title} ${post.description} ${post.tags.join(' ')}`
          .toLowerCase()
          .includes(query)
      : true
    return matchesCategory && matchesSearch
  })
}
