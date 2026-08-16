<script setup lang="ts">
import BaseCard from '@/components/BaseCard.vue'

defineProps<{
  title: string
  description: string
  to?: string
  meta?: string
  tags?: string[]
  pinned?: boolean
}>()
</script>

<template>
  <BaseCard v-bind="$props" variant="large">
    <template v-if="$slots.media" #media>
      <slot name="media" />
    </template>
    <slot />
    <template v-if="$slots.footer" #footer>
      <slot name="footer" />
    </template>
  </BaseCard>
</template>
