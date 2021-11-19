import Home from "@/pages/front/Home";
import login from "@/pages/front/login";
import showArticle from "@/pages/front/showArticle";
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
    path: "/login",
    components: {
      frontendPages: login,
    },

    name: "login",
  },
];
