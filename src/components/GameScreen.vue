<template id="demo">
  <section class="section demo-main">
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
<<<<<<< HEAD
      </div>
    </div>
    <div class="rightcol align-left">
      <button 
      class="button button-huge block-mobile" 
      @click="getBoxInventory"
      >Inventory</button>
      <Inventory 
      v-show="this.$store.state.openInventory"
      >
      </Inventory>
=======
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

>>>>>>> master
    </div>
  </section>
</template>

<script>
import GameTerran from './GameTerran'
import Inventory from './Inventory'
<<<<<<< HEAD
=======
import ItemsWindow from './ItemsWindow'
>>>>>>> master

const globalKey = 'quickSave'

export default {
  name: 'GameScreen',
<<<<<<< HEAD
  components: { GameTerran, Inventory },
=======
  components: { GameTerran, Inventory, ItemsWindow },
>>>>>>> master
  methods: {
    getBoxInventory(event) {
      return this.$store.dispatch('getBoxInventory')
    },
    quickSave(event) {
      console.log('event.keyCode', event.keyCode)
      if (event.keyCode === 120) {
        //  f9
        localStorage.setItem(globalKey, JSON.stringify(this.$store.state))
      }
      if (event.keyCode === 118) {
        //  f7
<<<<<<< HEAD
        this.$store.commit('createNewState', globalKey)
      }
    }
  },
  created() {
    window.addEventListener('keyup', this.quickSave)
=======
        this.$store.commit('createNewState')
      }
    }
  },
  beforeCreate() {
    //  this.$store.commit('createNewState')
  },
  created() {
    window.addEventListener('keyup', this.quickSave)
  },
  computed: {
    itemsWindow: function() {
      return this.$store.state.itemsWindow
    }
>>>>>>> master
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
