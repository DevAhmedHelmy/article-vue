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
              <a>{{ article.author }}</a>
              on {{ article.created_at }}
            </p>
            <div class="d-flex">
              <p class="p-1">
                <router-link
                  class="btn btn-info"
                  v-if="isLoggedIn"
                  :to="{ name: 'edit-article', params: { id: article.id } }"
                >
                  edit
                </router-link>
              </p>
              <p class="p-1" v-if="isLoggedIn">
                <button
                  class="btn btn-danger"
                  @click.prevent="deleteArticle(article.id)"
                >
                  Delete
                </button>
              </p>
            </div>
            <hr class="my-2" />
          </div>
          <!-- Divider-->

          <div
            class="d-flex justify-content-end mb-4"
            v-if="articles.data.length > 0"
          >
            <button
              class="btn btn-primary text-uppercase m-2"
              @click="getAllArticle(link.url)"
              v-for="link in links"
              :key="link.active"
            >
              {{ link.label }}
            </button>
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
  data() {
    return {
      links: [],
    };
  },
  computed: {
    articles() {
      return this.$store.getters.getArticles;
    },

    user: function () {
      return this.$store.state.StateUser;
    },
    isLoggedIn: function () {
      return this.$store.getters.loggedin;
    },
  },
  created() {
    this.getAllArticle();
  },

  methods: {
    async getAllArticle(page = "/?page=1") {
      await this.$store.dispatch("fetchArticles", {
        URL: "articles" + page,
      });
      this.links = await this.articles.links.filter((link) => {
        return !link.label.includes("pagination");
      });
    },
    async deleteArticle(id) {
      const result = await this.$SwalChecks(
        "You won't be able to revert this!"
      );
      if (result.value) {
        const URL = "articles/" + id;
        await this.$store.dispatch("deleteArticle", URL);
        this.getAllArticle();
      }
    },
  },
};
</script>
