import Home from "@/pages/frontend/Home";
import login from "@/pages/frontend/login";
import register from "@/pages/frontend/register";
import cart from "@/pages/frontend/cart";
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
  {
    path: "register",
    components: {
      frontendPages: register,
    },

    name: "register",
  },
  {
    path: "cart",
    meta: { auth: true },
    components: {
      frontendPages: cart,
    },

    name: "cart",
  },
];
