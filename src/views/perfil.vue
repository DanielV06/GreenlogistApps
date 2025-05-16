<template>
  <div class="producer-container">
    <div class="profile-header">
      <div class="profile-image-container">
        <img 
          src="@/assets/producer-avatar.png" 
          alt="Foto de Juan Perez" 
          class="profile-image"
        >
      </div>
      
      <h1 v-if="!editing">{{ producer.name }}</h1>
      <input 
        v-else
        v-model="producer.name" 
        class="edit-input"
      >
      
      <p class="producer-title">Productor Orgánico Certificado</p>
    </div>
    
    <div class="producer-content">
      <div class="profile-details">
        <div>
          <p v-if="!editing"><strong>Descripción:</strong> {{ producer.description }}</p>
          <textarea
            v-else
            v-model="producer.description"
            class="edit-textarea"
          ></textarea>
        </div>
        
        <div>
          <p v-if="!editing"><strong>Ubicación:</strong> {{ producer.location }}</p>
          <input
            v-else
            v-model="producer.location"
            class="edit-input"
          >
        </div>
        
        <div>
          <p v-if="!editing"><strong>Teléfono:</strong> {{ producer.phone }}</p>
          <input
            v-else
            v-model="producer.phone"
            class="edit-input"
            type="tel"
          >
        </div>
        
        <div>
          <p v-if="!editing"><strong>Email:</strong> {{ producer.email }}</p>
          <input
            v-else
            v-model="producer.email"
            class="edit-input"
            type="email"
          >
        </div>
      </div>
      
      <div class="producer-buttons">
        <template v-if="!editing">
          <button @click="startEditing" class="producer-button">Editar Perfil</button>
          <router-link to="/" class="producer-button">Volver al Panel</router-link>
        </template>
        
        <template v-else>
          <button @click="saveChanges" class="producer-button save-button">Guardar Cambios</button>
          <button @click="cancelEditing" class="producer-button cancel-button">Cancelar</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProducerView',
  data() {
    return {
      editing: false,
      originalProducer: {
        name: 'Juan Perez',
        description: 'Productor de frutas orgánicas en Cusco',
        location: 'Cusco, Perú',
        phone: '+51 987 875 908',
        email: 'juanperez@greenlogist.com'
      },
      producer: {}
    }
  },
  created() {
    this.resetProducerData();
  },
  methods: {
    startEditing() {
      this.editing = true;
    },
    saveChanges() {
      console.log('Datos guardados:', this.producer);
      this.originalProducer = {...this.producer};
      this.editing = false;
      
      alert('Perfil actualizado correctamente');
    },
    cancelEditing() {
      this.resetProducerData();
      this.editing = false;
    },
    resetProducerData() {
      this.producer = {...this.originalProducer};
    }
  }
}
</script>

<style scoped>

.producer-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.profile-header {
  text-align: center;
  margin-bottom: 20px;
}

.profile-image-container {
  width: 150px;
  height: 150px;
  margin: 0 auto 15px;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid #4CAF50;
  box-shadow: 0 3px 10px rgba(0,0,0,0.2);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.producer-title {
  color: #4CAF50;
  font-weight: bold;
  margin-top: -10px;
  font-style: italic;
}

.producer-content {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.1);
}

.profile-details {
  margin-bottom: 20px;
}

.detail-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #eee;
}

.detail-icon {
  margin-right: 15px;
  font-size: 20px;
}

.detail-item p {
  margin: 0;
}

.producer-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  gap: 15px;
}

.producer-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  flex: 1;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.producer-button:hover {
  background-color: #3d8b40;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}


.edit-input, .edit-textarea {
  flex-grow: 1;
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
}

.edit-textarea {
  min-height: 80px;
  resize: vertical;
}

.save-button {
  background-color: #2196F3;
}

.save-button:hover {
  background-color: #0b7dda;
}

.cancel-button {
  background-color: #f44336;
}

.cancel-button:hover {
  background-color: #da190b;
}
</style>
