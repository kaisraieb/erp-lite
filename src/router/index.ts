import AuthLayout from "@/layouts/AuthLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      component: () => import("@/layouts/AuthLayout.vue"),
      redirect: "auth/login",
      children: [
        {
          path: "login",
          component: () => import("@/views/auth/LoginView.vue"),
          name: "login",
        },
        {
          path: "signup",
          component: () => import("@/views/auth/SignUpView.vue"),
          name: "signup",
        },
      ],
    },
  ],
});

export default router;
