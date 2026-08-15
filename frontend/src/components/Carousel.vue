<script setup lang="ts">
import { ref } from 'vue'

withDefaults(defineProps<{ label?: string }>(), { label: 'Cards' })

const track = ref<HTMLElement | null>(null)

function scrollBy(direction: number): void {
  const el = track.value
  if (!el) return
  el.scrollBy({ left: direction * Math.round(el.clientWidth * 0.8), behavior: 'smooth' })
}
</script>

<template>
  <div class="carousel">
    <div ref="track" class="carousel-track" :aria-label="label">
      <slot />
    </div>
    <div class="carousel-actions">
      <button type="button" class="carousel-btn" aria-label="Scroll left" @click="scrollBy(-1)">
        <i class="ph ph-caret-left" aria-hidden="true"></i>
      </button>
      <button type="button" class="carousel-btn" aria-label="Scroll right" @click="scrollBy(1)">
        <i class="ph ph-caret-right" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
}

.carousel-track {
  display: flex;
  gap: var(--space-lg);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  padding-bottom: 6px;
  margin-bottom: -6px;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-track > :deep(*) {
  flex: 0 0 auto;
  width: min(320px, 86vw);
  scroll-snap-align: start;
}

.carousel-actions {
  display: flex;
  justify-content: flex-end;
  gap: var(--space-sm);
  margin-top: var(--space-md);
}

.carousel-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.carousel-btn:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 8%, transparent);
}

.carousel-btn i {
  font-size: 1.1rem;
}
</style>
