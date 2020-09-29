import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [

  {
    path: "/",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () => import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
