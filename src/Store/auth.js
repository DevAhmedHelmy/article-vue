import $axios from "@/core/plugins/axios";
export default {
  state: {
    userData: null,
  },

  getters: {
    user: (state) => state.userData,
  },
  mutations: {
    setUserData(state, user) {
      state.userData = user;
    },
  },
  actions: {
    async login(vuexContext, data) {
      try {
        const authUser = await $axios.post("/login", data);
        // These are the Var in the response of the api/login
        const user = authUser.data.user;
        const token = authUser.data.access_token;
        localStorage.setItem("authToken", token);
        // This is functions in  mutations I call it for change values in state
        vuexContext.commit("setUserData", user);
        vuexContext.commit("setAuthToken", token);
        vuexContext.commit("setCurrentUser", user);
        // The promise that will we back to the login.vue
        return authUser;
      } catch (error) {
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
        const authUser = await $axios.post("/register", data);
        // These are the Var in the response of the api/login
        const user = authUser.data.user;
        const token = authUser.data.access_token;
        localStorage.setItem("authToken", token);
        // This is functions in  mutations I call it for change values in state
        vuexContext.commit("setUserData", user);
        vuexContext.commit("setAuthToken", token);
        vuexContext.commit("setCurrentUser", user);
        // The promise that will we back to the login.vue
        return authUser;
      } catch (error) {
        if (error.response.status == 422) {
          throw error.response.data.errors;
        } else if (error.response.status == 401) {
          // The reject() will sent an error to the login.vue
          throw error.response.data;
        }
      }
    },
    async destroyToken(context) {
      try {
        const logout = await $axios.post("/logout");
        context.commit("destroyToken");
        localStorage.removeItem("authToken");
        return logout;
      } catch (error) {
        context.commit("destroyToken");
        localStorage.removeItem("authToken");
      }
    },
  },
};
