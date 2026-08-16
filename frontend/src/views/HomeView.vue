<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Section from '@/components/Section.vue'
import CardList from '@/components/CardList.vue'
import Carousel from '@/components/Carousel.vue'
import PlaceholderMedia from '@/components/PlaceholderMedia.vue'
import ProjectCard from '@/projects/components/ProjectCard.vue'
import BlogPostCard from '@/blog/components/BlogPostCard.vue'
import Timeline from '@/components/Timeline.vue'
import { getPinnedProjects } from '@/projects'
import { getLatestPosts } from '@/blog'
import { getTimelineExperiences } from '@/content/experiences'
import { siteCopy } from '@/content/siteCopy'
import { getImageUrl } from '@/utils/images'

const projects = getPinnedProjects()
const posts = getLatestPosts(5)
const experiences = getTimelineExperiences()

const bgReady = ref(false)

onMounted(() => {
  const img = new Image()
  img.onload = () => { bgReady.value = true }
  img.src = getImageUrl('homeBackground')
})
</script>

<template>
  <div class="home">
    <img
      v-if="bgReady"
      :src="getImageUrl('homeBackground')"
      alt=""
      class="home-bg"
      aria-hidden="true"
    />
    <section class="hero">
      <div class="hero-media" aria-hidden="true">
        <PlaceholderMedia :src="getImageUrl('homeHero')" icon="ph-brackets-curly" height="100%" loading="eager"
          alt="" />
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
          <a v-for="social in siteCopy.socials" :key="social.label" :href="social.to" class="hero-social"
            :aria-label="social.label">
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
          <p v-for="(paragraph, index) in siteCopy.home.intro.paragraphs" :key="paragraph"
            :class="{ 'is-first': index === 0 }">
            {{ paragraph }}
          </p>
          <RouterLink to="/about" class="btn">
            {{ siteCopy.home.intro.goToAbout }}
            <i class="ph ph-arrow-right" aria-hidden="true"></i>
          </RouterLink>
        </div>
      </div>
    </Section>

    <Section id="timeline" :heading="siteCopy.home.timelineSection.heading"
      :subheading="siteCopy.home.timelineSection.subheading">
      <Timeline :items="experiences" />
    </Section>

    <Section id="projects" :heading="siteCopy.home.projectsSection.heading"
      :subheading="siteCopy.home.projectsSection.subheading" action-to="/projects" :action-label="siteCopy.ui.seeMore">
      <CardList :items="projects" variant="large">
        <template #default="{ item }">
          <ProjectCard :project="item" />
        </template>
      </CardList>
    </Section>

    <Section id="blog" :heading="siteCopy.home.blogSection.heading" :subheading="siteCopy.home.blogSection.subheading"
      action-to="/blog" :action-label="siteCopy.ui.seeMore">
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
.home {
  position: relative;
}

.home::before {
  content: '';
  position: absolute;
  inset: 0;
  height: 100%;
  background:
    radial-gradient(70% 50% at 10% 8%, rgba(167, 139, 250, 0.28), transparent 55%),
    radial-gradient(60% 40% at 80% 25%, rgba(99, 102, 241, 0.24), transparent 50%),
    radial-gradient(65% 45% at 25% 55%, rgba(56, 189, 248, 0.20), transparent 50%),
    radial-gradient(50% 35% at 70% 80%, rgba(45, 212, 191, 0.18), transparent 50%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

.home-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0.18;
  mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
  pointer-events: none;
  z-index: 0;
}

.home > section {
  position: relative;
  z-index: 1;
}

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
  background: linear-gradient(to right, rgba(11, 9, 22, 0.92) 0%, rgba(11, 9, 22, 0.6) 40%, transparent 70%);
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
  mix-blend-mode: screen;
}

.hero-social {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: var(--radius-sm);
  color: #ffffff;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);
}

.hero-social:hover {
  background: rgba(255, 255, 255, 0.12);
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

.intro-copy p:first-child {
  font-weight: 500;
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

<style>
[data-theme='light'] .hero-overlay {
  background: linear-gradient(to right, rgba(246, 244, 252, 0.92) 0%, rgba(246, 244, 252, 0.6) 40%, transparent 70%);
}

[data-theme='light'] .home::before {
  background:
    radial-gradient(70% 50% at 10% 8%, rgba(139, 92, 246, 0.18), transparent 55%),
    radial-gradient(60% 40% at 80% 25%, rgba(79, 70, 229, 0.16), transparent 50%),
    radial-gradient(65% 45% at 25% 55%, rgba(14, 165, 233, 0.14), transparent 50%),
    radial-gradient(50% 35% at 70% 80%, rgba(20, 184, 166, 0.12), transparent 50%);
}

[data-theme='light'] .home-bg {
  opacity: 0.12;
}
</style>
