/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '*.mdx' {
  import type { Component } from 'vue'
  const component: Component
  export default component
  export const frontmatter: Record<string, unknown>
}
