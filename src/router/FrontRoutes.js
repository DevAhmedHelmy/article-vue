import Home from "@/pages/front/Home";
import about from "@/pages/front/about";
import contact from "@/pages/front/contact";
import login from "@/pages/front/auth/login";
import register from "@/pages/front/auth/register";
import showArticle from "@/pages/front/articles/show";
import editArticle from "@/pages/front/articles/edit";
import createArticle from "@/pages/front/articles/create";
export default [
  {
    path: "/",
    name: "Home",
    components: {
      frontendPages: Home,
    },
  },
  {
    path: "articles/show/:id",
    name: "show-article",
    components: {
      frontendPages: showArticle,
    },
  },
  {
    path: "articles/edit/:id",
    name: "edit-article",
    components: {
      frontendPages: editArticle,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "create/articles",
    name: "create-article",
    components: {
      frontendPages: createArticle,
    },
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "about",
    name: "about",
    components: {
      frontendPages: about,
    },
  },
  {
    path: "contact",
    name: "contact",
    components: {
      frontendPages: contact,
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
    path: "/register",
    components: {
      frontendPages: register,
    },

    name: "register",
  },
];
