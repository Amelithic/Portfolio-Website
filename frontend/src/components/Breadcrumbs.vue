<script setup lang="ts">
import { siteCopy } from '@/content/siteCopy'

export interface BreadcrumbItem {
  label: string
  to?: string
}

defineProps<{ items: BreadcrumbItem[] }>()
</script>

<template>
  <nav class="breadcrumbs" :aria-label="siteCopy.nav.breadcrumb">
    <ol>
      <li v-for="item in items" :key="item.label">
        <RouterLink v-if="item.to" :to="item.to">{{ item.label }}</RouterLink>
        <span v-else class="current" aria-current="page">{{ item.label }}</span>
        <i class="ph ph-caret-right separator" aria-hidden="true"></i>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem;
  list-style: none;
  font-size: 0.9rem;
}

.breadcrumbs a {
  color: var(--color-text-muted);
}

.breadcrumbs a:hover {
  color: var(--color-accent);
}

.breadcrumbs .current {
  color: var(--color-text);
  font-weight: 600;
}

.breadcrumbs .separator {
  font-size: 0.8rem;
  color: var(--color-text-faint);
}
</style>
