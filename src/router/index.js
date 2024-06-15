import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '@/views/profile/index.vue'
import Login from '@/views/profile/Login.vue'
import Setting from '@/views/profile/Setting.vue'
 
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
