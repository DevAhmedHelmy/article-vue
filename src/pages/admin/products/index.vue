<template>
  <div>
    <top-bar></top-bar>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
              <div class="col-6">
                <h3 class="card-title">Products Data</h3>
              </div>
              <div class="col-6 text-right">
                <router-link
                  class="btn btn-outline-primary mr-1"
                  tag="button"
                  :to="{ name: 'create-products' }"
                  >Add new</router-link
                >
              </div>
            </div>
          </div>
          <!-- /.card-header -->
          <div class="card-body">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Product name</th>
                  <th>price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>{{ product.id }}</td>
                  <td>{{ product.name }}</td>
                  <td>
                    {{ product.price }}
                  </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'edit-products',
                        params: { id: product.id },
                      }"
                    >
                      <li class="fa fa-edit"></li
                    ></router-link>
                    <a
                      class="btn btn-sm btn-clean btn-icon btn-icon-md"
                      @click.prevent="Delete(product.id)"
                    >
                      <i class="fa fa-trash"></i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- /.card-body -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexProduct",
  data() {
    return {
      products: [],
      user: this.$store.state,
    };
  },
  created() {
    this.getAll();
  },
  methods: {
    async getAll() {
      await this.$store.dispatch("fetchProducts", {
        URL: "products",
      });
      this.products = this.$store.getters.getProducts.data;
    },
    async Delete(id) {
      const result = await this.$SwalChecks(
        "You won't be able to revert this!"
      );
      if (result.value) {
        const URL = "products/" + id;
        await this.$store.dispatch("deleteProduct", URL);
        this.products = this.products.filter((item) => {
          return item.id != id;
        });
      }
    },
  },
};
</script>

 