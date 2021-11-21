import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

import Auth from "./Auth";
import Article from "./Article";

export const store = new Vuex.Store({
  state: {
    token: "",
    user: "",
  },
  // -----------------------------------------------------------------
  mutations: {
    setAuthToken(state, token) {
      state.token = token;
    },

    setCurrentUser(state, user) {
      state.user = user;
    },
    destroyToken(state) {
      state.token = null;
      state.user = null;
    },
  },
  // -----------------------------------------------------------------
  getters: {
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
