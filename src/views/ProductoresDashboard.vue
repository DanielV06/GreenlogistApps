<template>
  <div class="dashboard-container">
    <aside class="sidebar">
      <h2>Panel del Productor</h2>
      <ul>
        <li><router-link to="/dashboard">Inicio</router-link></li>
        <li><router-link to="/registrar-producto">Registrar Producto</router-link></li>
        <li><router-link to="/dashboard/solicitar-transporte">Solicitar Transporte</router-link></li>
        <li><router-link to="/panel-estadisticas">Panel de Estadísticas</router-link></li>
        <li><router-link to="/perfil">Perfil y Visibilidad Pública</router-link></li>
      </ul>
    </aside>

    <div class="main-content">
      <h1>Bienvenido al Panel del Productor</h1>
      <p>Aquí puedes gestionar tus productos y solicitudes.</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.dashboard-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  background-color: #2e7d32;
  color: white;
  padding: 1rem;
  width: 200px;
  display: flex;
  flex-direction: column;
}

.sidebar h2 {
  margin-bottom: 1rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li {
  margin-bottom: 0.5rem;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.sidebar ul li a:hover {
  text-decoration: underline;
}

.main-content {
  flex-grow: 1;
  padding: 2rem;
}
</style>

