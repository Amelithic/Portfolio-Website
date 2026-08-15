import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const FRONTEND_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const SRC_ASSETS_DIR = path.join(FRONTEND_ROOT, 'src', 'assets', 'images')
const PUBLIC_IMAGES_DIR = path.join(FRONTEND_ROOT, 'public', 'images')
const PAGE_OUTPUT_DIR = path.join(PUBLIC_IMAGES_DIR, 'page')

const RAW_EXT = /\.(jpe?g|png|avif)$/i
const MAX_WIDTH = 1920
const QUALITY = 80

async function walk(dir) {
  let entries
  try {
    entries = await fs.readdir(dir, { withFileTypes: true })
  } catch {
    return []
  }
  const results = []
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...(await walk(full)))
    } else if (RAW_EXT.test(entry.name)) {
      results.push(full)
    }
  }
  return results
}

async function exists(file) {
  try {
    await fs.access(file)
    return true
  } catch {
    return false
  }
}

async function isNewerThan(file, than) {
  try {
    const [a, b] = await Promise.all([fs.stat(file), fs.stat(than)])
    return a.mtimeMs > b.mtimeMs
  } catch {
    return false
  }
}

async function optimize(raw, output) {
  await fs.mkdir(path.dirname(output), { recursive: true })
  await sharp(raw)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true, fit: 'inside' })
    .webp({ quality: QUALITY })
    .toFile(output)
}

async function main() {
  const jobs = []
  let created = 0
  let skipped = 0

  for (const raw of await walk(SRC_ASSETS_DIR)) {
    const relative = path.relative(SRC_ASSETS_DIR, raw).replace(RAW_EXT, '')
    jobs.push({ raw, output: path.join(PAGE_OUTPUT_DIR, `${relative}.webp`) })
  }

  for (const raw of await walk(PUBLIC_IMAGES_DIR)) {
    if (path.dirname(raw) === PAGE_OUTPUT_DIR) continue
    jobs.push({ raw, output: raw.replace(RAW_EXT, '.webp') })
  }

  for (const { raw, output } of jobs) {
    if ((await exists(output)) && (await isNewerThan(output, raw))) {
      skipped += 1
      continue
    }
    await optimize(raw, output)
    created += 1
    console.log(`webp  ${path.relative(PUBLIC_IMAGES_DIR, output)}  <-  ${path.basename(raw)}`)
  }

  console.log(`Done. Optimised ${created} image(s), skipped ${skipped} up-to-date.`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
