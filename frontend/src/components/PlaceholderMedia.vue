<script setup lang="ts">
import { ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    src?: string
    alt?: string
    icon?: string
    label?: string
    height?: string
    loading?: 'lazy' | 'eager'
  }>(),
  { src: '', alt: '', icon: 'ph-image', label: '', height: '', loading: 'lazy' },
)

const errored = ref(false)

watch(
  () => props.src,
  () => {
    errored.value = false
  },
)
</script>

<template>
  <div
    class="placeholder-media"
    :class="[height ? 'placeholder-media--sized' : '', { 'placeholder-media--image': src && !errored }]"
    :style="height ? { height } : {}"
    role="img"
    :aria-label="label"
  >
    <img
      v-if="src && !errored"
      class="placeholder-media__img"
      :src="src"
      :alt="alt || label"
      :loading="loading"
      decoding="async"
      @error="errored = true"
    />
    <i v-else :class="['ph', icon]" aria-hidden="true"></i>
  </div>
</template>

<style scoped>
.placeholder-media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 120px;
  overflow: hidden;
  color: var(--color-text-faint);
  background:
    radial-gradient(120% 120% at 20% 0%, rgba(167, 139, 250, 0.14), transparent 55%),
    linear-gradient(160deg, var(--color-surface-hover), var(--color-bg-elevated));
  border: 1px solid var(--color-border);
}

.placeholder-media--sized {
  height: auto;
}

.placeholder-media i {
  font-size: 2.5rem;
}

.placeholder-media__img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
