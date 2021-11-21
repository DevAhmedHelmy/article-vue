import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import Auth from "./Auth";
import Article from "./Article";

export const store = new Vuex.Store({
  state: {},
  //
  // -----------------------------------------------------------------
  mutations: {},
  // -----------------------------------------------------------------
  getters: {},
  // -----------------------------------------------------------------

  modules: {
    Auth: Auth,
    Article: Article,
  },
});
