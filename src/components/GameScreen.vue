<template id="demo" class="GameScreen">
   <section class="section demo-main "> 
    <div class="section background-dark">
      <div class="container text-center">
        <h3 class="text-huge text-white text-with-subtitle">We can be heroes</h3>
        <h4 class="text-big text-gray">just for one day</h4>
        <GameTerran></GameTerran>
        <items-window v-show="itemsWindow"/>
        <dialog-window v-show="dialogWindow"/>
        <fight-window v-show="this.$store.state.fightWindow"/>
        <quest v-if="questWindow"></quest>
      </div>
    </div>
    <div class="rightcol ">
      <div class="menu-bord " v:onkeyup.esc='backTomainMenu'>
        <router-link to="/" class="button button-huge block-mobile">back to main menu</router-link>
      </div>
      <button class="button button-huge block-mobile" @click="getBoxInventory">Inventory</button>
      <Inventory v-show="this.$store.state.openInventory"></Inventory>
      <jurnal-conversation></jurnal-conversation>
      <jurnal-quests></jurnal-quests>
    </div>
    <PopupNewGame v-show="f5"  :msg="message" route="MainMenu" @sendNo="f5 = $event"></PopupNewGame>
  </section>
</template>
<script>
import GameTerran from './GameTerran'
import Inventory from './Inventory'
import ItemsWindow from './ItemsWindow'
import PopupNewGame from './PopupNewGame'
import DialogWindow from './DialogWindow'
import JurnalConversation from './JurnalConversation'
import fightWindow from './fightWindow'
import Quest from './Quest'
import JurnalQuests from './JurnalQuests'

const globalKey = 'quickSave3'
export default {
  name: 'GameScreen',
  data() {
    return {
      message: '',
      f5: false
    }
  },
  components: {
    GameTerran,
    Inventory,
    ItemsWindow,
    PopupNewGame,
    DialogWindow,
    JurnalConversation,
    Quest,
    JurnalQuests,
    fightWindow
  },
  methods: {
    getBoxInventory(event) {
      return this.$store.dispatch('getBoxInventory')
    },
    quickSave(event) {
      if (event.keyCode === 120) {
        //  f9
        localStorage.setItem(globalKey, JSON.stringify(this.$store.state))
      }

      if (event.keyCode === 118) {
        //  f7
        this.$store.commit('createNewState', globalKey)
      }

      if (event.keyCode === 116) {
        event.preventDefault()
        this.f5 = true
        this.message = `Are you sure? Are you really want reload page?
        If you push ' yes' you come back on << main menu >>!`
      }
    }
  },
  created() {
    window.addEventListener('keyup', this.quickSave)
    window.addEventListener('keydown', this.quickSave)
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
    },
    dialogWindow: function() {
      return this.$store.state.dialogWindow
    },
    fightWindow: function() {
      return this.$store.state.fightWindow
    },
    questWindow: function() {
      return this.$store.state.quest.window
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo-main {
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  margin: 0 auto;
  max-width: 1600px;
}
.rightcol {
  padding: 0;
  margin-left: 20px;
  text-align: left;
  max-width: 400px;
}
.button {
  width: 100%;
  margin: 5px 0;
}
</style>
