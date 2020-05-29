<template>
  <div class="columns">
    <div class="column is-half is-offset-one-quarter">
      <div class="platform">
        <h1 class="title">Places I've visited</h1>
        <FlagTiles></FlagTiles>
      </div>
    </div>
  </div>
</template>

<script>
import FlagTiles from "@/components/FlagTiles";

export default {
  components: {
    FlagTiles
  }
};
</script>

<style lang="scss" scoped>
.flag-icon {
  margin: 5px;
}
</style>
