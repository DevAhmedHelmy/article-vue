import Vue from "vue";
import VueRouter from "vue-router";
import frontendPages from "@/pages/front";
import { store } from "../Store/Store";
import FrontRoutes from "./FrontRoutes";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: frontendPages,
    children: FrontRoutes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!token) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next(); // make sure to always call next()!
  }
});

export default router;
