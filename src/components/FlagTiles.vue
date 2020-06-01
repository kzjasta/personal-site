<template>
  <div class="tile is-child content">
    <p class="title is-size-4">This is where I've been...</p>
    <sequential-entrance fromRight delay="50">
      <a href="#" :key="country" v-for="country in countries">
        <inline-svg
          class="flag-icon hvr-grow"
          :src="require(`@/assets/icons/flags/${country}.svg`)"
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
      iconSize: 45,
      countries: [
        "belgium",
        "bosnia",
        "cambodia",
        "canada",
        "china",
        "colombia",
        "croatia",
        "cyprus",
        "denmark",
        "england",
        "france",
        "germany",
        "greece",
        "hungary",
        "ireland",
        "italy",
        "laos",
        "myanmar",
        "netherlands",
        "north-korea",
        "poland",
        "portugal",
        "scotland",
        "serbia",
        "slovenia",
        "spain",
        "sweden",
        "thailand",
        "ukraine",
        "usa",
        "vietnam",
        "wales"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.flag-icon {
  margin: 5px;
}
</style>
