import Vue from "vue";
import VueRouter from "vue-router";
import frontendPages from "@/pages/front";
import adminPages from "@/pages/admin";
import FrontRoutes from "./FrontRoutes";
import login from "@/pages/admin/login";
import AuthRoutes from "./AdminRoutes";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: frontendPages,
    children: FrontRoutes,
  },

  {
    path: "/admin/login",
    component: login,
    name: "admin.login",
  },

  {
    path: "/admin",
    component: adminPages,
    name: "admin",
    base: "/admin",
    meta: { auth: true },
    children: AuthRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
