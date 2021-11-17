<template>
  <div>
    <div id="StayFocusd-infobar" style="display: none">
      <img
        src="chrome-extension://laankejkbhbdhmipfmgcngdelahlfoji/common/img/eye_19x19_red.png"
      />
      <span id="StayFocusd-infobar-msg"></span>
      <span id="StayFocusd-infobar-links">
        <a id="StayFocusd-infobar-never-show">hide forever</a
        >&nbsp;&nbsp;|&nbsp;&nbsp;
        <a id="StayFocusd-infobar-hide">hide once</a>
      </span>
    </div>
    <div>
      <div class="login-box">
        <div class="login-logo">
          <a><b>Admin</b>LTE</a>
        </div>
        <!-- /.login-logo -->
        <div class="card">
          <div class="card-body login-card-body">
            <p class="login-box-msg">Sign in to start your session</p>
            <div class="alert alert-danger" role="alert" v-if="errors">
              <p>{{ errors }}</p>
            </div>
            <form @submit.prevent="login">
              <div class="input-group mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  v-model="loginForm.email"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  v-model="loginForm.password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8">
                  <div class="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label for="remember"> Remember Me </label>
                  </div>
                </div>
                <!-- /.col -->
                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Sign In
                  </button>
                </div>
                <!-- /.col -->
              </div>
            </form>

            <!-- /.social-auth-links -->
          </div>
          <!-- /.login-card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../Store/store";
export default {
  name: "login",
  data() {
    return {
      loginForm: {},
      errors: null,
    };
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", this.loginForm);
        this.$router.push({ name: "admin" });
      } catch (error) {
        this.errors = error.message;
      }
    },
    beforeRouteEnter(to, from, next) {
      if (!store.getters.loggedin) {
        next();
      } else {
        next({ name: "admin" });
      }
    },
  },
};
</script>

<style>
.login-box {
  margin: 5% auto;
}
</style>