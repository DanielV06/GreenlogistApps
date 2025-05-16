<template>
  <div class="container">
    <h1>ESTADÍSTICAS</h1>

    <div class="content">
      <div class="stats-grid">
        <div class="stat-card">
          <h3>Ventas Totales</h3>
          <p># Ventas</p>
        </div>
        <div class="stat-card">
          <h3>Productos Vendidos</h3>
          <p># kg en Productos</p>
        </div>
      </div>

      <div class="total-earned">
        <p>Total ganado: S/. #</p>
      </div>

      <div class="transport">
        <h3>Transportes Solicitados</h3>
        <p># Pedidos</p>
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
