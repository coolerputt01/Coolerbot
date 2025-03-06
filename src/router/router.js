import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue'; // Use '@' to reference 'src'

const routes = [
  { path: '/', component: HomeView },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
