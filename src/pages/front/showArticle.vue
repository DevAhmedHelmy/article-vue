<template>
<div>
    <header
      class="masthead"
      style="background-image: url('/assets/assets/img/post-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
                        <div class="post-heading">
                            <h1>{{ article.title }} </h1>
                            <h2 class="subheading">{{ article.sub_title }}</h2>
                            <span class="meta">
                                Posted by
                                <a href="#!">{{ article.author }}</a>
                                on {{ article.created_at }}
                            </span>
                        </div>
                    </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <ul>
          <li v-for="tag in article.tags" :key="tag.id">
            {{ tag.name }}
          </li>
        </ul>
        <hr class="my-4" />
                        <p>
                          {{ article.content }} 
                        </p>

                         <hr class="my-4" />
                         <h1>comments</h1>
                    </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: "showArticle",
  data() {
    return {
      article: {},
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
      this.article = getArticle.data.data;
    },
  },
};
</script>
