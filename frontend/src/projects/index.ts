import type { Project } from '@/content/types/Project'
import { projects } from '@/content/projects'

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getPinnedProjects(): Project[] {
  return projects.filter((project) => project.pinned)
}

export function getLatestProjects(count = 10): Project[] {
  return [...projects]
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished))
    .slice(0, count)
}

export function getProjectTags(limit = 10): string[] {
  const counts = new Map<string, number>()
  for (const project of projects) {
    for (const tag of project.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, limit)
    .map(([tag]) => tag)
}

export function filterProjects(options: { search?: string; category?: string } = {}): Project[] {
  const { search, category } = options
  const query = search?.trim().toLowerCase() ?? ''
  return projects.filter((project) => {
    const matchesCategory = category ? project.tags.includes(category) : true
    const matchesSearch = query
      ? `${project.title} ${project.description} ${project.content} ${project.tags.join(' ')}`
          .toLowerCase()
          .includes(query)
      : true
    return matchesCategory && matchesSearch
  })
}
