import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Profile.vue';
import Chat from '../views/Chat.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/chat/:name',
    name: 'Chat',
    component: Chat,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
