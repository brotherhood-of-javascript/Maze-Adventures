<template id="demo" >
  <section class="section aligner-space-between">
      <div class="menu-bord " v:onkeyup.esc='backTomainMenu'>
        <router-link to="/" class="button button-huge block-mobile">back to main menu</router-link>
      </div>
    <div class="section background-dark">
      <div class="container text-center ">
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
  components: { GameTerran },
  //   methods: {
  //   backTomainMenu: () => {
  //     alert("keycode: ");
  //   }
  // },
  created: function() {
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 27:
          this.$router.push({ name: 'MainMenu' })
      }
    })
    window.removeEventListener('keyup', event)
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
