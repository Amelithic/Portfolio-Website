<script setup lang="ts">
defineProps<{
  id?: string
  heading?: string
  subheading?: string
  actionTo?: string
  actionLabel?: string
}>()
</script>

<template>
  <section class="section" :id="id">
    <div class="container">
      <div v-if="heading || subheading || $slots.header" class="section-header">
        <div>
          <h2 v-if="heading">{{ heading }}</h2>
          <p v-if="subheading" class="section-subheading">{{ subheading }}</p>
        </div>
        <RouterLink v-if="actionTo && actionLabel" :to="actionTo" class="section-action">
          {{ actionLabel }}
          <i class="ph ph-arrow-right" aria-hidden="true"></i>
        </RouterLink>
      </div>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section {
  padding-block: var(--space-2xl);
}

@media (min-width: 900px) {
  .section {
    padding-block: var(--space-3xl);
  }
}

.section-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-lg);
  flex-wrap: wrap;
  margin-bottom: var(--space-xl);
}

.section-subheading {
  margin-top: var(--space-xs);
  color: var(--color-text-muted);
}

.section-action {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-weight: 600;
  color: var(--color-accent);
}

.section-action:hover {
  color: var(--color-accent-2);
}

.section-action i {
  transition: transform var(--transition-fast);
}

.section-action:hover i {
  transform: translateX(3px);
}
</style>
