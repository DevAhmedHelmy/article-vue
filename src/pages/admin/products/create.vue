<template>
  <div>
    <top-bar></top-bar>
    <div class="row">
      <div class="col-12">
        <div class="card card-warning">
          <div class="card-header">
            <h3 class="card-title">General Data</h3>
          </div>

          <div class="card-body">
            <form id="productForm">
              <div class="row">
                <div class="col-sm-6">
                  <!-- text input -->
                  <div class="form-group">
                    <label>Product Name</label>
                    <input
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Enter Product Name"
                    />
                    <span class="text-danger" v-if="errors.name">
                      {{ errors.name[0] }}
                    </span>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="form-group">
                    <label>Product Price</label>
                    <input
                      type="number"
                      name="price"
                      class="form-control"
                      placeholder="Enter Product Price"
                    />
                    <span class="text-danger" v-if="errors.price">
                      {{ errors.price[0] }}
                    </span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-6">
                  <!-- textarea -->
                  <div class="form-group">
                    <label>Product Description</label>
                    <textarea
                      class="form-control"
                      name="description"
                      rows="3"
                      placeholder="Enter Product Description"
                    ></textarea>
                    <span class="text-danger" v-if="errors.description">
                      {{ errors.description[0] }}
                    </span>
                  </div>
                </div>
              </div>

              <button @click.prevent="storeProduct">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import Errors from "@/pages/admin/layouts/errors";
export default {
  name: "createProduct",

  data() {
    return {
      errors: [],
    };
  },

  methods: {
    async storeProduct() {
      try {
        const form = document.getElementById("productForm");
        const data = new FormData(form);
        const product = { URL: "products", data: data };
        await this.$store.dispatch("storeProduct", product);

        this.$router.push({ name: "all-products" });
      } catch (errors) {
        this.errors = errors;
      }
    },
  },
};
</script>

 