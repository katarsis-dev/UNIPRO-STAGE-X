import { createRouter, createWebHistory } from "vue-router";
import HomePages from "../pages/HomePages.vue";
import Register from "../components/Register.vue";
import Submit_work from "../components/Submit_work.vue"

const routes = [
  { path: "/", component: HomePages },
  { path: "/register", component: Register },
  { path: "/work_submition", component:  Submit_work},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
