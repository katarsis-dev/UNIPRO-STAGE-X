import { createRouter, createWebHistory } from "vue-router";
import HomePages from "../pages/HomePages.vue";

const routes = [{ path: "/", component: HomePages }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
