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
              <h1>{{ article.title }}</h1>
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
          <h2>comments</h2>

          
        </div>
      </div>
    <div class="d-flex justify-content-center row">
        <div class="col-md-8">
            <div class="d-flex flex-column comment-section">
                <div class="bg-white p-2" v-for="comment in article.comments" :key="comment.id">
                    <div class="d-flex flex-row user-info"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40">
                        <div class="d-flex flex-column justify-content-start ml-2"><span class="d-block font-weight-bold name">{{comment.user}}</span><span class="date text-black-50">{{comment.created_at}}</span></div>
                    </div>
                    <div class="mt-2">
                        <p class="comment-text">{{comment.comment}}</p>
                    </div>
                    <div class="reply px-4"> <small @click.prevent="removeComment(comment.id)">Remove</small> <span class="dots"></span>  </div>
                </div>
                 <form @submit.prevent="addComment">
                <div class="bg-light p-2">
                    <div class="d-flex flex-row align-items-start"><img class="rounded-circle" src="https://i.imgur.com/RpzrMR2.jpg" width="40"><textarea class="form-control ml-1 shadow-none textarea" v-model="commentFrom.comment"></textarea></div>
                    <div class="mt-2 text-right"><button class="btn btn-primary btn-sm shadow-none" type="submit">Post comment</button> 
                </div>
            </div>
            </form>
        </div>
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
      commentFrom: {},
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
    async addComment() {
      try {
        this.commentFrom.article_id = this.article.id;
        await this.http.post("comments", this.commentFrom);
        this.getArticle();
      } catch (errors) {
        console.log(errors);
      }
    },
    async removeComment(id) {
      try {
        await this.http.delete("comments/" + id);
        this.getArticle();
      } catch (errors) {
        console.log(errors);
      }
    },
  },
};
</script>
