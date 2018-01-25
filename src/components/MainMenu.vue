<template>
  <div class="section">
   <h2 class="text-big text-gray">Maze Adventures</h2>
   <div @click="getShowOtherMenu">  
      <div class="button button-huge block-mobile" @click="newGame">New Game</div>
   </div>
    <div>
      <router-link to="/game" class="button button-huge block-mobile resume button-red" v-show="!this.$store.state.start">Resume</router-link>
   </div>
   <div>
      <router-link to="/save" class="button button-huge block-mobile " v-show="!this.$store.state.start">Save Game</router-link>
   </div>
   <div>
      <router-link to="/load" class="button button-huge block-mobile">Load Game</router-link>
   </div>
   <div>
      <router-link to="/developers" class="button button-huge block-mobile">Developers</router-link>
   </div>
   <popup-new-game v-show="warning" msg="Do you want to start new game? Unsaved progress will be discarded"  @sendNo="warning = $event"  route="GameScreen"/>

  </div>
</template>

<script>
import PopupNewGame from './PopupNewGame'
export default {
  components: { PopupNewGame },
  name: 'MainMenu',
  data: function() {
    return {
      warning: false
    }
  },
  methods: {
    getShowOtherMenu() {
      return this.$store.dispatch('getShowOtherMenuNow')
    },
    newGame: function() {
      this.warning = !this.$store.state.start
      if (!this.warning) this.$router.push({ name: 'GameScreen' })
    }
  },
  created() {
    this.$store.dispatch('notWinGame')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.resume {
  width: 200px;
}
</style>
