import $axios from "@/core/plugins/axios";
import Swal from "sweetalert2";
export default {
  state: () => ({
    Carts: {},
  }),

  mutations: {
    setCarts(state, Carts) {
      state.Carts = Carts;
    },
  },
  actions: {
    async storeCart(vuexContext, { URL, data }) {
      try {
        await $axios.post(`${URL}`, data);
        Swal.fire(
          "Changes Saved",
          "The Cart details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async fetchCarts(vuexContext, paramObject) {
      try {
        const Carts = await $axios.get(paramObject.URL);
        await vuexContext.commit("setCarts", Carts.data);
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async getCart(vuexContext, paramObject) {
      const Cart = await $axios.get(paramObject.URL);
      return Cart;
    },
    async updateCart(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data);
        Swal.fire(
          "Changes Saved",
          "The Cart details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteCart(vuexContext, URL) {
      try {
        const Cart = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return Cart.data;
      } catch (error) {
        Swal.fire({
          title: "Warrning",
          text: error.response.data.message,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Now You Know",
        });
        throw error;
      }
    },
  },
  getters: {
    getCarts(state) {
      return state.Carts;
    },
  },
};
