import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vue Sequential Entrance Animations
import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
Vue.use(SequentialEntrance);

// Bulma
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@/assets/styles/main.scss";
Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
