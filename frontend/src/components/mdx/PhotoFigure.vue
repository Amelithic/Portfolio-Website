<script setup lang="ts">
defineProps<{ src: string; alt: string; caption?: string }>()
</script>

<template>
  <figure class="photo-figure">
    <img :src="src" :alt="alt" loading="lazy" />
    <figcaption v-if="caption" class="photo-caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.photo-figure {
  margin: 1.5rem 0;
}

.photo-figure img {
  width: 100%;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.photo-caption {
  margin-top: var(--space-sm);
  font-size: 0.85rem;
  color: var(--color-text-faint);
  text-align: center;
}
</style>
