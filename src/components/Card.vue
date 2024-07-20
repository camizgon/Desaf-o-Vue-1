<template lang="">
  <div class="product">
    <div class="card">
      <img :src="imagen" class="card-img-top" :alt="nombre" />
      <div class="card-body">
        <h5 class="card-title fw-bold">{{ nombre }}</h5>
        <p class="card-text">{{ descripcion }}</p>
        <p>Precio: {{ precio }}</p>
        <hr width="">
        <p>Cantidad: {{ cantidad }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Ver mas</a>
        <a href="#" class="card-link">Comprar</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    nombre: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    imagen: {
      type: String
    }
  }
};
</script>

<style>
.card {
  margin: 20px auto;
  padding: 10px;
  max-width: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.card-body {
  padding: 15px;
  text-align: left;
}

.card-title {
  font-size: 1.25rem;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  margin-bottom: 10px;
}

.card-link {
  font-size: 0.875rem;
  color: #007bff;
}

.card-link:hover {
  text-decoration: underline;
}

li {
  text-align: left;
}
</style>
