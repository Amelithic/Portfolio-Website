<script setup lang="ts">
import { siteCopy } from '@/content/siteCopy'
</script>

<template>
  <div class="contacts">
    <section class="contacts-hero">
      <div class="container">
        <h1>{{ siteCopy.contacts.title }}</h1>
        <p class="contacts-lede">
          {{ siteCopy.contacts.lede }}
        </p>
      </div>
    </section>

    <div class="container contacts-body">
      <h2>{{ siteCopy.contacts.socialsHeading }}</h2>
      <ul class="contacts-grid">
        <li v-for="social in siteCopy.contacts.socials" :key="social.label" class="contacts-card">
          <div class="contacts-card-icon">
            <i :class="['ph', social.icon]" aria-hidden="true"></i>
          </div>
          <div>
            <h3>{{ social.label }}</h3>
            <p>{{ social.note }}</p>
          </div>
        </li>
      </ul>

      <h2>{{ siteCopy.contacts.platformsHeading }}</h2>
      <ul class="contacts-grid">
        <li v-for="platform in siteCopy.contacts.platforms" :key="platform.label" class="contacts-card">
          <div class="contacts-card-icon">
            <i :class="['ph', platform.icon]" aria-hidden="true"></i>
          </div>
          <div>
            <h3>{{ platform.label }}</h3>
            <p>{{ platform.note }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.contacts-hero {
  padding-block: var(--space-2xl) var(--space-xl);
  border-bottom: 1px solid var(--color-border);
  background: var(--color-bg-elevated);
}

.contacts-lede {
  margin-top: var(--space-md);
  max-width: 56ch;
  color: var(--color-text-muted);
}

.contacts-body {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding-block: var(--space-3xl);
}

.contacts-body > h2 {
  margin-top: var(--space-lg);
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: var(--space-md);
  list-style: none;
}

.contacts-card {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-lg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  transition:
    border-color var(--transition-fast),
    transform var(--transition-fast),
    box-shadow var(--transition-fast);
}

.contacts-card:hover {
  border-color: var(--color-border-strong);
  transform: translateY(-2px);
  box-shadow: var(--shadow-card);
}

.contacts-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
  border-radius: var(--radius-md);
  background: color-mix(in srgb, var(--color-accent) 12%, transparent);
  border: 1px solid var(--color-border);
  color: var(--color-accent);
}

.contacts-card-icon i {
  font-size: 1.5rem;
}

.contacts-card h3 {
  font-size: 1rem;
}

.contacts-card p {
  font-size: 0.85rem;
  color: var(--color-text-muted);
}
</style>
