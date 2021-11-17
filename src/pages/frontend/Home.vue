<template>
  <div>
    <div class="row artchome">
      <div class="container">
        <div class="row">
          <div class="grid-list-product-wrapper">
            <div class="product-grid product-view pb-20">
              <div class="row mxs-0" id="product-data">
                <div
                  class="
                    product-width
                    col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6
                    mb-30
                    pxs-0
                  "
                  v-for="product in products"
                  :key="product.id"
                >
                  <div class="product-wrapper">
                    <div class="box-product-tab">
                      <div class="box-img">
                        <a href="#"> </a>
                        <a href="#">
                          <img
                            src="https://shatta.com/storage/images/products/1635849952kjdaipJijrlrpTXE2kFZTlaCLyTDWSDZqYNPw0w2.jpg"
                          />
                        </a>
                      </div>
                      <div class="content-tab-content-p">
                        <a href="#" alt="">
                          <h4>{{ product.name }}</h4>
                        </a>
                        <p>{{ product.price }} $</p>

                        <div class="Add-to-Cart-btn">
                          <button @click="addToCart(product)">
                            <i class="fas fa-cart-arrow-down"></i>add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      products: [],
      cartForm: {},
    };
  },
  created() {
    this.getAllProduct();
  },

  methods: {
    async getAllProduct() {
      await this.$store.dispatch("fetchProducts", {
        URL: "products",
      });
      this.products = this.$store.getters.getProducts.data;
    },

    async addToCart(item) {
      this.cartForm = {
        product_id: item.id,
        quantity: 1,
        price: item.price,
      };
      const cart = { URL: "carts", data: this.cartForm };
      await this.$store.dispatch("storeCart", cart);
    },
  },
};
</script>

