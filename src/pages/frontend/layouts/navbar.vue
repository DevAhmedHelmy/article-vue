<template>
  <!--  start upper bar -->
  <div class="upper_bar">
    <div class="container">
      <div class="row">
        <div class="col-md-5 col-4 leftside"></div>
        <div class="col-md-2 col-4 text-center lang p-0"></div>
        <div class="col-md-5 col-4 rightside"></div>
      </div>
      <div class="row">
        <div class="col-md-3 adleft text-start p-0 d-none d-sm-block"></div>
        <div class="col-md-6 text-center p-0 divbrand">
          <a class="navbar-brand" href="#">
            <h1 class="logo1">les professionels</h1>
          </a>
        </div>
        <div class="col-md-3 adleft text-start p-0 d-none d-sm-block"></div>
      </div>
      <div class="row">
        <div class="col-md-3 text-end p-0 d-none d-sm-block text-start">
          <router-link :to="{ name: 'cart' }">
            <p class="header-icon-style">
              <i class="fas fa-cart-arrow-down"></i>
              <span class="count-style" id="totalAmount" style="">4</span>
            </p>
          </router-link>
        </div>
        <div class="col-md-6 col-12 p-0 text-center">
          <nav class="navbar navbar-expand-lg navbar-light bg-light p-0">
            <div class="container">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                {{ (loggedIn, user) }}
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav m-auto">
                  <li class="nav-item active nav-itemXs">
                    <router-link :to="{ name: 'Home' }" class="nav-link">
                      home
                    </router-link>
                  </li>
                  <li class="nav-item nav-itemXs" v-if="!loggedIn">
                    <router-link :to="{ name: 'login' }" class="nav-link">
                      login
                    </router-link>
                  </li>
                  <li class="nav-item nav-itemXs" v-if="!loggedIn">
                    <router-link :to="{ name: 'register' }" class="nav-link">
                      register
                    </router-link>
                  </li>
                  <li class="nav-item nav-itemXs" v-if="loggedIn">
                    <a @click="logout" id="logout" class="nav-link"> Logout </a>
                  </li>

                  <li class="nav-item nav-itemXs" v-if="loggedIn">
                    <a class="nav-link"> {{ user.name }} </a>
                  </li>
                  <li>
                    <div class="col text-center p-0 d-block d-sm-none">
                      <p class="icon_bar d-block d-sm-none">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-telegram-plane"></i></a>
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div class="col-md-3 text-end p-0 d-none d-sm-block">
          <p class="icon_bar">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
            <a href="#"><i class="fab fa-telegram-plane"></i></a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <!--  end upper bar -->
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      loggedIn: this.$store.getters.loggedin,
      user: this.$store.state.user,
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("destroyToken").then(() => {
        this.$router.push({ name: "login" });
      });
    },
  },
};
</script>

<style scoped>
#logout {
  cursor: pointer;
}
</style>