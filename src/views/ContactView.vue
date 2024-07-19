<template>
    <div class="contact">
      <h1>Información de Contacto</h1>
      <button @click="goHome" class="home-button">Ir al Inicio</button>
    </div>
    <form @submit.prevent="validationSubmit" class="box-contact">
      <label>Nombre</label>
      <input v-model="name" type="text" required>
      <label>Correo</label>
      <input v-model="email" type="email" required>
      <label>Fono</label>
      <input v-model="phone" id="number" type="number" required>
      <label>Mensaje</label>
      <input v-model="message" id="message" type="text" required>
      <button id="submit" type="submit">Enviar Mensaje</button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    },
    methods: {
      validationSubmit() {
        if (this.name && this.email && this.phone && this.message) {
          alert('Mensaje enviado correctamente');
        } else {
          alert('Por favor, completa todos los campos');
        }
      },
      goHome() {
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
    margin-top: 120px;
  }
  .box-contact {
    display: flex;
    flex-direction: column;
    width: 500px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 100px;
    border: 1px solid #212121;
  }
  label {
    text-align: left;
    margin-top: 5px;
    margin-left: 3px;
    margin-bottom: 5px;
    font-weight: bold;
}

.home-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}
#submit {
    width: 50%;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
  }
  #message {
    height: 120px;
  }
  </style>
  