import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Members from "@/views/Members.vue";
import Register from "@/views/Register.vue";
import Service from "@/views/Service.vue";
import Time from "@/views/Time.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
    },
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/members",
      component: Members,
      name: "members",
    },
    {
      path: "/service",
      component: Service,
      name: "service",
    },
    {
      path: "/service/time",
      component: Time,
      name: "time",
    },
    {
      path: "/register",
      component: Register,
      name: "register",
    },
  ],
});

export default router;
