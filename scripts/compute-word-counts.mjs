import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, basename } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const blogDir = join(__dirname, '..', 'frontend', 'src', 'content', 'blog')
const outputFile = join(blogDir, 'word-counts.json')

function stripFrontmatter(mdx) {
  return mdx.replace(/^---[\s\S]*?---\s*/, '')
}

function stripImports(mdx) {
  return mdx.replace(/^import\s+.*$/gm, '')
}

function stripCodeFences(mdx) {
  return mdx.replace(/^```[\s\S]*?^```/gm, '')
}

function stripMdxComponents(mdx) {
  return mdx
    .replace(/<[A-Z][\s\S]*?\/>/g, '')
    .replace(/<[A-Z][\s\S]*?>[\s\S]*?<\/[A-Z][\s\S]*?>/g, '')
}

function stripHtmlTags(mdx) {
  return mdx.replace(/<[^>]+>/g, '')
}

function stripMarkdownSyntax(mdx) {
  return mdx
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/`{1,3}[^`]*`{1,3}/g, '')
    .replace(/^[*\-_]{3,}\s*$/gm, '')
    .replace(/^>\s+/gm, '')
    .replace(/^[*\-+]\s+/gm, '')
    .replace(/^\d+\.\s+/gm, '')
    .replace(/\|/g, ' ')
}

function countWords(text) {
  const matches = text.trim().match(/\S+/g)
  return matches ? matches.length : 0
}

function readingTime(wordCount, wordsPerMinute = 200) {
  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute))
  return `${minutes} min read`
}

const files = readdirSync(blogDir).filter((f) => f.endsWith('.mdx'))
const result = {}

for (const file of files) {
  const slug = basename(file, '.mdx')
  const raw = readFileSync(join(blogDir, file), 'utf-8')

  let text = stripFrontmatter(raw)
  text = stripImports(text)
  text = stripCodeFences(text)
  text = stripMdxComponents(text)
  text = stripHtmlTags(text)
  text = stripMarkdownSyntax(text)

  const words = countWords(text)
  result[slug] = {
    wordCount: words,
    readingTime: readingTime(words),
  }
}

writeFileSync(outputFile, JSON.stringify(result, null, 2) + '\n')
console.log(`Word counts written for ${files.length} posts -> ${outputFile}`)
