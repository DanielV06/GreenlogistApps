import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirigir la raíz a login por defecto
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true }, // Marcaremos esta ruta como que requiere autenticación
  },
  // Posible ruta para el panel del productor 
  // {
  //   path: '/productor/panel',
  //   name: 'ProductorPanel',
  //   component: () => import('../views/ProductorPanelView.vue'), // Ejemplo
  //   meta: { requiresAuth: true }
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Guard de Navegación (Navigation Guard)
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('currentUser'); // Simulación de sesión

  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Si la ruta requiere autenticación y no hay usuario logueado, redirige a login
    next('/login');
  } else if ((to.name === 'Login' || to.name === 'Register') && loggedIn) {
    // Si el usuario ya está logueado e intenta ir a Login o Register, redirige al dashboard
    next('/dashboard');
  }
  else {
    next(); // Continúa con la navegación
  }
});

export default router;