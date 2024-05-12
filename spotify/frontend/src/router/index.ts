import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth.store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { auth: true },
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        { path: '', name: 'home_view', meta: { auth: true }, component: () => import('../views/HomeView.vue') },
        { path: '', name: 'play_track', meta: { auth: true }, component: () => import('../views/HomeView.vue') },
        { path: '/rooms', name: 'rooms', meta: { auth: true }, component: () => import('../views/ChatRoomsView.vue') },
      ]
    },
    {
      path: '/login',
      name: 'login',
      meta: { auth: false },
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { auth: false },
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/NotFoundView.vue')
    }
  ]
})

router.beforeEach((to: any, from: any, next: any) => {
  const auth = useAuthStore();
  if (to.meta.auth && !auth.isAuthenticated) {
    next({ name: 'login' })
  } else if (!to.meta.auth && auth.isAuthenticated) {
    next({ name: 'home_view' })
  } else {
    next()
  }
})

export default router
