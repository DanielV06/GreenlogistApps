<template>
  <div class="auth-form-container">
    <h1>Crear Cuenta</h1>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="fullName">Nombre completo</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required />
      </div>
      <div class="form-group">
        <label for="confirmPassword">Confirmar contraseña</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword" required />
      </div>
      <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      <button type="submit" class="btn-submit">Registrarse</button>
    </form>
    <div class="auth-link">
      ¿Ya tienes cuenta? <router-link to="/login">Inicia sesión</router-link>
    </div>
  </div>
</template>

