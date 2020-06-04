<template>
  <div>
    <div class="columns platform">
      <div class="column is-half is-two-thirds-tablet is-offset-one-quarter">
        <div class="columns">
          <div class="column is-half">
            <h1 class="title">Hi, I'm Kieran</h1>
            <p class="subtitle is-size-4-mobile">
              I'm a web developer and intrepid traveller based in
              <strong>
                <span class="saltire">Scotland</span>.
              </strong>
            </p>
            <div class="social-media">
              <a href="#">
                <inline-svg
                  class="social-media-icon hvr-grow"
                  :src="require('@/assets/icons/cv.svg')"
                  height="25"
                  width="25"
                ></inline-svg>
              </a>
              <a href="mailto:me@ksmall.co">
                <inline-svg
                  class="social-media-icon hvr-grow"
                  :src="require('@/assets/icons/email.svg')"
                  height="25"
                  width="25"
                ></inline-svg>
              </a>
              <a href="https://github.com/kzjasta">
                <inline-svg
                  class="social-media-icon hvr-grow"
                  :src="require('@/assets/icons/github.svg')"
                  height="25"
                  width="25"
                ></inline-svg>
              </a>
              <a href="https://instagram.com/smallkieran/">
                <inline-svg
                  class="social-media-icon hvr-grow"
                  :src="require('@/assets/icons/instagram.svg')"
                  height="25"
                  width="25"
                ></inline-svg>
              </a>
              <a href="https://www.linkedin.com/in/kieran-small-8b1b0a137/">
                <inline-svg
                  class="social-media-icon hvr-grow"
                  :src="require('@/assets/icons/linkedin.svg')"
                  height="25"
                  width="25"
                ></inline-svg>
              </a>
            </div>
          </div>
          <div class="column is-half is-hidden-mobile">
            <img class="avatar" src="@/assets/img/me.png" />
          </div>
        </div>
        <div class="columns is-hidden-mobile">
          <div class="column is-half">
            <flag-tiles></flag-tiles>
          </div>
          <div class="column is-half">
            <tech-tiles></tech-tiles>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import FlagTiles from "@/components/FlagTiles";
import TechTiles from "@/components/TechTiles";

export default {
  components: {
    InlineSvg,
    FlagTiles,
    TechTiles
  }
};
</script>

<style lang="scss" scoped>
.platform img {
  border-radius: 3%;
}

.about-content {
  padding: 2%;
}

.flag-tiles {
  padding-bottom: 2%;
}

.saltire {
  color: $link;
}

.social-media {
  margin-bottom: 2%;
}

.social-media-icon {
  margin-right: 5%;
  fill: $primary;
}

// Mobile Portrait
@media only screen and (max-width: 768px) {
  .about-content {
    margin-top: 50%;
  }
}

// Mobile Landscrape
@media only screen and (min-width: 481px) and (max-width: 767px) {
  .about {
    margin-bottom: 75%;
  }
}

// Tablet
@media only screen and (min-width: 769) and (max-width: 1023) {
}
</style>
