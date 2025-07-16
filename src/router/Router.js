import { createRouter, createWebHistory } from "vue-router";
import HomePages from "../pages/HomePages.vue";
import AboutPages from "../pages/AboutPages.vue";

const routes = [
  { path: "/", component: HomePages },
  { path: "/about", component: AboutPages },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
