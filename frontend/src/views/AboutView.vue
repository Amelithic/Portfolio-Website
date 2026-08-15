<script setup lang="ts">
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import { siteCopy } from '@/content/siteCopy'
</script>

<template>
  <div class="about">
    <section class="about-hero">
      <div class="container">
        <h1>{{ siteCopy.about.title }}</h1>
        <p class="about-lede">
          {{ siteCopy.about.lede }}
        </p>
      </div>
    </section>

    <div class="container about-body">
      <article
        v-for="(block, index) in siteCopy.about.blocks"
        :key="block.heading"
        class="about-block"
        :class="{ 'about-block--reverse': index % 2 === 1 }"
      >
        <div class="about-media">
          <PlaceholderMedia :src="block.image" :icon="block.icon" :label="block.heading" />
        </div>
        <div class="about-copy">
          <h2>{{ block.heading }}</h2>
          <p v-for="paragraph in block.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </article>
    </div>
  </div>
</template>

<style scoped>
.about-hero {
  padding-block: var(--space-2xl) var(--space-xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.about-lede {
  margin-top: var(--space-md);
  max-width: 52ch;
  color: var(--color-text-muted);
}

.about-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
  padding-block: var(--space-3xl);
}

.about-block {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.about-media :deep(.placeholder-media) {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
}

.about-copy {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.about-copy p {
  color: var(--color-text-muted);
}

@media (min-width: 900px) {
  .about-block {
    grid-template-columns: 1fr 1.2fr;
  }

  .about-block--reverse .about-media {
    order: 2;
  }
}
</style>
