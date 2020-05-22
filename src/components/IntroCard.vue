<template>
  <div>
    <div class="platform">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child">
            <h1 class="title">Hi, I'm Kieran</h1>
            <p class="subtitle">
              I'm a web developer and intrepid traveller based in
              <strong>
                <span class="saltire">Scotland</span>.
              </strong>
            </p>
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
          <div class="tile is-child">
            <img class="avatar" src="@/assets/img/placeholder.jpg" />
          </div>
        </div>
      </div>
    </div>

    <hr class="is-hidden-mobile" />
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
  margin-top: 20%;
  margin-bottom: 5%;
  padding-left: 12px;
  padding-right: 12px;
}

.platform h5 {
  color: $grey;
}

.platform img {
  border-radius: 5%;
}

.saltire {
  color: $link;
}

.social-media-icon {
  margin-right: 5%;
  fill: #eea849;
}

.social-media-icon:hover {
  fill: #f46b45;
  transition: 0.3s;
}

hr {
  background-color: $grey-lighter;
  margin: auto;
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  height: 1px;
}
</style>
