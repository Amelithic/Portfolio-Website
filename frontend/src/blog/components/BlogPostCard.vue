<script setup lang="ts">
import { computed } from 'vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import Tag from '@/components/Tag.vue'
import type { BlogPost } from '@/content/types/BlogPost'
import { siteCopy } from '@/content/siteCopy'
import { formatDate } from '@/utils/format'

const props = withDefaults(defineProps<{ post: BlogPost; variant?: 'small' | 'large' }>(), {
  variant: 'large',
})

const meta = computed(() => `${props.post.category} · ${formatDate(props.post.datePublished)}`)
const postUrl = computed(() => `/blog/posts/${props.post.slug}`)
</script>

<template>
  <article
    class="blog-card"
    :class="[`blog-card--${variant}`, { 'blog-card--pinned': post.pinned }]"
  >
    <div class="blog-card-text">
      <p class="blog-card-meta">
        <i class="ph ph-calendar-blank" aria-hidden="true"></i>
        {{ meta }}
      </p>

      <h3 class="blog-card-title">
        <RouterLink :to="postUrl">{{ post.title }}</RouterLink>
      </h3>

      <p class="blog-card-description">{{ post.description }}</p>

      <ul v-if="variant === 'large' && post.tags.length" class="blog-card-tags">
        <li v-for="tag in post.tags" :key="tag">
          <Tag :label="tag" />
        </li>
      </ul>

      <RouterLink class="blog-card-arrow" :to="postUrl" :aria-label="`${siteCopy.post.read} ${post.title}`">
        <i class="ph ph-arrow-right" aria-hidden="true"></i>
      </RouterLink>
    </div>

    <div v-if="variant === 'large'" class="blog-card-media">
      <PlaceholderMedia :src="post.banner" icon="ph-article" :label="post.title" />
    </div>

    <div v-else-if="post.banner" class="blog-card-thumb">
      <PlaceholderMedia :src="post.banner" icon="ph-article" :label="post.title" />
    </div>
  </article>
</template>

<style scoped>
.blog-card {
  position: relative;
  display: flex;
  height: 100%;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition:
    transform var(--transition),
    box-shadow var(--transition),
    border-color var(--transition);
}

.blog-card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-glow);
}

.blog-card--pinned {
  border-color: color-mix(in srgb, var(--color-accent) 45%, var(--color-border));
}

.blog-card-text {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  flex: 1;
  padding: var(--space-lg);
}

.blog-card-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.blog-card-title {
  font-size: 1.05rem;
}

.blog-card-title a {
  color: var(--color-text);
}

.blog-card-title a:hover {
  color: var(--color-accent);
}

.blog-card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.blog-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin-top: auto;
  padding-top: 0.4rem;
}

.blog-card-arrow {
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-top: auto;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.blog-card-arrow:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
}

.blog-card--large {
  flex-direction: row;
  align-items: stretch;
}

.blog-card--large .blog-card-text {
  flex: 7 1 0;
  min-width: 0;
}

.blog-card--large .blog-card-media {
  flex: 3 1 0;
  position: relative;
  overflow: hidden;
  min-width: 0;
}

.blog-card--large .blog-card-media :deep(.placeholder-media) {
  width: 100%;
  height: 100%;
  min-height: 0;
  border: none;
  background:
    radial-gradient(120% 120% at 20% 0%, rgba(167, 139, 250, 0.14), transparent 55%),
    linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 45%, transparent), transparent 75%),
    var(--color-surface);
}

.blog-card--small {
  min-height: 180px;
}

.blog-card--small .blog-card-text {
  padding: var(--space-md);
}

.blog-card--small .blog-card-meta,
.blog-card--small .blog-card-title {
  padding-right: 4rem;
}

.blog-card--small .blog-card-title {
  font-size: 0.95rem;
}

.blog-card--small .blog-card-description {
  -webkit-line-clamp: 2;
}

.blog-card--small .blog-card-thumb {
  position: absolute;
  top: var(--space-md);
  right: var(--space-md);
  width: 3.75rem;
  height: 3.75rem;
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
}

.blog-card--small .blog-card-thumb :deep(.placeholder-media) {
  width: 100%;
  height: 100%;
  min-height: 0;
  border: none;
}
</style>
