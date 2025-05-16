<template>
  <div class="producer-container">
    <h1>Nombre del Productor</h1>
    
    <div class="producer-content">
      <p><strong>[Descripción]</strong></p>
      <p>Ubicación: []</p>
      <p>Teléfono: []</p>
      <p>Email: []</p>
      
      <div class="producer-buttons">
        <button class="producer-button">Editar Perfil</button>
        <router-link to="/" class="producer-button">Volver al Panel</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProducerView'
}
</script>

<style scoped>
.producer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.producer-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.producer-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 15px;
}

.producer-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  flex: 1;
}

.producer-button:hover {
  background-color: #45a049;
}
</style>
