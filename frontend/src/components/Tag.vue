<script setup lang="ts">
defineProps<{ label: string; to?: string }>()
</script>

<template>
  <RouterLink v-if="to" :to="to" class="tag">
    <span aria-hidden="true">#</span>{{ label }}
  </RouterLink>
  <span v-else class="tag">
    <span aria-hidden="true">#</span>{{ label }}
  </span>
</template>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.2rem 0.7rem;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.tag:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
}
</style>
