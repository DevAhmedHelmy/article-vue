import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./Store/Store";
import axiosInstance from "@/core/plugins/axios";

import "@/core/plugins/vueUses";
require("@/core/plugins/globalFunctions");
Vue.config.productionTip = false;
Vue.prototype.http = axiosInstance;
new Vue({
  router,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
