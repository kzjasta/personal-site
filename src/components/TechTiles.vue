<template>
  <div>
    <p class="title is-size-4">...and this is the tech I use.</p>
    <sequential-entrance fromTop delay="150">
      <a :href="tech.url" :key="i" target="_blank" v-for="(tech, i) in technologies">
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
import { technologiesArray } from "@/utils/technologies";

export default {
  components: {
    InlineSvg
  },

  data() {
    return {
      iconSize: 60,
      technologies: technologiesArray
    };
  }
};
</script>

<style lang="scss" scoped>
.tech-icon {
  margin: 2%;
}
</style>
