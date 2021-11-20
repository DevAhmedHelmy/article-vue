import $axios from "@/core/plugins/axios";
import Swal from "sweetalert2";
export default {
  state: () => ({
    articles: {},
  }),

  mutations: {
    setArticles(state, articles) {
      state.articles = articles;
    },
  },
  actions: {
    async storeArticle(vuexContext, { URL, data }) {
      try {
        await $axios.post(`${URL}`, data);
        Swal.fire(
          "Changes Saved",
          "The Article details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async fetchArticles(vuexContext, paramObject) {
      try {
        const articles = await $axios.get(paramObject.URL);

        await vuexContext.commit("setArticles", articles.data);
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async getArticle(vuexContext, paramObject) {
      const article = await $axios.get(paramObject.URL);
      return article;
    },
    async updateArticle(vuexContext, paramObject) {
      try {
        await $axios.put(paramObject.URL, paramObject.data);
        Swal.fire(
          "Changes Saved",
          "The Article details have been updated",
          "success"
        );
      } catch (error) {
        throw error.response.data.errors;
      }
    },
    async deleteArticle(vuexContext, URL) {
      try {
        const Article = await $axios.delete(URL);
        vuexContext.dispatch("swalSuccess", "Deleted");
        return Article.data;
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
    getArticles(state) {
      return state.articles;
    },
  },
};
