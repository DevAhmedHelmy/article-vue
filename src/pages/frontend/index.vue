<template>
  <div>
    <div id="home">
      <navbar />
      <!--  starthome      -->
      <div class="homecont text-start">
        <div class="container-fluid">
          <div class="row m-bottom">
            <div class="col-md-6 m-auto p-0 d-none d-sm-block"></div>
          </div>
          <router-view name="frontendPages"></router-view>
        </div>
      </div>
    </div>

    <div id="scrolltop">
      <i class="fa fa-chevron-up"></i>
    </div>
  </div>
</template>

<script>
import Navbar from "./layouts/navbar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style  >
</style>

 