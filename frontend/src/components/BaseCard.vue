<script setup lang="ts">
import Tag from '@/components/Tag.vue'
import { siteCopy } from '@/content/siteCopy'

defineProps<{
  title: string
  description: string
  to?: string
  meta?: string
  tags?: string[]
  pinned?: boolean
  variant?: 'small' | 'large'
}>()
</script>

<template>
  <article class="card" :class="[`card--${variant}`, { 'card--pinned': pinned }]">
    <div v-if="$slots.media" class="card-media-wrap">
      <slot name="media" />
    </div>
    <div class="card-body">
      <div v-if="pinned" class="card-badge">
        <i class="ph ph-push-pin" aria-hidden="true"></i>
        {{ siteCopy.ui.pinned }}
      </div>
      <h3 class="card-title">
        <RouterLink v-if="to" :to="to">{{ title }}</RouterLink>
        <span v-else>{{ title }}</span>
      </h3>
      <p v-if="meta" class="card-meta">
        <i class="ph ph-calendar-blank" aria-hidden="true"></i>
        {{ meta }}
      </p>
      <p class="card-description">{{ description }}</p>
      <slot />
      <ul v-if="tags?.length" class="card-tags">
        <li v-for="tag in tags" :key="tag">
          <Tag :label="tag" />
        </li>
      </ul>
      <div v-if="$slots.footer" class="card-footer">
        <slot name="footer" />
      </div>
    </div>
  </article>
</template>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
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

.card:hover {
  transform: translateY(-4px);
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-glow);
}

.card--pinned {
  border-color: color-mix(in srgb, var(--color-accent) 45%, var(--color-border));
}

.card-media-wrap {
  position: relative;
}

.card--small .card-media-wrap :deep(img),
.card--small .card-media-wrap :deep(.placeholder-media) {
  aspect-ratio: 16 / 10;
}

.card--large .card-media-wrap :deep(img),
.card--large .card-media-wrap :deep(.placeholder-media) {
  aspect-ratio: 16 / 8;
}

.card-body {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.6rem;
  padding: var(--space-lg);
}

.card--small .card-body {
  padding: var(--space-md) var(--space-md) var(--space-lg);
}

.card-badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.2rem 0.65rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
  border: 1px solid var(--color-border-strong);
  border-radius: var(--radius-full);
}

.card-title {
  font-size: 1.05rem;
}

.card--small .card-title {
  font-size: 0.95rem;
}

.card-title a {
  color: var(--color-text);
}

.card-title a:hover {
  color: var(--color-accent);
}

.card-meta {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

.card-description {
  font-size: 0.88rem;
  color: var(--color-text-muted);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  list-style: none;
  margin-top: auto;
  padding-top: 0.4rem;
}

.card-footer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}
</style>
