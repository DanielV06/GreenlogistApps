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
