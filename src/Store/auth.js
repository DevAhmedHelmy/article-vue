import axios from "axios";

export default {
  state: {
    user: null,
    token: null,
  },
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
  },

  actions: {
    async login(vuexContext, data) {
      try {
        const authUser = await axios.post("/login", data);
        // These are the Var in the response of the api/login
        const user = authUser.data.data;
        const token = authUser.data.access_token;
        // This is functions in  mutations I call it for change values in state
        vuexContext.commit("setAuthToken", token);
        vuexContext.commit("setCurrentUser", user);
        axios.defaults.headers.common["Authorization"] = `${token}`;
        // The promise that will we back to the login.vue
        return authUser;
      } catch (error) {
        console.log(error);
        if (error.response.status == 422) {
          throw error.response.data.errors;
        } else if (error.response.status == 401) {
          // The reject() will sent an error to the login.vue
          throw error.response.data;
        }
      }
    },

    async register(vuexContext, data) {
      try {
        const authUser = await axios.post("/register", data);
        // These are the Var in the response of the api/login
        const user = authUser.data.user;
        const token = authUser.data.access_token;
        localStorage.setItem("authToken", token);
        // This is functions in  mutations I call it for change values in state

        vuexContext.commit("setAuthToken", token);
        vuexContext.commit("setCurrentUser", user);
        axios.defaults.headers.common["Authorization"] = `${token}`;
        // The promise that will we back to the login.vue
        return authUser;
      } catch (error) {
        if (error.response.status == 422) {
          throw error.response.data;
        } else if (error.response.status == 401) {
          // The reject() will sent an error to the login.vue
          throw error.response.data;
        }
      }
    },
    async destroyToken(context) {
      try {
        const logout = await axios.post("/logout");
        context.commit("destroyToken");

        return logout;
      } catch (error) {
        context.commit("destroyToken");
      }
    },
  },
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
    },
  },
};
