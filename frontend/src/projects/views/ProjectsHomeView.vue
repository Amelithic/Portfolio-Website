<script setup lang="ts">
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import Tag from '@/components/Tag.vue'
import ProjectCard from '@/projects/components/ProjectCard.vue'
import { getLatestProjects, getProjectTags } from '@/projects'
import { siteCopy } from '@/content/siteCopy'
import { getImageUrl } from '@/utils/images'

const projects = getLatestProjects(10)
const categories = getProjectTags(10)
</script>

<template>
  <div>
    <section class="projects-hero">
      <div class="container projects-hero-inner">
        <div class="projects-hero-copy">
          <p class="projects-hero-eyebrow">{{ siteCopy.projects.hero.eyebrow }}</p>
          <h1>
            {{ siteCopy.projects.hero.title }}
            <span class="text-gradient">{{ siteCopy.projects.hero.highlight }}</span>
          </h1>
          <p class="projects-hero-sub">
            {{ siteCopy.projects.hero.sub }}
          </p>
        </div>
        <div class="projects-hero-media">
          <PlaceholderMedia :src="getImageUrl('projectsHero')" icon="ph-folder" :label="siteCopy.mediaLabels.projectsArtwork" />
        </div>
      </div>
    </section>

    <Section
      :heading="siteCopy.projects.allProjectsSection.heading"
      :subheading="siteCopy.projects.allProjectsSection.subheading"
      action-to="/projects/all"
      :action-label="siteCopy.ui.seeMore"
    >
      <CardList :items="projects" variant="large">
        <template #default="{ item }">
          <ProjectCard :project="item" />
        </template>
      </CardList>
    </Section>

    <Section
      :heading="siteCopy.projects.categoriesSection.heading"
      :subheading="siteCopy.projects.categoriesSection.subheading"
    >
      <ul class="category-list">
        <li v-for="tag in categories" :key="tag">
          <Tag :label="tag" :to="`/projects/all?category=${tag}`" />
        </li>
      </ul>
    </Section>
  </div>
</template>

<style scoped>
.projects-hero {
  padding-block: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.projects-hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.projects-hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.projects-hero-sub {
  margin-top: var(--space-lg);
  max-width: 46ch;
  color: var(--color-text-muted);
}

.projects-hero-media :deep(.placeholder-media) {
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-lg);
  min-height: 240px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
}

@media (min-width: 900px) {
  .projects-hero-inner {
    grid-template-columns: 1.2fr 1fr;
  }
}
</style>
