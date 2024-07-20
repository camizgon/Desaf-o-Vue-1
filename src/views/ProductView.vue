<template>
  <div class="product">
    <h1>Nuestros Productos</h1>
    <button @click="goHome" class="home-button">Ir al Inicio</button>
    <Card v-bind="producto" />
      <!-- :nombre="product.nombre"
      :descripcion="product.descripcion"
      :precio="product.precio"
      :cantidad="product.cantidad" -->
   
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'ProductView',
  props:["producto"],
  components: {
    Card,
  },
  data(){
    return {
      product:{
        nombre: "Desayuno",
        descripcion: "Blalala",
        precio: 5000,
        cantidad: 1,
      }
    }
  },
  methods: {
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

.home-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.home-button:hover {
  background-color: #ff96c5;
}

</style>
