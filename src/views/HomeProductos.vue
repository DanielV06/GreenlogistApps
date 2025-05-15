<template>
  <div class="home">
    <header>
      <h1>Productos Ecológicos</h1>
      <div class="busqueda">
        <input type="text" placeholder="Buscar productos..." />
        <button>Buscar</button>
      </div>
    </header>

    <section class="productos">
      <div class="producto-card" v-for="producto in productos" :key="producto.id">
        <img :src="producto.imagen" :alt="producto.nombre" />
        <h3>{{ producto.nombre }}</h3>
        <p>Precio: {{ producto.precio }}</p>
        <button>Ver Detalles</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeProductos',
  data() {
    return {
      productos: [
        { id: 1, nombre: 'Tomates Orgánicos', precio: 'S/. 20.00', imagen: 'producto1.jpg' },
        { id: 2, nombre: 'Manzanas Ecológicas', precio: 'S/. 15.00', imagen: 'producto2.jpg' }
      ]
    };
  }
};
</script>
