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
            <form @submit.prevent="register">
              <div v-if="errors">
                <div class="alert alert-danger" role="alert">
                  <ul>
                    <li v-for="(error, index) in errors" :key="index">
                      {{ error[0] }}
                    </li>
                  </ul>
                </div>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  v-model="registerForm.name"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                />
                <label for="name">Name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  v-model="registerForm.email"
                  placeholder="Enter your email..."
                  data-sb-validations="required,email"
                />
                <label for="email">Email address</label>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="password"
                  v-model="registerForm.password"
                  placeholder="Enter your phone number..."
                  data-sb-validations="required"
                />
                <label for="phone">password</label>
              </div>
              <div class="form-floating">
                <input
                  class="form-control"
                  type="password"
                  v-model="registerForm.password_confirmation"
                  placeholder="Enter your phone number..."
                  data-sb-validations="required"
                />
                <label for="phone">password_confirmation</label>
              </div>

              <br />

              <!-- Submit Button-->
              <button
                class="btn btn-primary text-uppercase"
                id="submitButton"
                type="submit"
              >
                Register
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
  name: "register",
  data() {
    return {
      registerForm: {},
      errors: null,
    };
  },
  methods: {
    async register() {
      try {
        await this.$store.dispatch("register", this.registerForm);
        this.$router.push({ name: "Home" });
      } catch (error) {
          this.errors = error;
      }
    },
    beforeRouteEnter(to, from, next) {
      if (!store.getters.loggedin) {
        next();
      } else {
        next({ name: "Home" });
      }
    },
  },
};
</script>

<style>
</style>