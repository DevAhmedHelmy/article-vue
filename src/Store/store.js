import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex);

import Auth from "./Auth";
import Article from "./Article";

export const store = new Vuex.Store({
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },
  //
  // -----------------------------------------------------------------
  mutations: {
    setCurrentUser(state, userData) {
      state.user = userData;
    },
    setAuthToken(state, token) {
      state.token = token;
    },
    destroyToken(state) {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  // -----------------------------------------------------------------
  getters: {
    isAuthenticated: (state) => !!state.user,
    StateUser: (state) => state.user,
    loggedin(state) {
      if (state.token != null) {
        if (state.token != undefined) {
          if (state.token != "") {
            return true;
          }
        }
      }
      state.token = null;
      return false;
    },
    getToken(state) {
      return state.token;
    },
  },
  // -----------------------------------------------------------------

  modules: {
    Auth: Auth,
    Article: Article,
  },
});
