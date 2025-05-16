import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/ProductoresDashboard.vue';
import RegistroProducto from '@/views/RegistroProducto.vue';
import ProducerView from '@/views/perfil.vue'
import estadisticas from "@/views/estadisticas.vue";
import perfil from "@/views/perfil.vue";
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
  },
  { path: '/producer',
    name: 'Producer',
    component: ProducerView
  },
  {
    path: '/panel-estadisticas',
    name: 'estadisticas',
    component: estadisticas,
    meta: {
      title: 'Estadísticas'
    }
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: perfil,
    meta: {
      title: 'Perfil del Productor'
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

