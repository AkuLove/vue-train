import MainPage from '../pages/MainPage.vue';
import PostsPage from '../pages/PostsPage.vue';
import PostsPageStore from '../pages/PostsPageStore.vue';
import PostItemPage from '../pages/PostItemPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/posts',
    component: PostsPage,
  },
  {
    path: '/posts/:id',
    component: PostItemPage,
  },
  {
    path: '/store',
    component: PostsPageStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
