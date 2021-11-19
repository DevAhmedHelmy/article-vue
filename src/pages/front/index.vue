<template>
  <div>
    <navbar></navbar>
    <!-- Page Header-->
   <headerPage :title="`Home Page`"></headerPage>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
          <router-view  name="frontendPages"></router-view >
      </div>
    </div>
    <!-- Footer-->
    <footerPage ></footerPage>
  </div>
</template>

<script>
import navbar from './layout/navbar.vue';
import headerPage from './layout/headerPage.vue';
import footerPage from './layout/footerPage.vue';
export default {
  components: { navbar,headerPage,footerPage },
  name: "app",
  
};
</script>

<style>
</style>