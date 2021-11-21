<template>
   <div>
    <header
      class="masthead"
      style="background-image: url('assets/assets/img/contact-bg.jpg')"
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
          <p>
            Want to get in touch? Fill out the form below to send me a message
            and I will get back to you as soon as possible!
          </p>
          <div class="my-5">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <div class="alert alert-danger" role="alert" v-if="errors">
              <p>{{ errors }}</p>
            </div>
            <form @submit.prevent="login">
             
              <div class="form-floating">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  v-model="formData.email"
                  placeholder="Enter your email..."
                  data-sb-validations="required,email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
               <div class="form-floating">
                <input
                  class="form-control"
                  id="password"
                  type="password"
                  v-model="formData.password"
                  placeholder="Enter your password..."
                  data-sb-validations="required,password"
                />
                <label for="password">password address</label>
                <div class="invalid-feedback" data-sb-feedback="password:required">
                  An password is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="password:password">
                  password is not valid.
                </div>
              </div>
              
              <br />
            
          
              <button
                class="btn btn-primary text-uppercase "
               
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../../Store/Store";
export default {
  name:"login",
  data(){
    return{
      formData:{},
       errors: null,
    }
  },
  methods:{
    async login() {
      try {
        await this.$store.dispatch("login", this.formData);
        this.$router.push({ name: "Home" });
      } catch (error) {
        this.errors = error.message;
      }
    },
    beforeRouteEnter(to, from, next) {
      if (!store.getters.loggedin) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  }
};
</script>

<style>
</style>