import { createRouter, createWebHistory } from "vue-router";
import HomePages from "../pages/HomePages.vue";
import Register from "../pages/Register.vue";
import Submit_work from "../pages/Submit_work.vue"

const routes = [
  { path: "/", component: HomePages },
  { path: "/register", component: Register },
  { path: "/work_submition", component:  Submit_work},
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to,from,savedPosition){
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
});

export default router;
