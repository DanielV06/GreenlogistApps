<template>
  <div class="form-container">
    <h1>Registrar Nuevo Producto</h1>
    <form @submit.prevent="registrarProducto">
      <input v-model="producto.nombre" type="text" placeholder="Nombre del Producto" required />
      <input v-model="producto.cantidad" type="number" placeholder="Cantidad disponible" required />
      <input v-model="producto.unidad" type="text" placeholder="Unidad de medida (kg, unidades, etc.)" required />
      <input v-model="producto.precio" type="number" step="0.01" placeholder="Precio por unidad" required />
      <textarea v-model="producto.descripcion" placeholder="Descripción del Producto" rows="4" required></textarea>
      <button type="submit">Registrar</button>
    </form>
    <router-link class="back-link" to="/dashboard">Volver al Panel</router-link>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const producto = reactive({
  nombre: "",
  cantidad: 0,
  unidad: "",
  precio: 0.0,
  descripcion: ""
});

const registrarProducto = () => {
  if (producto.nombre && producto.cantidad && producto.unidad && producto.precio && producto.descripcion) {
    // Aquí podrías integrar la lógica para enviar el producto a una base de datos.
    alert(`Producto ${producto.nombre} registrado exitosamente.`);
    router.push("/dashboard");
  } else {
    alert("Por favor, complete todos los campos.");
  }
};
</script>
}

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f1f8e9;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form-container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 150, 0, 0.2);
  width: 350px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  color: #2e7d32;
}

form input,
form textarea {
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #cccccc;
  border-radius: 8px;
}

button {
  width: 100%;
  padding: 0.8rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #388e3c;
}

.back-link {
  display: block;
  margin-top: 1rem;
  color: #2e7d32;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
