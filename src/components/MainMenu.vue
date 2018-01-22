<template>
  <div class="section">
   <h2 class="text-big text-gray">Maze Adventures</h2>
   <div @click="getShowOtherMenu">  
    <!-- <div> -->
      <router-link to="/game" class="button button-huge block-mobile" >New Game</router-link>
   </div>
    <div>
      <router-link to="/game" class="button button-huge block-mobile resume button-red" v-show="!this.$store.state.start">Resume</router-link>
   </div>
   <div>
      <router-link to="/save" class="button button-huge block-mobile " v-show="!this.$store.state.start">Save Game</router-link>
   </div>
   <div>
      <router-link to="/load" class="button button-huge block-mobile" v-show="!this.$store.state.start">Load Game</router-link>
   </div>
   <div>
      <router-link to="/developers" class="button button-huge block-mobile">Developers</router-link>
   </div>

  </div>
</template>

<script>
export default {
  name: 'MainMenu',
  methods: {
    getShowOtherMenu() {
      return this.$store.dispatch('getShowOtherMenuNow')
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
