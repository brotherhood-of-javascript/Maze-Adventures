<template id="demo">
  <section class="section demo-main">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
        <items-window v-show="itemsWindow"/>
      </div>
    </div>
    <div class="rightcol align-left">
      <div class="menu-bord " v:onkeyup.esc='backTomainMenu'>
        <router-link to="/" class="button button-huge block-mobile">back to main menu</router-link>
      </div>
      <button class="button button-huge block-mobile" @click="getBoxInventory">Inventory</button>
      <Inventory v-show="this.$store.state.openInventory"></Inventory>
    </div>
    <div class="rightcol align-left">
     <div class="menu-bord ">
        <router-link to="/" class="button button-huge block-mobile">back to main menu</router-link>
      </div>
      <button class="button button-huge block-mobile" >Inventory</button>
    </div>
  </section>
</template>
<script>
import GameTerran from './GameTerran'
import Inventory from './Inventory'
import ItemsWindow from './ItemsWindow'

const globalKey = 'quickSave3'

export default {
  name: 'GameScreen',
  components: { GameTerran, Inventory, ItemsWindow },
  methods: {
    getBoxInventory(event) {
      return this.$store.dispatch('getBoxInventory')
    },
    quickSave(event) {
      if (event.keyCode === 120) {
        //  f9
        localStorage.save.setItem(globalKey, JSON.stringify(this.$store.state))
      }
      if (event.keyCode === 118) {
        //  f7
        this.$store.commit('createNewState', globalKey)
      }
    }
  },
  beforeCreate() {
    //  this.$store.commit('createNewState')
  },
  created() {
    window.addEventListener('keyup', this.quickSave)
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 27:
          this.$router.push({ name: 'MainMenu' })
      }
    })
    window.removeEventListener('keyup', event)
  },
  computed: {
    itemsWindow: function() {
      return this.$store.state.itemsWindow
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
.demo-main {
  display: flex;
}
.rightcol {
  width: 20%;
  padding: 0;
  margin: 0 auto;
}
</style>
