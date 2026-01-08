import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/layout/index.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../views/home/index.vue'),
      },
      {
        path: 'about',
        name: 'about',
        component: () => import('../views/about/index.vue'),
      },
      {
        path: 'breakpoints',
        name: 'breakpoints',
        component: () => import('../views/breakpoints/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/not-found/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    return { top: 0, left: 0 };
  },
});

export default router;
