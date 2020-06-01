<template>
  <div>
    <div class="platform">
      <div class="tile is-ancestor">
        <div class="tile is-vertical">
          <div class="tile is-parent">
            <div class="tile is-child">
              <h1 class="title">Hi, I'm Kieran</h1>
              <p class="subtitle">
                I'm a web developer and intrepid traveller based in
                <strong>
                  <span class="saltire">Scotland</span>.
                </strong>
              </p>
              <div class="social-media">
                <a href="#">
                  <inline-svg
                    class="social-media-icon"
                    :src="require('@/assets/icons/cv.svg')"
                    height="25"
                    width="25"
                  ></inline-svg>
                </a>
                <a href="https://github.com/kzjasta">
                  <inline-svg
                    class="social-media-icon"
                    :src="require('@/assets/icons/github.svg')"
                    height="25"
                    width="25"
                  ></inline-svg>
                </a>
                <a href="https://instagram.com/smallkieran/">
                  <inline-svg
                    class="social-media-icon"
                    :src="require('@/assets/icons/instagram.svg')"
                    height="25"
                    width="25"
                  ></inline-svg>
                </a>
                <a href="https://www.linkedin.com/in/kieran-small-8b1b0a137/">
                  <inline-svg
                    class="social-media-icon"
                    :src="require('@/assets/icons/linkedin.svg')"
                    height="25"
                    width="25"
                  ></inline-svg>
                </a>
              </div>
            </div>
            <div class="is-hidden-mobile tile is-child">
              <img class="avatar" src="@/assets/img/me.png" />
            </div>
          </div>
          <div class="tile is-parent">
            <flag-tiles></flag-tiles>
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
  border-radius: 2%;
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
  fill: #eea849;
}

.social-media-icon:hover {
  fill: #f46b45;
  transition: 0.3s;
}
</style>
