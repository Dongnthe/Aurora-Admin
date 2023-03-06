import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('@/views/login/index.vue'), // 注意这里要带上 文件后缀.vue
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router