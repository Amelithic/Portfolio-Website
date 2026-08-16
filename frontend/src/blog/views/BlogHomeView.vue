<script setup lang="ts">
import { computed, ref } from 'vue'
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import Carousel from '@/components/Carousel.vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import Tag from '@/components/Tag.vue'
import BlogPostCard from '@/blog/components/BlogPostCard.vue'
import { getAllPosts, getPinnedPosts, getPostTags } from '@/blog'
import { siteCopy } from '@/content/siteCopy'
import { getImageUrl } from '@/utils/images'

const pinned = getPinnedPosts()

const latest = [...getAllPosts()].sort((a, b) => b.datePublished.localeCompare(a.datePublished))
const step = 3
const visibleCount = ref(step)
const visibleLatest = computed(() => latest.slice(0, visibleCount.value))
const hasMore = computed(() => visibleCount.value < latest.length)

const categories = getPostTags(10)

function showMore(): void {
  visibleCount.value += step
}
</script>

<template>
  <div>
    <section class="blog-hero">
      <div class="container blog-hero-inner">
        <div class="blog-hero-copy">
          <p class="blog-hero-eyebrow">{{ siteCopy.blog.hero.eyebrow }}</p>
          <h1>
            {{ siteCopy.blog.hero.title }}
            <span class="text-gradient">{{ siteCopy.blog.hero.highlight }}</span>
          </h1>
          <p class="blog-hero-sub">
            {{ siteCopy.blog.hero.sub }}
          </p>
        </div>
        <div class="blog-hero-media">
          <PlaceholderMedia :src="getImageUrl('blogHero')" icon="ph-article" :label="siteCopy.mediaLabels.blogArtwork" />
        </div>
      </div>
    </section>

    <Section :heading="siteCopy.blog.pinnedSection.heading">
      <Carousel :label="siteCopy.blog.pinnedSection.carouselLabel">
        <BlogPostCard v-for="post in pinned" :key="post.slug" :post="post" variant="small" />
      </Carousel>
    </Section>

    <Section
      :heading="siteCopy.blog.latestSection.heading"
      :subheading="siteCopy.blog.latestSection.subheading"
      action-to="/blog/posts"
      :action-label="siteCopy.ui.seeMore"
    >
      <CardList :items="visibleLatest" variant="large">
        <template #default="{ item }">
          <BlogPostCard :post="item" />
        </template>
      </CardList>
      <button v-if="hasMore" type="button" class="btn show-more" @click="showMore">
        {{ siteCopy.blog.latestSection.showMore }}
        <i class="ph ph-plus" aria-hidden="true"></i>
      </button>
    </Section>

    <Section
      :heading="siteCopy.blog.categoriesSection.heading"
      :subheading="siteCopy.blog.categoriesSection.subheading"
    >
      <ul class="category-list">
        <li v-for="tag in categories" :key="tag">
          <Tag :label="tag" :to="`/blog/posts?category=${tag}`" />
        </li>
      </ul>
    </Section>
  </div>
</template>

<style scoped>
.blog-hero {
  padding-block: var(--space-2xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.blog-hero-inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.blog-hero-eyebrow {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
  margin-bottom: var(--space-md);
}

.blog-hero-sub {
  margin-top: var(--space-lg);
  max-width: 46ch;
  color: var(--color-text-muted);
}

.blog-hero-media :deep(.placeholder-media) {
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-lg);
  min-height: 240px;
}

.show-more {
  margin-top: var(--space-xl);
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-sm);
  list-style: none;
}

@media (min-width: 900px) {
  .blog-hero-inner {
    grid-template-columns: 1.2fr 1fr;
  }
}
</style>
