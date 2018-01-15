<template id="demo">
  <section class="section">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
      </div>
    </div>
  </section>
</template>

<script>
import GameTerran from './GameTerran'

export default {
  name: 'GameScreen',
  components: { GameTerran }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 1000px;
  margin: auto;
}
button {
  background-color: azure;
  position: absolute;
}
</style>

