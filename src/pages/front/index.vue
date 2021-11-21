<template>
  <div>
    <navbar></navbar>
    <!-- Page Header-->

    <router-view name="frontendPages"></router-view>

    <!-- Footer-->
    <footerPage></footerPage>
  </div>
</template>

<script>
import navbar from "./layout/navbar.vue";

import footerPage from "./layout/footerPage.vue";
export default {
  components: { navbar, footerPage },
  name: "app",
};
</script>

<style>
</style>