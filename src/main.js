import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./Store/Store";

import axios from "axios";
import "@/core/plugins/vueUses";
require("@/core/plugins/globalFunctions");
Vue.config.productionTip = false;

axios.defaults.baseURL = "http://localhost:8000/api/";

new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
