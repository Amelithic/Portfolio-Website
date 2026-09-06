<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  caption?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <figure class="photo-figure">
    <img
      :src="src"
      :alt="alt"
      loading="lazy"
      :style="{
        width: width ?? '100%',
        height: height ?? 'auto'
      }"
    />
    <figcaption v-if="caption" class="photo-caption">{{ caption }}</figcaption>
  </figure>
</template>

<style scoped>
.photo-figure {
  margin: 1.5rem 0;
  text-align: center; /* centers inline images */
}

.photo-figure img {
  display: block;
  margin: 0 auto; /* centers the image itself */
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
