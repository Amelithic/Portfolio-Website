<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import Tag from '@/components/Tag.vue'
import ProjectCard from '@/projects/components/ProjectCard.vue'
import { filterProjects, getProjectTags } from '@/projects'
import { siteCopy } from '@/content/siteCopy'

const route = useRoute()
const router = useRouter()

const search = ref(typeof route.query.q === 'string' ? route.query.q : '')
const tags = getProjectTags(10)

const activeCategory = computed(() =>
  typeof route.query.category === 'string' ? route.query.category : '',
)

const projects = computed(() =>
  filterProjects({ search: search.value, category: activeCategory.value }),
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
    <section class="all-projects-hero">
      <div class="container">
        <h1>{{ siteCopy.projectsAll.title }}</h1>
        <p class="all-projects-lede">{{ siteCopy.projectsAll.lede }}</p>
      </div>
    </section>

    <div class="container all-projects-body">
      <div class="all-projects-toolbar">
        <form class="all-projects-search" role="search" @submit.prevent="clearSearch">
          <i class="ph ph-magnifying-glass" aria-hidden="true"></i>
          <input
            v-model="search"
            type="search"
            :placeholder="siteCopy.projectsAll.searchPlaceholder"
            :aria-label="siteCopy.projectsAll.searchAria"
          />
        </form>
        <div v-if="activeCategory" class="all-projects-filter">
          <span>{{ siteCopy.ui.filteringBy }}</span>
          <Tag :label="activeCategory" @click="selectCategory('')" />
        </div>
      </div>

      <div class="all-projects-tags">
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
        <CardList :items="projects" variant="large" :empty="siteCopy.projectsAll.noResults">
          <template #default="{ item }">
            <ProjectCard :project="item" />
          </template>
        </CardList>
      </Section>
    </div>
  </div>
</template>

<style scoped>
.all-projects-hero {
  padding-block: var(--space-2xl) var(--space-xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.all-projects-lede {
  margin-top: var(--space-md);
  color: var(--color-text-muted);
}

.all-projects-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding-block: var(--space-2xl);
}

.all-projects-toolbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-md);
}

.all-projects-search {
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

.all-projects-search:focus-within {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.all-projects-search input {
  width: 14rem;
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: inherit;
}

.all-projects-filter {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text-muted);
}

.all-projects-tags {
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
