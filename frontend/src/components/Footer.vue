<script setup lang="ts">
import LogoMini from '@/components/LogoMini.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'
import { siteConfig } from '@/config/site'
import { siteCopy } from '@/content/siteCopy'

withDefaults(defineProps<{ brand?: string }>(), { brand: siteConfig.brandName })

const sitemapLinks = [
  { label: siteCopy.nav.home, to: '/' },
  { label: siteCopy.nav.about, to: '/about' },
  { label: siteCopy.nav.projects, to: '/projects' },
  { label: siteCopy.nav.allProjects, to: '/projects/all' },
  { label: siteCopy.nav.blog, to: '/blog' },
  { label: siteCopy.nav.allPosts, to: '/blog/posts' },
  { label: siteCopy.nav.contacts, to: '/contacts' },
]

const contactLinks = siteCopy.socials
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <RouterLink to="/" class="footer-logo">
          <LogoMini :height="26" />
          <span>{{ brand }}</span>
        </RouterLink>
        <p class="footer-rights">{{ siteCopy.footer.rights }}</p>
      </div>

      <nav class="footer-links" aria-label="Footer">
        <div class="footer-col">
          <h4>{{ siteCopy.footer.sitemap }}</h4>
          <ul>
            <li v-for="link in sitemapLinks" :key="link.to">
              <RouterLink :to="link.to">{{ link.label }}</RouterLink>
            </li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>{{ siteCopy.footer.contacts }}</h4>
          <ul>
            <li v-for="contact in contactLinks" :key="contact.label">
              <a :href="contact.to" class="footer-social" :aria-label="contact-label">
                <i :class="['ph', contact.icon]" aria-hidden="true"></i>
                {{ contact.label }}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="footer-theme">
        <ThemeToggle />
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  margin-top: var(--space-3xl);
  padding-block: var(--space-2xl);
  border-top: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-xl);
  padding-inline: clamp(0.75rem, 1.5vw, 1.5rem);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.footer-logo {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-display);
  font-weight: 600;
  color: var(--color-text);
}

.footer-rights {
  font-size: 0.8rem;
  color: var(--color-text-faint);
}

.footer-links {
  display: flex;
  gap: var(--space-2xl);
}

.footer-col h4 {
  margin-bottom: var(--space-md);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-text-faint);
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  list-style: none;
}

.footer-col a {
  color: var(--color-text-muted);
}

.footer-col a:hover {
  color: var(--color-accent);
}

.footer-social {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
}

.footer-theme {
  align-self: center;
}
</style>
