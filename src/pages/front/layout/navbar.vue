<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html">Start Bootstrap</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto py-4 py-lg-0">
            <li class="nav-item">
              <router-link class="nav-link px-lg-3 py-3 py-lg-4" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'create-article' }"
                >Create New Article</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'about' }"
                >About</router-link
              >
            </li>

            <li class="nav-item">
              <router-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'contact' }"
                >Contact</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'login' }"
                >login</router-link
              >
            </li>
            <li class="nav-item" v-if="!isLoggedIn">
              <router-link
                class="nav-link px-lg-3 py-3 py-lg-4"
                :to="{ name: 'register' }"
                >register</router-link
              >
            </li>
            <li class="nav-item" id="logout" v-if="isLoggedIn">
              <a
                @click="logout"
                id="logout"
                class="nav-link px-lg-3 py-3 py-lg-4"
              >
                Logout
                <!-- {{ isLoggedIn }} -->
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.loggedin;
    },
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