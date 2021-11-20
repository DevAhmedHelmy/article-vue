<template>
  <div>
    <header
      class="masthead"
      style="background-image: url('assets/assets/img/home-bg.jpg')"
    >
      <div class="container position-relative px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading"> Home Page</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- Post preview-->
          <div
            class="post-preview"
            v-for="article in articles.data"
            :key="article.id"
          >
            <router-link
              :to="{ name: 'show-article', params: { id: article.id } }"
            >
              <h2 class="post-title">
                {{ article.title }}
              </h2>
              
            </router-link>
            <h3 class="post-subtitle">
                {{ article.sub_title }}
              </h3>
            <p class="post-meta">
              Posted by
              <a href="#!">{{ article.author }}</a>
              on {{ article.created_at }}
            </p>
            <p v-if="user.id == article.user_id">

            <router-link
              :to="{ name: 'edit-article', params: { id: article.id } }"
            >
              edit
              
            </router-link>
            </p>
             <hr class="my-4" />
 
          </div>
          <!-- Divider-->
         

          
          <div class="d-flex justify-content-end mb-4"   v-for="link in links" :key="link.label">
            <button class="btn btn-primary text-uppercase"  @click="getAllArticle(link.url)"
              >{{link.label}}</button
            >
         
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data(){
    return{
      user: this.$store.state.user,
      links:[],

    }
  },
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },
    
  },
  created() {
    this.getAllArticle();
    
  },
 

  methods: {
    async getAllArticle(page= "/?page=1") {
      
      await this.$store.dispatch("fetchArticles", {
        URL: "articles"+page,
      });
      this.links = await this.articles.links.filter((link) => {
      console.log(link)
       return !link.label.includes('pagination')
    })
    },
  },
 
  
};
</script>
