<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import LogoFull from '@/components/LogoFull.vue'
import { siteConfig } from '@/config/site'
import { siteCopy } from '@/content/siteCopy'

export interface NavLink {
  label: string
  to: string
  exact?: boolean
}

defineSlots<{
  leading?: () => unknown
  after?: () => unknown
}>()

withDefaults(defineProps<{ brand?: string; links?: NavLink[] }>(), {
  brand: siteConfig.brandName,
  links: () => [
    { label: siteCopy.nav.home, to: '/', exact: true },
    { label: siteCopy.nav.about, to: '/about' },
    { label: siteCopy.nav.projects, to: '/projects' },
    { label: siteCopy.nav.blog, to: '/blog' },
  ],
})

const route = useRoute()
const open = ref(false)

function isActive(link: NavLink): boolean {
  return link.exact ? route.path === link.to : route.path.startsWith(link.to)
}
</script>

<template>
  <header class="nav">
    <div class="container nav-inner">
      <RouterLink to="/" class="nav-brand" @click="open = false">
        <LogoFull :height="32" />
      </RouterLink>

      <slot name="leading" />

      <button
        type="button"
        class="nav-toggle"
        :aria-label="open ? siteCopy.nav.closeMenu : siteCopy.nav.openMenu"
        :aria-expanded="open"
        @click="open = !open"
      >
        <i :class="open ? 'ph ph-x' : 'ph ph-list'" aria-hidden="true"></i>
      </button>

      <nav class="nav-links" :class="{ 'nav-links--open': open }" aria-label="Main navigation">
        <ul>
          <li v-for="link in links" :key="link.to">
            <RouterLink
              :to="link.to"
              class="nav-link"
              :class="{ active: isActive(link) }"
              @click="open = false"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
        <div class="nav-actions">
          <slot name="after" />
          <RouterLink to="/contacts" class="btn btn-primary nav-contact" @click="open = false">
            Contacts
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: color-mix(in srgb, var(--color-bg) 78%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--color-border);
}

.nav-inner {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  height: var(--header-height);
  padding-inline: clamp(0.75rem, 1.5vw, 1.5rem);
}

.nav-brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  color: var(--color-text);
}

.nav-toggle {
  display: none;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  margin-left: auto;
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
}

.nav-toggle i {
  font-size: 1.3rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-left: auto;
}

.nav-links ul {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  list-style: none;
}

.nav-link {
  position: relative;
  padding: 0.25rem 2px;
  color: var(--color-text-muted);
  font-weight: 500;
}

.nav-link:hover {
  color: var(--color-text);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -4px;
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background: var(--gradient-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--transition);
}

.nav-link.active {
  color: var(--color-text);
}

.nav-link.active::after,
.nav-link:hover::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
}

@media (max-width: 860px) {
  .nav-toggle {
    display: inline-flex;
  }

  .nav-links {
    position: absolute;
    top: var(--header-height);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-md);
    padding: var(--space-lg) clamp(0.75rem, 1.5vw, 1.5rem) var(--space-xl);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
  }

  .nav-links--open {
    display: flex;
  }

  .nav-links ul {
    flex-direction: column;
    align-items: stretch;
    gap: var(--space-sm);
  }

  .nav-link {
    display: block;
    padding-block: var(--space-sm);
  }

  .nav-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .nav-contact {
    justify-content: center;
  }
}
</style>
