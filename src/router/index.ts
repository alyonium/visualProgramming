import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/Home.vue';
import Lab1 from '@/views/Lab1.vue';
import Lab2 from '@/views/Lab2.vue';
import Browser from '@/components/Lab1/Browser.vue';
import Colors from '@/components/Lab1/Colors.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/lab1',
    name: 'Lab1',
    component: Lab1,
  },
  {
    path: '/lab1/browser',
    name: 'Browser',
    component: Browser,
  },
  {
    path: '/lab1/colors',
    name: 'Colors',
    component: Colors,
  },
  {
    path: '/lab2',
    name: 'Lab2',
    component: Lab2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
