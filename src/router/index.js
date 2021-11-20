import Vue from "vue";
import VueRouter from "vue-router";
import frontendPages from "@/pages/front";

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

export default router;
