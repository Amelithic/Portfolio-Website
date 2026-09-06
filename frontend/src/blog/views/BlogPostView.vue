<script setup lang="ts">
import type { Component } from 'vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import Tag from '@/components/Tag.vue'
import BlogDirNavigation from '@/blog/components/BlogDirNavigation.vue'
import { getPostBySlug } from '@/blog'
import { formatDate } from '@/utils/format'
import { siteCopy } from '@/content/siteCopy'

interface BlogMdxModule {
  default: Component
  frontmatter: Record<string, unknown>
}

const mdxModules = import.meta.glob<BlogMdxModule>('@/content/blog/*.mdx', { eager: true })

function getMdxComponent(slug: string): Component | null {
  const entry = Object.entries(mdxModules).find(([path]) =>
    path.includes(`${slug}.mdx`),
  )
  return entry ? entry[1].default : null
}

const route = useRoute()

const post = computed(() => getPostBySlug(String(route.params.slug)))
const PostContent = computed(() => (post.value ? getMdxComponent(post.value.slug) : null))
</script>

<template>
  <div v-if="post" class="post-page">
    <div class="container">
      <BlogDirNavigation :post="post" />

      <article class="post-card">
        <header class="post-header">
          <div class="post-banner">
            <PlaceholderMedia :src="post.banner" icon="ph-article" :label="post.title" />
            <div class="post-banner-overlay"></div>
            <div class="post-title-wrap">
              <h1>{{ post.title }}</h1>
            </div>
          </div>

          <div class="post-details">
            <span>
              <i class="ph ph-calendar-blank" aria-hidden="true"></i>
              {{ siteCopy.post.lastEdited }} {{ formatDate(post.dateEdited ?? post.datePublished) }}
            </span>
            <span>
              <i class="ph ph-text-align-left" aria-hidden="true"></i>
              {{ post.wordCount }} {{ siteCopy.post.words }}
            </span>
            <span>
              <i class="ph ph-clock" aria-hidden="true"></i>
              {{ post.readingTime }}
            </span>
            <span>
              <i class="ph ph-folder-simple" aria-hidden="true"></i>
              {{ post.category }}
            </span>
          </div>
        </header>

        <div class="post-divider" role="separator"></div>

        <div class="post-content rich-text">
          <component :is="PostContent" v-if="PostContent" />
        </div>

        <footer class="post-footer">
          <ul class="post-tags">
            <li v-for="tag in post.tags" :key="tag">
              <Tag :label="tag" :to="`/blog/posts?category=${tag}`" />
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </div>

  <div v-else class="post-missing">
    <div class="container">
      <h1>{{ siteCopy.post.missingTitle }}</h1>
      <p class="post-missing-text">{{ siteCopy.post.missingText }}</p>
      <RouterLink to="/blog" class="btn btn-primary">{{ siteCopy.post.back }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.post-page {
  padding-block: var(--space-2xl);
}

.post-card {
  margin-top: var(--space-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.post-banner {
  position: relative;
}

.post-banner :deep(.placeholder-media) {
  aspect-ratio: 16 / 8;
  min-height: 260px;
}

.post-banner-overlay {
  position: absolute;
  inset: 0;
  background: var(--hero-overlay);
}

.post-title-wrap {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding-inline: var(--space-3xl);
  padding-block: var(--space-xl);
}

.post-title-wrap h1 {
  color: #ffffff;
  max-width: 24ch;
  text-shadow: 0 2px 6px rgba(0,0,0,0.35);
}


.post-details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md) var(--space-lg);
  padding: var(--space-lg) var(--space-xl);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.post-details span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.post-details i {
  color: var(--color-accent);
}

.post-divider {
  height: 1px;
  background: var(--color-border);
}

.post-content {
  padding-block: var(--space-2xl);
  padding-inline: var(--space-3xl);
}

.post-content p {
  color: var(--color-text-muted);
}

.post-footer {
  padding: 0 var(--space-3xl) var(--space-3xl);
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
}

.post-missing {
  display: flex;
  align-items: center;
  min-height: 50vh;
}

.post-missing-text {
  margin: var(--space-md) 0 var(--space-lg);
  color: var(--color-text-muted);
}

@media (min-width: 900px) {
  .post-content {
    padding-inline: var(--space-4xl);
  }

  .post-title-wrap {
    padding-inline: var(--space-4xl);
    padding-block: var(--space-2xl);
  }
}
</style>
