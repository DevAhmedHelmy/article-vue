<template>
  <div></div>
</template>

<script>
export default {
  name: "showArticle",
  data() {
    return {
      Article: {},
    };
  },
  created() {
    this.getArticle();
  },
  methods: {
    async getArticle() {
      const article = {
        URL: "articles/" + this.$route.params.id,
      };
      const getArticle = await this.$store.dispatch("getArticle", article);
      this.Article = getArticle.data.data;
    },
  },
};
</script>
