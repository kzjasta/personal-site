<template>
  <div class="navbar fixed-top is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" :to="{ name: 'Landing'}">Kieran Small</router-link>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <router-link class="navbar-item has-text-centered" :to="{ name: 'About' }">About</router-link>
        <router-link class="navbar-item has-text-centered" :to="{ name: 'Travel'}">Travel</router-link>
        <router-link class="navbar-item has-text-centered" :to="{ name: 'Projects'}">Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar-item {
  color: #eea849;
  font-family: "Asap-Medium";
}

.navbar-item:hover {
  color: #f46b45;
  transition: 0.3s;
}

.navbar-item {
  margin-right: 10%;
}
</style>
