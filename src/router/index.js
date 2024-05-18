import Home from '../views/MyHome.vue';
import AnimeContentDetails from '../views/AnimeContentDetail.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'MyHome',
    component: Home,
  },
  {
    path: '/anime-content-details/:id',
    name: 'AnimeContentDetails',
    component: AnimeContentDetails,
    meta: {
        auth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

