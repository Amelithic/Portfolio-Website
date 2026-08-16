<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import Tag from '@/components/Tag.vue'
import ProjectsDirNavigation from '@/projects/components/ProjectsDirNavigation.vue'
import { getProjectBySlug } from '@/projects'
import { formatDate } from '@/utils/format'
import { siteCopy } from '@/content/siteCopy'

const route = useRoute()

const project = computed(() => getProjectBySlug(String(route.params.slug)))
</script>

<template>
  <div v-if="project" class="project-page">
    <div class="container">
      <ProjectsDirNavigation :project="project" />

      <article class="project-card">
        <header class="project-header">
          <h1>{{ project.title }}</h1>
          <p class="project-sub">{{ project.description }}</p>

          <div class="project-media">
            <PlaceholderMedia :src="project.image" icon="ph-folder" :label="project.title" />
          </div>

          <div class="project-details">
            <span>
              <i class="ph ph-calendar-blank" aria-hidden="true"></i>
              {{ siteCopy.projectPost.published }} {{ formatDate(project.datePublished) }}
            </span>
            <span>
              <i class="ph ph-folder-simple" aria-hidden="true"></i>
              {{ project.category }}
            </span>
          </div>
        </header>

        <div class="project-divider" role="separator"></div>

        <div class="project-content rich-text">
          <p v-for="(paragraph, index) in project.content.split(/\n\n+/)" :key="index">
            {{ paragraph }}
          </p>
        </div>

        <footer class="project-footer">
          <ul class="project-tags">
            <li v-for="tag in project.tags" :key="tag">
              <Tag :label="tag" :to="`/projects/all?category=${tag}`" />
            </li>
          </ul>
        </footer>
      </article>
    </div>
  </div>

  <div v-else class="project-missing">
    <div class="container">
      <h1>{{ siteCopy.projectPost.missingTitle }}</h1>
      <p class="project-missing-text">{{ siteCopy.projectPost.missingText }}</p>
      <RouterLink to="/projects" class="btn btn-primary">{{ siteCopy.projectPost.back }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.project-page {
  padding-block: var(--space-2xl);
}

.project-card {
  margin-top: var(--space-lg);
  overflow: hidden;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background: var(--color-surface);
  box-shadow: var(--shadow-card);
}

.project-header {
  padding: var(--space-xl);
}

.project-sub {
  margin-top: var(--space-md);
  max-width: 56ch;
  color: var(--color-text-muted);
}

.project-media {
  margin-top: var(--space-lg);
  overflow: hidden;
  border-radius: var(--radius-md);
  border: 1px solid var(--color-border);
}

.project-media :deep(.placeholder-media) {
  aspect-ratio: 16 / 9;
  min-height: 280px;
}

.project-details {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md) var(--space-lg);
  margin-top: var(--space-lg);
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.project-details span {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.project-details i {
  color: var(--color-accent);
}

.project-divider {
  height: 1px;
  background: var(--color-border);
}

.project-content {
  padding: var(--space-xl);
}

.project-content p {
  white-space: pre-line;
  color: var(--color-text-muted);
}

.project-footer {
  padding: 0 var(--space-xl) var(--space-xl);
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
}

.project-missing {
  display: flex;
  align-items: center;
  min-height: 50vh;
}

.project-missing-text {
  margin: var(--space-md) 0 var(--space-lg);
  color: var(--color-text-muted);
}

@media (min-width: 900px) {
  .project-header,
  .project-content {
    padding: var(--space-2xl);
  }
}
</style>
