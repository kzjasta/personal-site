<template>
  <div class="tile is-child content">
    <p class="title is-size-4">...and this is the tech I use.</p>
    <sequential-entrance fromTop delay="100">
      <a :href="tech.url" :key="tech" v-for="tech in technologies">
        <inline-svg
          class="tech-icon hvr-grow"
          :src="require(`@/assets/icons/tech/${tech.name}.svg`)"
          :height="iconSize"
          :width="iconSize"
        ></inline-svg>
      </a>
    </sequential-entrance>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";

export default {
  components: {
    InlineSvg
  },

  data() {
    return {
      iconSize: 60,
      technologies: [
        { name: "vue", url: "https://vuejs.org/" },
        { name: "ember", url: "https://emberjs.com/" },
        {
          name: "js",
          url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        { name: "node", url: "https://nodejs.org/en/" },
        { name: "ruby", url: "https://rubyonrails.org/" },
        { name: "sql", url: "https://www.mysql.com/" },
        { name: "mongo", url: "https://www.mongodb.com/" },
        { name: "sass", url: "https://sass-lang.com/" },
        { name: "bulma", url: "https://bulma.io/" },
        { name: "tailwind", url: "https://tailwindcss.com/" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tech-icon {
  margin: 2%;
}
</style>
