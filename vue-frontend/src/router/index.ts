import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/MainLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/add',
          meta: { auth: true },
          component: () => import('../views/AddSpellbookView.vue'),
        },
      ]
    },
    // {
    //   path: '/login',
    //   component: () => import('../views/LoginView.vue')
    // },
    // {
    //   path: '/register',
    //   component: () => import('../views/RegisterView.vue')
    // },
  ]
})


router.beforeEach((to: any, from: any, next: any) => {
  const auth = useAuthStore();
  if (to.meta.auth && !auth.isAuthenticated) {
    next({ name: 'home' })
  } else {
    next()
  }
})

export default router
