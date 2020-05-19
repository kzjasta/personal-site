<template>
  <div>
    <!-- INTRO CARD -->
    <div class="columns is-desktop is-tablet is-centered">
      <div class="column is-half">
        <div class="columns platform">
          <div class="column is-half">
            <h1 class="title is-1">Hi, I'm Kieran.</h1>
            <h5 class="subtitle is-5">
              I'm a web developer and intrepid traveller based in
              <span class="saltire">Scotland.</span>
            </h5>
            <a href="https://github.com/kzjasta">
              <inline-svg
                class="social-med"
                :src="require('../assets/icons/github.svg')"
                width="35"
                height="35"
              ></inline-svg>
            </a>
            <a href="https://www.instagram.com/smallkieran">
              <inline-svg
                class="social-med"
                :src="require('../assets/icons/instagram.svg')"
                width="35"
                height="35"
              ></inline-svg>
            </a>
            <a href="https://www.linkedin.com/in/kieran-small-8b1b0a137/">
              <inline-svg
                class="social-med"
                :src="require('../assets/icons/linkedin.svg')"
                width="35"
                height="35"
              ></inline-svg>
            </a>
          </div>
          <div class="column">
            <img src="@/assets/img/me.jpg" />
          </div>
        </div>
      </div>
    </div>

    <!-- NAVBAR -->
    <div class="columns is-desktop is-tablet is-centered">
      <div class="column navbar box is-half">
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" :to="{ name: 'About'}">About</router-link>
            <router-link class="navbar-item" :to="{ name: 'Writing' }">Writing</router-link>
            <router-link class="navbar-item" :to="{ name: 'Travel'}">Travel</router-link>
            <router-link class="navbar-item" :to="{ name: 'Projects'}">Projects</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg
  }
};
</script>

<style lang="scss" scoped>
.platform {
  margin-top: 30%;
}

.platform h5 {
  color: $grey;
}

.platform img {
  border-radius: 5%;
}

.navbar {
  margin-top: 1%;
}

.navbar-item {
  margin-right: 10%;
}

.saltire {
  color: $link;
}

.social-med {
  margin-right: 5%;
}
</style>
