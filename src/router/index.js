import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue'; 
import RegisterView from '../views/RegisterView.vue'; 
import DashboardView from '../views/DashboardView.vue'; 

const routes = [
  {
    path: '/',
    redirect: '/login',
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
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('currentUser');
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !loggedIn) {
    next('/login');
  } else if ((to.name === 'Login' || to.name === 'Register') && loggedIn && requiresAuth) {
    // Si el usuario está logueado e intenta ir a Login o Register,
    next('/dashboard');
  } else if ((to.name === 'Login' || to.name === 'Register') && loggedIn) {
    // Si el usuario ya está logueado e intenta ir a Login o Register, redirige al dashboard
    next('/dashboard');
  }
  else {
    next();
  }
});

export default router;