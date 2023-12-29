import Vue from "vue";
import VueRouter from "vue-router";
import Product from "../views/products/Index.vue";
import ProductDetail from "../views/products/Detail.vue";
import Cart from "../views/carts/Index.vue";
import NotFound from "../views/errors/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "product",
    component: Product,
  },
  {
    path: "/products/:id",
    name: "product-detail",
    component: ProductDetail,
  },
  {
    path: "/carts",
    name: "cart",
    component: Cart,
  },
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
