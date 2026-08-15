<script setup lang="ts">
import { computed } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import type { BreadcrumbItem } from '@/components/Breadcrumbs.vue'
import type { Project } from '@/content/types/Project'
import { siteCopy } from '@/content/siteCopy'

const props = defineProps<{ project: Project }>()

const items = computed<BreadcrumbItem[]>(() => [
  { label: siteCopy.nav.projects, to: '/projects' },
  { label: siteCopy.nav.allProjects, to: '/projects/all' },
  { label: props.project.title },
])
</script>

<template>
  <Breadcrumbs :items="items" />
</template>
