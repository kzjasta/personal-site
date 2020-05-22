import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Landing from "../views/Landing.vue";
import About from "../views/About.vue";
import Travel from "../views/Travel.vue";
import Writing from "../views/Writing.vue";
import Projects from "../views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/about", name: "About", component: About },
  { path: "/travel", name: "Travel", component: Travel },
  { path: "/writing", name: "Writing", component: Writing },
  { path: "/projects", name: "Projects", components: Projects }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
