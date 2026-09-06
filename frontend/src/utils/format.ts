export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IE', { year: 'numeric', month: 'long', day: 'numeric' })
}

export function formatDateRange(start: string, end: string | null): string {
  const startLabel = new Date(start).getFullYear()
  const endLabel = end ? new Date(end).getFullYear() : 'Present'
  return `${startLabel} – ${endLabel}`
}

export function countWords(text: string): number {
  const matches = text.trim().match(/\S+/g)
  return matches ? matches.length : 0
}

export function readingTime(text: string, wordsPerMinute = 200): string {
  const minutes = Math.max(1, Math.round(countWords(text) / wordsPerMinute))
  return `${minutes} min read`
}
