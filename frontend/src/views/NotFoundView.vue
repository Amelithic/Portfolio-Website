<script setup lang="ts">
import { siteCopy } from '@/content/siteCopy'
</script>

<template>
  <div class="not-found">
    <div class="container not-found-inner">
      <p class="not-found-code text-gradient">404</p>
      <h1>{{ siteCopy.notFound.title }}</h1>
      <p class="not-found-text">
        {{ siteCopy.notFound.text }}
      </p>
      <RouterLink to="/" class="btn btn-primary">{{ siteCopy.notFound.backToHome }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  min-height: 60vh;
}

.not-found-inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.not-found-code {
  font-family: var(--font-display);
  font-size: clamp(4rem, 12vw, 8rem);
  font-weight: 700;
  line-height: 1;
}

.not-found-text {
  color: var(--color-text-muted);
}
</style>
