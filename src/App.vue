<template>
  <div id="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  margin: 0;
  background-color: #f4f6f8; /* Un color de fondo neutro y claro */
  display: flex;
  justify-content: center;
  align-items: flex-start; /* Alinea al inicio para formularios largos */
  min-height: 100vh;
  padding-top: 40px; /* Espacio arriba */
  box-sizing: border-box;
}

#app-container {
  width: 100%;
}

/* Estilos para los formularios */
.auth-form-container {
  background-color: white;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 420px;
  margin: 0 auto; /* Centrar horizontalmente */
  text-align: center;
}

.auth-form-container h1 {
  color: #2E7D32; /* Verde oscuro para títulos */
  margin-bottom: 30px; /* Más espacio */
  font-size: 24px; /* Tamaño de fuente del título */
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 8px; /* Un poco más de espacio */
  color: #333; /* Color de texto más oscuro para mejor contraste */
  font-weight: 600; /* Un poco más de peso */
  font-size: 14px;
}

.form-group input[type="text"],
.form-group input[type="email"],
.form-group input[type="password"] {
  width: 100%;
  padding: 12px 15px; /* Un poco más de padding */
  border: 1px solid #d1d5db; /* Borde más sutil */
  border-radius: 6px; /* Bordes más redondeados */
  box-sizing: border-box;
  font-size: 16px;
}

.form-group input[type="text"]:focus,
.form-group input[type="email"]:focus,
.form-group input[type="password"]:focus {
  border-color: #4CAF50; /* Verde al enfocar */
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2); /* Sombra sutil al enfocar */
  outline: none;
}


.btn-submit {
  background-color: #4CAF50; /* Verde principal */
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  transition: background-color 0.2s ease-in-out;
  margin-top: 10px; /* Espacio antes del botón */
}

.btn-submit:hover {
  background-color: #388E3C; /* Verde más oscuro al pasar el mouse */
}

.auth-link {
  margin-top: 25px; /* Más espacio */
  font-size: 14px;
  color: #555;
}

.auth-link a {
  color: #2E7D32; /* Verde para enlaces */
  text-decoration: none;
  font-weight: 600;
}

.auth-link a:hover {
  text-decoration: underline;
}

.error-message {
  color: #D32F2F; /* Rojo para errores */
  background-color: #FFEBEE; /* Fondo rojo claro para errores */
  border: 1px solid #D32F2F;
  padding: 10px;
  border-radius: 4px;
  font-size: 0.9em;
  margin-bottom: 15px; /* Espacio debajo del mensaje de error */
  text-align: left;
}
</style>