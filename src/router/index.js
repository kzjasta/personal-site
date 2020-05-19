import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import Travel from "../views/Travel.vue";
import Writing from "../views/Writing.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/about", name: "About", component: About },
  { path: "/travel", name: "Travel", component: Travel },
  { path: "/writing", name: "Writing", component: Writing }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
