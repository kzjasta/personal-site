<template>
  <div id="app">
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <NavBar></NavBar>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss"></style>
