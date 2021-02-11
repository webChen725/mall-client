import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/detail",
    name: "Detail",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  },
  {
    path: "/carts",
    name: "Carts",
    component: () => import(/* webpackChunkName: "order" */ "../views/Carts.vue")
  },
  {
    path: "/address",
    name: "Address",
    component: () => import(/* webpackChunkName: "address" */ "../views/Address.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
