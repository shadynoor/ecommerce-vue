import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../views/Home.vue";
import Men from "../views/Men.vue";
import Shoes from "../views/Shoes.vue";
import Women from "../views/Women.vue";
import Kids from "../views/Kids.vue";
import ProductDetails from "../views/ProductDetails.vue";
import Cart from "../views/Cart.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/Men",
        name: "Men",
        component: Men,
      },
      {
        path: "/Women",
        name: "Women",
        component: Women,
      },
      {
        path: "/Kids",
        name: "Kids",
        component: Kids,
      },
      {
        path: "/Shoes",
        name: "Shoes",
        component: Shoes,
      },
      // {
      //   path: "/Others",
      //   name: "Others",
      //   component: Others,
      // },
      {
        path: "/:category/:id",
        name: "ProductDetails",
        component: ProductDetails,
      },
      {
        path: "/cart",
        name: "cart",
        component: Cart,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
