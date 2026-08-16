<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import TimelineCard from '@/components/TimelineCard.vue'
import type { Experience } from '@/content/types/Experience'
import { siteCopy } from '@/content/siteCopy'

const props = withDefaults(
  defineProps<{ items: Experience[]; previewCount?: number }>(),
  { previewCount: 4 },
)

const expanded = ref(false)
const visibleItems = computed(() =>
  expanded.value ? props.items : props.items.slice(0, props.previewCount),
)

const timelineEl = ref<HTMLElement | null>(null)
const paths = ref<string[]>([])

function drawConnectors(): void {
  const container = timelineEl.value
  if (!container) return
  const cards = Array.from(container.querySelectorAll<HTMLElement>('.timeline-card'))
  if (cards.length < 2) {
    paths.value = []
    return
  }
  const containerRect = container.getBoundingClientRect()
  const next: string[] = []
  for (let i = 0; i < cards.length - 1; i++) {
    const from = cards[i].getBoundingClientRect()
    const to = cards[i + 1].getBoundingClientRect()
    const dropX = from.left + from.width / 2 - containerRect.left
    const bottomY = from.bottom - containerRect.top
    const targetX = to.left - containerRect.left
    const targetY = to.top + to.height / 2 - containerRect.top
    next.push(`M ${dropX} ${bottomY} L ${dropX} ${targetY} L ${targetX} ${targetY}`)
  }
  paths.value = next
}

function toggleExpand(): void {
  expanded.value = !expanded.value
  nextTick(drawConnectors)
}

let resizeObserver: ResizeObserver | null = null

onMounted(() => {
  drawConnectors()
  window.addEventListener('resize', drawConnectors)
  if (typeof ResizeObserver !== 'undefined' && timelineEl.value) {
    resizeObserver = new ResizeObserver(drawConnectors)
    resizeObserver.observe(timelineEl.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', drawConnectors)
  resizeObserver?.disconnect()
})
</script>

<template>
  <div ref="timelineEl" class="timeline">
    <svg v-if="paths.length" class="timeline-lines" aria-hidden="true">
      <defs>
        <marker
          id="timeline-arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
      </defs>
      <path v-for="(d, index) in paths" :key="index" :d="d" />
    </svg>
    <div class="timeline-grid">
      <TimelineCard
        :experience="item"
        v-for="(item, index) in visibleItems"
        :key="item.id"
        :class="index % 2 === 0 ? 'timeline-item--left' : 'timeline-item--right'"
        class="timeline-item"
        :style="{ gridRow: index + 1, gridColumn: index % 2 === 0 ? 1 : 2 }"
      />
    </div>
    <button
      v-if="items.length > previewCount"
      type="button"
      class="btn timeline-toggle"
      :aria-expanded="expanded"
      @click="toggleExpand"
    >
      {{ expanded ? siteCopy.ui.seeLess : siteCopy.ui.seeMore }}
      <i :class="expanded ? 'ph ph-caret-up' : 'ph ph-caret-down'" aria-hidden="true"></i>
    </button>
  </div>
</template>

<style scoped>
.timeline {
  position: relative;
  max-width: 920px;
  margin-inline: auto;
}

.timeline-lines {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.timeline-lines path {
  fill: none;
  stroke: var(--color-accent);
  stroke-width: 2;
  stroke-linejoin: miter;
  marker-end: url(#timeline-arrow);
}

.timeline-lines marker path {
  fill: var(--color-accent);
}

.timeline-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-xl) 0;
}

.timeline-item {
  max-width: 400px;
  justify-self: center;
}

.timeline-toggle {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: var(--space-xl) auto 0;
}

@media (max-width: 760px) {
  .timeline {
    max-width: none;
  }

  .timeline-lines {
    display: none;
  }

  .timeline-grid {
    display: block;
  }

  .timeline-item {
    max-width: none;
    margin-left: 1.75rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0.6rem;
    width: 2px;
    background: var(--color-border-strong);
  }

  .timeline-item::before {
    content: '';
    position: absolute;
    top: 1.15rem;
    left: -1.15rem;
    width: 0.7rem;
    height: 0.7rem;
    margin-left: -0.35rem;
    border: 2px solid var(--color-bg);
    border-radius: var(--radius-full);
    background: var(--color-accent);
  }
}
</style>
