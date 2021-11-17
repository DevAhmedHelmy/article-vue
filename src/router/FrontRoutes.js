import Home from "@/pages/front/Home";
import login from "@/pages/front/login";

export default [
  {
    path: "/",
    name: "Home",
    components: {
      frontendPages: Home,
    },
  },
  {
    path: "/login",
    components: {
      frontendPages: login,
    },

    name: "login",
  },
];
