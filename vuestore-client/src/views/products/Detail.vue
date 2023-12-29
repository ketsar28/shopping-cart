<template>
  <div>
    <div id="page-wrap" v-if="product">
      <h4 class="notif" v-if="notif">Item Added Successfully</h4>
      <div class="grid-wrap">
        <div class="img-wrap" id="img-wrap">
          <img :src="`http://localhost:8000${product.imageUrl}`" alt="" />
        </div>
        <div id="product-details">
          <h1>{{ product.name }}</h1>
          <h3 id="price">Rp.{{ product.price }}</h3>
          <p>Average Rating: {{ product.averageRating }}</p>
          <button id="add-to-cart" @click="addToCart(product.code)">
            Add to Cart
          </button>
          <p>
            {{ product.description }}
          </p>
        </div>
      </div>
    </div>
    <NotFound v-else />
  </div>
</template>

<script>
// import { products } from "../../data-seed";
import axios from "axios";
import NotFound from "../errors/NotFound.vue";
export default {
  components: {
    NotFound,
  },
  data() {
    return {
      //   products,
      product: {},
      notif: false,
    };
  },
  //   computed: {
  //     product() {
  //       return this.products.find((p) => {
  //         return p.id === this.$route.params.id;
  //       });
  //     },
  //   },
  async created() {
    try {
      const code = this.$route.params.id;
      const result = await axios.get(
        `http://localhost:8000/api/products/${code}`
      );
      this.product = result.data;
      console.log(this.product);
    } catch (err) {
      console.log("Error fetching the product");
    }
  },
  methods: {
    async addToCart(product) {
      await axios.post("http://localhost:8000/api/orders/update/user/1", {
        product, // request body
      });
      this.notif = true;
    },
  },
  mounted() {
    console.log(`all products : `);
    console.log(this.products);

    console.log(`one of products : `);
    console.log(this.product);
  },
};
</script>

<style scoped>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
  border-radius: 20px;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}

.notif {
  text-align: center;
  color: #fff;
  background: #41b883;
  padding: 5%;
  border-radius: 10px;
}
</style>
