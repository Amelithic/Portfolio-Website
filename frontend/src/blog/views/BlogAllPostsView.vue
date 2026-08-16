<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import Tag from '@/components/Tag.vue'
import BlogPostCard from '@/blog/components/BlogPostCard.vue'
import { filterPosts, getPostTags } from '@/blog'
import { siteCopy } from '@/content/siteCopy'

const route = useRoute()
const router = useRouter()

const search = ref(typeof route.query.q === 'string' ? route.query.q : '')
const tags = getPostTags(10)

const activeCategory = computed(() =>
  typeof route.query.category === 'string' ? route.query.category : '',
)

const posts = computed(() =>
  filterPosts({ search: search.value, category: activeCategory.value }),
)

watch(
  () => route.query.q,
  (value) => {
    search.value = typeof value === 'string' ? value : ''
  },
)

function selectCategory(tag: string): void {
  void router.push({ query: tag ? { category: tag } : {} })
}

function clearSearch(): void {
  search.value = ''
  void router.push({ query: {} })
}
</script>

<template>
  <div>
    <section class="all-posts-hero">
      <div class="container">
        <h1>{{ siteCopy.blogAll.title }}</h1>
        <p class="all-posts-lede">{{ siteCopy.blogAll.lede }}</p>
      </div>
    </section>

    <div class="container all-posts-body">
      <div class="all-posts-toolbar">
        <form class="all-posts-search" role="search" @submit.prevent="clearSearch">
          <i class="ph ph-magnifying-glass" aria-hidden="true"></i>
          <input
            v-model="search"
            type="search"
            :placeholder="siteCopy.blogAll.searchPlaceholder"
            :aria-label="siteCopy.blogAll.searchAria"
          />
        </form>
        <div v-if="activeCategory" class="all-posts-filter">
          <span>{{ siteCopy.ui.filteringBy }}</span>
          <Tag :label="activeCategory" @click="selectCategory('')" />
        </div>
      </div>

      <div class="all-posts-tags">
        <button
          type="button"
          class="filter-pill"
          :class="{ 'filter-pill--active': !activeCategory }"
          @click="selectCategory('')"
        >
          {{ siteCopy.ui.all }}
        </button>
        <button
          v-for="tag in tags"
          :key="tag"
          type="button"
          class="filter-pill"
          :class="{ 'filter-pill--active': activeCategory === tag }"
          @click="selectCategory(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <Section>
        <CardList :items="posts" variant="large" :empty="siteCopy.blogAll.noResults">
          <template #default="{ item }">
            <BlogPostCard :post="item" />
          </template>
        </CardList>
      </Section>
    </div>
  </div>
</template>

<style scoped>
.all-posts-hero {
  padding-block: var(--space-2xl) var(--space-xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.all-posts-lede {
  margin-top: var(--space-md);
  color: var(--color-text-muted);
}

.all-posts-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding-block: var(--space-2xl);
}

.all-posts-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
}

.all-posts-search {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  color: var(--color-text-muted);
  background: var(--color-surface);
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast);
}

.all-posts-search:focus-within {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.all-posts-search input {
  width: 14rem;
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: inherit;
}

.all-posts-filter {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
}

.all-posts-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
}

.filter-pill {
  padding: 0.3rem 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    background-color var(--transition-fast);
}

.filter-pill:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.filter-pill--active {
  color: var(--color-accent);
  border-color: var(--color-accent);
  background: color-mix(in srgb, var(--color-accent) 10%, transparent);
}
</style>
