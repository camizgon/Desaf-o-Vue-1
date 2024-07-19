<template>
  <div class="product">
    <h1>Productos</h1>
    <button @click="goHome" class="home-button">Ir al Inicio</button>
  </div>


</template>

<script>
export default {
  name: 'ProductView',
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

  .home-button{
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }

</style>