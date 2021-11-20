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
              <h1>Create New Article</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <p>Create New Articel</p>
          <div class="my-5">
            <form @submit.prevent="updateArticle">
              <div class="form-floating">
                <input
                  class="form-control"
                  id="title"
                  type="text"
                  placeholder="Enter your title..."
                  data-sb-validations="required"
                  v-model="articleForm.title"
                />
                <label for="title">title</label>
                <div class="invalid-feedback" data-sb-feedback="title:required">
                  A title is required.
                </div>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  id="sub_title"
                  type="text"
                  placeholder="Enter your sub_title..."
                  data-sb-validations="required"
                  v-model="articleForm.sub_title"
                />
                <label for="sub_title">sub_title</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="sub_title:required"
                >
                  A sub_title is required.
                </div>
              </div>

              <div class="form-floating">
                <textarea
                  class="form-control"
                  id="content"
                  placeholder="Enter your content here..."
                  style="height: 12rem"
                  data-sb-validations="required"
                  v-model="articleForm.content"
                   
                ></textarea>
                <label for="content">content</label>
                <div
                  class="invalid-feedback"
                  data-sb-feedback="content:required"
                >
                  A content is required.
                </div>
              </div>
              <br />

              <button
                class="btn btn-primary text-uppercase"
                id="submitButton"
                type="submit"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editArticle",

  data() {
    return {
      articleForm: {},
      
      errors: [],
      url: `/articles/` + this.$route.params.id,
    };
  },
  created() {
      this.getArticle()
  },
  methods: {
    async updateArticle() {
      try {
        const article = {
          URL: this.url,
          data: this.articleForm,
        };
        console.log(this.articleForm)
        await this.$store.dispatch("updateArticle", article);
        document.location.href = "/";
      } catch (errors) {
        this.errors = errors;
      }
    },
    async getArticle() {
      const url = {
        URL: this.url,
      };
      const getData = await this.$store.dispatch("getArticle", url);
        const { title, content,sub_title }= getData.data.data; 
        this.articleForm = {
            
            title,
            content,
            sub_title,
             
        }
    },
  },
};
</script>
