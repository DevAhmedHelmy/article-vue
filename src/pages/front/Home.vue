<template>
  <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div class="post-preview" v-for="article in articles" :key="article.id">

            <router-link :to="{name:'show-article',params: { id:article.id}}">
              <h2 class="post-title">
                {{article.title }}
              </h2>
              <h3 class="post-subtitle">
                {{ article.content  }}
              </h3>
            </router-link>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ article.author  }}</a>
              on {{ article.created_at  }}
            </p>
          </div>
          <!-- Divider-->
          <hr class="my-4" />
         
           
         
           
          <!-- Pager-->
          <div class="d-flex justify-content-end mb-4">
            <a class="btn btn-primary text-uppercase" href="#!"
              >Older Posts →</a
            >
          </div>
        </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  computed:{
    articles(){
      return  this.$store.getters.getArticles.data
    }
  },
 created() {
    this.getAllArticle();
  },

  methods:{
    async getAllArticle() {
      await this.$store.dispatch("fetchArticles", {
        URL: "articles",
      });
      
    },

  }
};
</script>
