<template id="demo">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
        <MessageWindow v-if="showHideDialog"></MessageWindow>
      </div>
    </div>
</template>

<script>
import GameTerran from './GameTerran'
import MessageWindow from './MessageWindow'

export default {
  name: 'GameScreen',
  components: { GameTerran, MessageWindow },
  computed: {
    showHideDialog() {
      return this.$store.state.showHideDialog
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div {
  width: 1000px;
  margin: auto;
}
</style>

