import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Profile from '@/views/profile/index.vue'
import Login from '@/views/profile/Login.vue'
import Setting from '@/views/profile/Setting.vue'
import Bank from '@/views/bank/index.vue'
import Sort from '@/views/bank/sort/index.vue'
import Single from '@/views/bank/sort/Single.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/bank',
      name: 'bank',
      component: Bank
    },
    // 专项练习
    {
      path: '/sort',
      name: 'sort',
      component: Sort
    },
    {
      path: '/single',
      name: 'single',
      component: Single
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
