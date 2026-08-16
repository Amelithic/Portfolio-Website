<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
import BlogNavbar from '@/blog/components/BlogNavbar.vue'
import ProjectsNavbar from '@/projects/components/ProjectsNavbar.vue'
import Footer from '@/components/Footer.vue'

const route = useRoute()

const navbar = computed(() => {
  switch (route.meta.navbar) {
    case 'blog':
      return BlogNavbar
    case 'projects':
      return ProjectsNavbar
    default:
      return Navigation
  }
})
</script>

<template>
  <div class="app-shell" :class="{ 'blog-theme': route.meta.navbar === 'blog' }">
    <component :is="navbar" />
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </Transition>
      </RouterView>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-shell {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background:
    radial-gradient(1100px 600px at 85% -10%, color-mix(in srgb, var(--color-accent-3) 22%, transparent), transparent 60%),
    radial-gradient(900px 500px at -10% 25%, color-mix(in srgb, var(--color-accent) 16%, transparent), transparent 55%),
    var(--color-bg);
}

.app-main {
  flex: 1;
}
</style>
