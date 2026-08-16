import { computed, ref } from 'vue'
import { siteConfig } from '@/config/site'

export type Theme = 'dark' | 'light'

const STORAGE_KEY = 'theme'
const DEFAULT_THEME: Theme = siteConfig.defaultTheme

function getInitialTheme(): Theme {
  if (typeof window !== 'undefined') {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark' || stored === 'light') return stored
  }
  return DEFAULT_THEME
}

function applyTheme(next: Theme): void {
  if (typeof document !== 'undefined') {
    document.documentElement.dataset.theme = next
  }
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next)
  }
}

const theme = ref<Theme>(getInitialTheme())
applyTheme(theme.value)

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function setTheme(next: Theme): void {
    theme.value = next
    applyTheme(next)
  }

  function toggleTheme(): void {
    setTheme(isDark.value ? 'light' : 'dark')
  }

  return { theme, isDark, setTheme, toggleTheme }
}
