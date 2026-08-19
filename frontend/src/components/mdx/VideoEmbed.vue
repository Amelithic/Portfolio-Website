<script setup lang="ts">
defineProps<{ src: string; title?: string }>()
</script>

<template>
  <div class="video-embed">
    <iframe
      :src="src"
      :title="title ?? 'Embedded video'"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<style scoped>
.video-embed {
  position: relative;
  padding-bottom: 56.25%;
  margin: 1.5rem 0;
  height: 0;
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.video-embed iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
