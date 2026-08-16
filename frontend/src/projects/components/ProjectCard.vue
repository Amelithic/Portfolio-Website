<script setup lang="ts">
import CardLarge from '@/components/CardLarge.vue'
import CardSmall from '@/components/CardSmall.vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import type { Project } from '@/content/types/Project'
import { formatDate } from '@/utils/format'

withDefaults(defineProps<{ project: Project; variant?: 'small' | 'large' }>(), {
  variant: 'large',
})
</script>

<template>
  <component
    :is="variant === 'small' ? CardSmall : CardLarge"
    :title="project.title"
    :description="project.description"
    :to="`/projects/project/${project.slug}`"
    :meta="`${formatDate(project.datePublished)} · ${project.category}`"
    :tags="project.tags"
    :pinned="project.pinned"
  >
    <template #media>
      <PlaceholderMedia :src="project.image" icon="ph-folder" :label="project.title" />
    </template>
  </component>
</template>
