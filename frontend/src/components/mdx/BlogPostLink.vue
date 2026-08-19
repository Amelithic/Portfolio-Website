<script setup lang="ts">
defineProps<{ slug: string; title: string; description: string }>()
</script>

<template>
  <RouterLink :to="`/blog/posts/${slug}`" class="blog-post-link">
    <span class="blog-post-link-label">
      <i class="ph ph-arrow-square-out" aria-hidden="true"></i>
      Related post
    </span>
    <h4 class="blog-post-link-title">{{ title }}</h4>
    <p class="blog-post-link-desc">{{ description }}</p>
  </RouterLink>
</template>

<style scoped>
.blog-post-link {
  display: block;
  padding: var(--space-md) var(--space-lg);
  margin: 1.5rem 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  text-decoration: none;
  transition:
    border-color var(--transition-fast),
    box-shadow var(--transition-fast);
}

.blog-post-link:hover {
  border-color: var(--color-accent);
  box-shadow: var(--shadow-glow);
}

.blog-post-link-label {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--color-accent);
  margin-bottom: var(--space-xs);
}

.blog-post-link-title {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.blog-post-link-desc {
  font-size: 0.85rem;
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
