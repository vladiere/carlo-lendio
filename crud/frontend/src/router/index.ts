import { createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '../stores/auth.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/create',
          name: 'create',
          meta: { auth: true },
          component: () => import('../views/WriteArticleView.vue'),
        },
        {
          path: '/article',
          name: 'my article',
          meta: { auth: true },
          component: () => import('../views/MyArticleView.vue'),
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not found',
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})


router.beforeEach((to: any, from: any, next: any) => {
  const auth = useAuthStore();

  if (to.meta.auth && !auth.isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
})

export default router
