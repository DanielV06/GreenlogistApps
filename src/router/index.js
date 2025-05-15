import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import RegistroProducto from '@/views/RegistroProducto.vue';

const routes = [
  {
    path: '/',
    redirect: '/dashboard' // Redirige directamente al Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/registrar-producto',
    name: 'RegistroProducto',
    component: RegistroProducto
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

