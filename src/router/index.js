import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue'; // Importa tu componente Dashboard
import Inicio from '@/views/Home.vue'
import Questions from '@/views/Questions.vue'

const routes = [
    {
        path: '/',
        name: 'Inicio',
        component: Inicio,
    },
    {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/questions',
    props: true,
    name: 'Questions',
    component: Questions,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

