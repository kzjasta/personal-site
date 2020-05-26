<template>
  <div>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <article class="platform content">
          <header>
            <h1 class="title">About me:</h1>
          </header>
          <p>
            I'm a web developer and I try to spend as much time as I can
            exploring every corner of the planet.
          </p>
          <p>
            After graduating from the University of Dundee in 2017, I worked at
            Outplay Entertainment as a front-end developer creating in-house
            tools that make maintaining digital assets and mobile games a little
            easier.
          </p>
          <h1 class="title">Factoids:</h1>
          <div class="factoids">
            <p class="subtitle">Kieran...</p>
            <ul>
              <li>works as a web developer.</li>
              <li>has visited X countries.</li>
              <li>plays volleyball.</li>
              <li>can speak Portuguese.</li>
              <li>loves video games.</li>
              <li>plays the drums.</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.factoids {
  margin-top: 20px;
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
