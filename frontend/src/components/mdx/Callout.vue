<script setup lang="ts">
withDefaults(defineProps<{ variant?: 'info' | 'warning' | 'tip' }>(), {
  variant: 'info',
})
</script>

<template>
  <div class="callout" :class="[`callout--${variant}`]">
    <span class="callout-icon">
      <i v-if="variant === 'info'" class="ph ph-info" aria-hidden="true"></i>
      <i v-else-if="variant === 'warning'" class="ph ph-warning" aria-hidden="true"></i>
      <i v-else class="ph ph-lightbulb" aria-hidden="true"></i>
    </span>
    <div class="callout-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.callout {
  position: relative;
  display: flex;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  border-radius: var(--radius-md);
  border-left: 3px solid;
  background: var(--color-surface);
}

.callout::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: var(--callout-tint);
  opacity: 0.08;
  pointer-events: none;
}

.callout--info {
  border-color: var(--color-accent-2);
  --callout-tint: var(--color-accent-2);
}

.callout--warning {
  border-color: #f59e0b;
  --callout-tint: #f59e0b;
}

.callout--tip {
  border-color: #10b981;
  --callout-tint: #10b981;
}

.callout-icon {
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  font-size: 1.1rem;
  line-height: 1.6;
}

.callout--info .callout-icon {
  color: var(--color-accent-2);
}

.callout--warning .callout-icon {
  color: #f59e0b;
}

.callout--tip .callout-icon {
  color: #10b981;
}

.callout-body {
  position: relative;
  z-index: 1;
  font-size: 0.92rem;
  color: var(--color-text-muted);
}
</style>
