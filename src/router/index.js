import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Landing from "@/views/Landing.vue";
import About from "@/views/About.vue";
import Travel from "@/views/Travel.vue";
import Blog from "@/views/Blog.vue";
import Projects from "@/views/Projects.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "Landing", component: Landing },
  { path: "/about", name: "About", component: About },
  { path: "/travel", name: "Travel", component: Travel },
  { path: "/blog", name: "Blog", component: Blog },
  { path: "/projects", name: "Projects", component: Projects }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
