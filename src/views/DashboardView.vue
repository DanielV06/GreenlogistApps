<template>
  <div class="dashboard-container">
    <h1>Bienvenido{{ userName ? ', ' + userName : '' }}!</h1>
    <p>Este es tu panel de control.</p>
    <button @click="handleLogout" class="btn-logout">Cerrar Sesión</button>
  </div>
</template>

<script setup> // Puedes mantener lang="ts" si así está configurado tu proyecto, o quitarlo si es solo JS
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const userName = ref('');

onMounted(() => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    // Intenta obtener el nombre completo, si no, el email.
    userName.value = currentUser.fullName || currentUser.email || '';
  }
});

const handleLogout = () => {
  localStorage.removeItem('currentUser');
  router.push('/login');
};
</script>

<style scoped>
.dashboard-container {
  text-align: center;
  padding: 20px;
  background-color: #e8f5e9; /* Un fondo verde muy claro */
  border-radius: 8px;
  max-width: 600px;
  margin: 40px auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); /* Sombra sutil */
}

.dashboard-container h1 {
  color: #2E7D32; /* Mismo verde que los títulos de formularios */
  margin-bottom: 15px;
}

.dashboard-container p {
  color: #333;
  font-size: 16px;
  margin-bottom: 25px;
}

.btn-logout {
  background-color: #d32f2f; /* Rojo para logout */
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 6px; /* Consistente con otros botones */
  cursor: pointer;
  font-size: 14px; /* Un poco más pequeño o igual que otros botones */
  font-weight: bold;
  transition: background-color 0.2s ease-in-out;
}
.btn-logout:hover {
  background-color: #c62828; /* Rojo más oscuro al pasar el mouse */
}
</style>