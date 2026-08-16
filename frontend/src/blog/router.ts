import type { RouteRecordRaw } from 'vue-router'

export const blogRoutes: RouteRecordRaw[] = [
  {
    path: '/blog',
    name: 'blog-home',
    component: () => import('@/blog/views/BlogHomeView.vue'),
    meta: { navbar: 'blog' },
  },
  {
    path: '/blog/posts',
    name: 'blog-posts',
    component: () => import('@/blog/views/BlogAllPostsView.vue'),
    meta: { navbar: 'blog' },
  },
  {
    path: '/blog/posts/:slug',
    name: 'blog-post',
    component: () => import('@/blog/views/BlogPostView.vue'),
    meta: { navbar: 'blog' },
  },
]
