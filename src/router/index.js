import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import img from "../assets/img/colaciones.jpg";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    props: {
      producto: {
        nombre: "Colación",
        descripcion: "papas con verduras",
        precio: 3500,
        cantidad: 1,
        imagen: img,
      }
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
