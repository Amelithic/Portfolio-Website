<script setup lang="ts" generic="T">
import { siteCopy } from '@/content/siteCopy'

withDefaults(
  defineProps<{ items: T[]; variant?: 'small' | 'large'; empty?: string }>(),
  { variant: 'large', empty: siteCopy.ui.empty },
)
</script>

<template>
  <ul v-if="items.length" class="card-list" :class="`card-list--${variant}`">
    <li v-for="(item, index) in items" :key="index" class="card-list-item">
      <slot :item="item" :index="index" />
    </li>
  </ul>
  <p v-else class="card-list-empty">{{ empty }}</p>
</template>

<style scoped>
.card-list {
  display: grid;
  gap: var(--space-lg);
  list-style: none;
}

.card-list--large {
  grid-template-columns: 1fr;
}

.card-list--small {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
}

.card-list-item {
  display: flex;
}

.card-list-item > :deep(*) {
  width: 100%;
}

.card-list-empty {
  padding: var(--space-xl);
  text-align: center;
  color: var(--color-text-muted);
  border: 1px dashed var(--color-border-strong);
  border-radius: var(--radius-lg);
}
</style>
