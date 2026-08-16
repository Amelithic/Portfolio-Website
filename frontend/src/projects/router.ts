import type { RouteRecordRaw } from 'vue-router'

export const projectRoutes: RouteRecordRaw[] = [
  {
    path: '/projects',
    name: 'projects-home',
    component: () => import('@/projects/views/ProjectsHomeView.vue'),
    meta: { navbar: 'projects' },
  },
  {
    path: '/projects/all',
    name: 'projects-all',
    component: () => import('@/projects/views/ProjectsAllView.vue'),
    meta: { navbar: 'projects' },
  },
  {
    path: '/projects/project/:slug',
    name: 'project-post',
    component: () => import('@/projects/views/ProjectPostView.vue'),
    meta: { navbar: 'projects' },
  },
]
