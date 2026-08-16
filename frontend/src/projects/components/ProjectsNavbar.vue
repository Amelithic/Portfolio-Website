<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import type { NavLink } from '@/components/Navigation.vue'
import { siteConfig } from '@/config/site'
import { siteCopy } from '@/content/siteCopy'

const router = useRouter()
const search = ref('')
const menuOpen = ref(false)

const links: NavLink[] = [
  { label: 'Home', to: '/projects', exact: true },
  { label: 'All Projects', to: '/projects/all' },
]

function submitSearch(): void {
  const q = search.value.trim()
  void router.push({ path: '/projects/all', query: q ? { q } : {} })
}
</script>

<template>
  <Navigation :brand="siteConfig.brandName" :links="links">
    <template #leading>
      <span class="subapp-label">{{ siteCopy.nav.projects }}</span>
    </template>

    <template #after>
      <form class="nav-search" role="search" @submit.prevent="submitSearch">
        <i class="ph ph-magnifying-glass" aria-hidden="true"></i>
        <input
          v-model="search"
          type="search"
          :placeholder="siteCopy.search.projects"
          :aria-label="siteCopy.search.projectsAria"
        />
      </form>

      <div class="nav-menu">
        <button
          type="button"
          class="nav-menu-btn"
          :aria-label="siteCopy.menu.label"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        >
          <i class="ph ph-dots-three-outline" aria-hidden="true"></i>
        </button>
        <div v-show="menuOpen" class="nav-menu-dropdown">
          <button type="button" class="nav-menu-item" disabled>
            <i class="ph ph-user" aria-hidden="true"></i>
            {{ siteCopy.menu.account }}
          </button>
          <button type="button" class="nav-menu-item" disabled>
            <i class="ph ph-sign-out" aria-hidden="true"></i>
            {{ siteCopy.menu.signOut }}
          </button>
        </div>
      </div>
    </template>
  </Navigation>
</template>

<style scoped>
.subapp-label {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--color-accent);
}

.nav-search {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.85rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  color: var(--color-text-muted);
  transition:
    border-color var(--transition-fast),
    color var(--transition-fast);
}

.nav-search:focus-within {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

.nav-search input {
  width: 10rem;
  background: none;
  border: none;
  outline: none;
  color: var(--color-text);
  font-family: inherit;
  font-size: 0.9rem;
}

.nav-search input::placeholder {
  color: var(--color-text-faint);
}

.nav-menu {
  position: relative;
}

.nav-menu-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  border: 1px solid var(--color-border);
  color: var(--color-text-muted);
  transition:
    color var(--transition-fast),
    border-color var(--transition-fast);
}

.nav-menu-btn:hover {
  color: var(--color-accent);
  border-color: var(--color-accent);
}

.nav-menu-dropdown {
  position: absolute;
  top: calc(100% + 0.6rem);
  right: 0;
  display: flex;
  flex-direction: column;
  min-width: 12rem;
  padding: var(--space-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-card);
}

.nav-menu-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: var(--radius-sm);
  color: var(--color-text-muted);
  text-align: left;
}

.nav-menu-item:hover:not(:disabled) {
  color: var(--color-text);
  background: var(--color-surface-hover);
}

.nav-menu-item:disabled {
  cursor: not-allowed;
  opacity: 0.55;
}

@media (max-width: 860px) {
  .nav-search input {
    width: 100%;
  }
}
</style>
