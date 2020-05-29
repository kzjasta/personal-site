<template>
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child">
        <sequential-entrance delay="50">
          <inline-svg
            class="flag-icon"
            :key="country"
            v-for="country in countries"
            :src="require(`@/assets/icons/flags/${country}.svg`)"
            height="75"
            width="75"
          ></inline-svg>
        </sequential-entrance>
      </div>
    </div>
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
  margin-right: 10px;
}
</style>
