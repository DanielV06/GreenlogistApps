<template>
  <div class="auth-form-container">
    <h1>Iniciar Sesión</h1>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit" class="btn-submit">Ingresar</button>
    </form>
    <div class="auth-link">
      ¿No tienes cuenta? <router-link to="/register">Regístrate aquí</router-link>
    </div>
  </div>
</template>

