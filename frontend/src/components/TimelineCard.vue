<script setup lang="ts">
import { ref } from 'vue'
import type { Experience } from '@/content/types/Experience'
import { formatDateRange } from '@/utils/format'

defineProps<{ experience: Experience }>()

const expanded = ref(false)
</script>

<template>
  <article
    class="timeline-card"
    :class="{ 'is-expanded': expanded }"
    @mouseenter="expanded = true"
    @mouseleave="expanded = false"
    @focusin="expanded = true"
    @focusout="expanded = false"
  >
    <p class="timeline-date">
      <i class="ph ph-calendar-blank" aria-hidden="true"></i>
      {{ formatDateRange(experience.startDate, experience.endDate) }}
    </p>
    <h3 class="timeline-title">{{ experience.title }}</h3>
    <p class="timeline-org">
      {{ experience.organization }}<template v-if="experience.location">
        <span class="timeline-org-sep" aria-hidden="true"> · </span>{{ experience.location }}
      </template>
    </p>
    <p v-if="experience.description" class="timeline-description">{{ experience.description }}</p>
  </article>
</template>

<style scoped>
.timeline-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  height: 100%;
  padding: var(--space-lg);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  transition:
    border-color var(--transition),
    box-shadow var(--transition);
}

.timeline-card:hover,
.timeline-card.is-expanded {
  border-color: var(--color-border-strong);
  box-shadow: var(--shadow-glow);
}

.timeline-date {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  color: var(--color-accent);
}

.timeline-title {
  font-size: 1.05rem;
}

.timeline-org {
  font-size: 0.88rem;
  color: var(--color-text-muted);
}

.timeline-org-sep {
  color: var(--color-text-faint);
}

.timeline-description {
  max-height: 0;
  margin-top: 0;
  overflow: hidden;
  font-size: 0.86rem;
  color: var(--color-text-muted);
  opacity: 0;
  transition:
    max-height var(--transition),
    margin-top var(--transition),
    opacity var(--transition);
}

.timeline-card.is-expanded .timeline-description {
  max-height: 8rem;
  margin-top: 0.4rem;
  opacity: 1;
}
</style>
