<script setup lang="ts">
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import Carousel from '@/components/Carousel.vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import ProjectCard from '@/projects/components/ProjectCard.vue'
import BlogPostCard from '@/blog/components/BlogPostCard.vue'
import { getPinnedProjects } from '@/projects'
import { getLatestPosts } from '@/blog'
import { siteCopy } from '@/content/siteCopy'
import { getImageUrl } from '@/utils/images'

const projects = getPinnedProjects()
const posts = getLatestPosts(5)
</script>

<template>
  <div>
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <PlaceholderMedia :src="getImageUrl('homeHero')" icon="ph-brackets-curly" height="100%" loading="eager" alt="" />
        <div class="hero-overlay"></div>
      </div>
      <div class="container hero-inner">
        <div class="hero-copy">
          <p class="hero-eyebrow">{{ siteCopy.home.hero.eyebrow }}</p>
          <h1>
            {{ siteCopy.home.hero.greeting }} <span class="text-gradient">{{ siteCopy.home.hero.name }}</span>.<br />
            {{ siteCopy.home.hero.tagline }}
          </h1>
          <p class="hero-sub">
            {{ siteCopy.home.hero.sub }}
          </p>
          <div class="hero-actions">
            <RouterLink to="/projects" class="btn btn-primary">{{ siteCopy.home.hero.viewProjects }}</RouterLink>
            <RouterLink to="/about" class="btn">{{ siteCopy.home.hero.aboutMe }}</RouterLink>
          </div>
        </div>
        <div class="hero-socials">
          <a
            v-for="social in siteCopy.socials"
            :key="social.label"
            :href="social.to"
            class="hero-social"
            :aria-label="social.label"
          >
            <i :class="['ph', social.icon]" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </section>

    <Section id="intro" :heading="siteCopy.home.intro.heading" :subheading="siteCopy.home.intro.subheading">
      <div class="intro-grid">
        <div class="intro-media">
          <PlaceholderMedia :src="getImageUrl('homeIntro')" icon="ph-code" :label="siteCopy.mediaLabels.about" />
        </div>
        <div class="intro-copy">
          <p v-for="paragraph in siteCopy.home.intro.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
          <RouterLink to="/about" class="btn">
            {{ siteCopy.home.intro.goToAbout }}
            <i class="ph ph-arrow-right" aria-hidden="true"></i>
          </RouterLink>
        </div>
      </div>
    </Section>

    <Section
      id="projects"
      :heading="siteCopy.home.projectsSection.heading"
      :subheading="siteCopy.home.projectsSection.subheading"
      action-to="/projects"
      :action-label="siteCopy.ui.seeMore"
    >
      <CardList :items="projects" variant="large">
        <template #default="{ item }">
          <ProjectCard :project="item" />
        </template>
      </CardList>
    </Section>

    <Section
      id="blog"
      :heading="siteCopy.home.blogSection.heading"
      :subheading="siteCopy.home.blogSection.subheading"
      action-to="/blog"
      :action-label="siteCopy.ui.seeMore"
    >
      <Carousel :label="siteCopy.home.blogSection.carouselLabel">
        <BlogPostCard v-for="post in posts" :key="post.slug" :post="post" variant="small" />
      </Carousel>
    </Section>

    <Section id="contact" :heading="siteCopy.home.contactSection.heading">
      <div class="contact-cta">
        <p>
          {{ siteCopy.home.contactSection.body }}
        </p>
        <RouterLink to="/contacts" class="btn btn-primary">
          {{ siteCopy.home.contactSection.action }}
          <i class="ph ph-paper-plane-tilt" aria-hidden="true"></i>
        </RouterLink>
      </div>
    </Section>
  </div>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  min-height: min(82vh, 680px);
  overflow: hidden;
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.hero-media {
  position: absolute;
  inset: 0;
}

.hero-media :deep(.placeholder-media) {
  width: 100%;
  height: 100%;
  min-height: 0;
  border: none;
  background:
    radial-gradient(120% 120% at 70% 20%, rgba(167, 139, 250, 0.22), transparent 55%),
    radial-gradient(100% 100% at 10% 80%, rgba(99, 102, 241, 0.16), transparent 55%),
    var(--color-bg-elevated);
}

.hero-media :deep(.placeholder-media i) {
  font-size: clamp(6rem, 18vw, 14rem);
  opacity: 0.35;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: var(--hero-overlay);
  pointer-events: none;
}

.hero-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2xl);
  padding-block: var(--space-2xl);
}

.hero-copy {
  max-width: 60ch;
  z-index: 1;
}

.hero-eyebrow {
  margin-bottom: var(--space-md);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--color-accent);
}

.hero-sub {
  margin-top: var(--space-lg);
  max-width: 46ch;
  font-size: 1.02rem;
  color: var(--color-text-muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.hero-socials {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  z-index: 1;
}

.hero-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast),
    transform var(--transition-fast);
}

.hero-social:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
  transform: translateY(-2px);
}

.hero-social i {
  font-size: 1.2rem;
}

.intro-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-xl);
  align-items: center;
}

.intro-media :deep(.placeholder-media) {
  aspect-ratio: 4 / 3;
  border-radius: var(--radius-lg);
}

.intro-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.intro-copy p {
  color: var(--color-text-muted);
}

.contact-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  padding: var(--space-2xl);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  background:
    radial-gradient(120% 160% at 100% 0%, rgba(99, 102, 241, 0.16), transparent 55%),
    var(--color-surface);
}

.contact-cta p {
  max-width: 48ch;
  font-size: 1.1rem;
  color: var(--color-text-muted);
}

@media (max-width: 760px) {
  .hero-inner {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: var(--space-xl);
  }

  .hero-socials {
    flex-direction: row;
  }
}

@media (min-width: 900px) {
  .intro-grid {
    grid-template-columns: 1fr 1.2fr;
  }
}
</style>
