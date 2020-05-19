<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html * {
  font-family: "Karla-Bold";
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Karla-Bold";
}

p {
  font-family: "Karla-Bold";
  color: $grey-dark;
}
</style>
