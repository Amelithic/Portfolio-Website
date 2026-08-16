<script setup lang="ts">
import { computed } from 'vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import type { BreadcrumbItem } from '@/components/Breadcrumbs.vue'
import type { BlogPost } from '@/content/types/BlogPost'
import { siteCopy } from '@/content/siteCopy'

const props = defineProps<{ post: BlogPost }>()

const items = computed<BreadcrumbItem[]>(() => [
  { label: siteCopy.nav.blog, to: '/blog' },
  { label: siteCopy.nav.allPosts, to: '/blog/posts' },
  { label: props.post.title },
])
</script>

<template>
  <Breadcrumbs :items="items" />
</template>
