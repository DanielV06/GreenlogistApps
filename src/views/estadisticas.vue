<template>
  <div class="stats-container">
    <h1 class="stats-title">ESTADÍSTICAS</h1>
    
    <div class="stats-content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Ventas Totales</h3>
          <p># Ventas</p>
          <p>Total ganado: s/.#</p>
        </div>
        <div class="stat-card">
          <h3>Productos Vendidos</h3>
          <p># kg en Productos</p>
        </div>
        <div class="stat-card">
          <h3>Transportes Solicitados</h3>
          <p># de pedidos</p>
        </div>
      </div>

      <div class="buttons">
        <button @click="goBack">Volver al Panel</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'EstadisticasView',
  methods: {
    goBack() {
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
.stats-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center; 
}
.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}
.stat-card {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
}
.total-earned {
  margin: 20px 0;
  font-weight: bold;
  text-align: center;
}
.transport {
  margin-bottom: 20px;
}
</style>

