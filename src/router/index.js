import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/login/index.vue')
    },{
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/index.vue')
    }
  ]
})

export default router
