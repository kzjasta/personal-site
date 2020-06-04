<template>
  <div>
    <p class="title is-size-4">This is where I've been...</p>
    <sequential-entrance fromRight delay="50">
      <a :href="country.url" :key="i" target="_blank" v-for="(country, i) in countries">
        <inline-svg
          class="flag-icon hvr-grow"
          :src="require(`@/assets/icons/flags/${country.name}.svg`)"
          :height="iconSize"
          :width="iconSize"
        ></inline-svg>
      </a>
    </sequential-entrance>
  </div>
</template>

<script>
import InlineSvg from "vue-inline-svg";
import { countriesArray } from "@/utils/countries";

export default {
  components: {
    InlineSvg
  },
  data() {
    return {
      iconSize: 45,
      countries: countriesArray
    };
  }
};
</script>

<style lang="scss" scoped>
.flag-icon {
  margin: 5px;
}
</style>
