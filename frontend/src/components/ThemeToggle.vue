<script setup lang="ts">
import { useTheme } from '@/composables/useTheme'
import { siteCopy } from '@/content/siteCopy'

const { isDark, toggleTheme } = useTheme()

const themeLabel = isDark ? siteCopy.theme.toLight : siteCopy.theme.toDark
</script>

<template>
  <button
    type="button"
    class="theme-toggle"
    :aria-label="themeLabel"
    :title="themeLabel"
    @click="toggleTheme"
  >
    <i :class="isDark ? 'ph ph-sun' : 'ph ph-moon'" aria-hidden="true"></i>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  background: transparent;
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    box-shadow var(--transition-fast),
    transform var(--transition-fast);
}

.theme-toggle:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.12);
  transform: translateY(-1px);
}

.theme-toggle i {
  font-size: 1.25rem;
}
</style>
