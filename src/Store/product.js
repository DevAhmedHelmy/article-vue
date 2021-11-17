import $axios from "@/core/plugins/axios";
import Swal from "sweetalert2";
export default {
  state: () => ({
    products: {},
  }),

  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async storeProduct(vuexContext, { URL, data }) {
      try {
        await $axios.post(`${URL}`, data);
        Swal.fire(
          "Changes Saved",
          "The Product details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async fetchProducts(vuexContext, paramObject) {
      try {
        const products = await $axios.get(paramObject.URL);
        await vuexContext.commit("setProducts", products.data);
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async getProduct(vuexContext, paramObject) {
      const Product = await $axios.get(paramObject.URL);
      return Product;
    },
    async updateProduct(vuexContext, paramObject) {
      try {
        await $axios.post(paramObject.URL, paramObject.data);
        Swal.fire(
          "Changes Saved",
          "The Product details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteProduct(vuexContext, URL) {
      try {
        const Product = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return Product.data;
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
    getProducts(state) {
      return state.products;
    },
  },
};
