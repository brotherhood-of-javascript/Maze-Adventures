<template>
    <div class="inventory">
        <ul class="inventory-maine" >
            <li v-for="(item, x) in drowBoxInventory" @click="choiceStore(true)" >
                <div  v-for="(i, y) in item" v-bind:class="x===chousedItem.x && y===chousedItem.y && whatInventory ? `section  ${i.class} choose`:`section  ${i.class}`"
                @mouseenter="getInformationItem(i.val)" @mouseleave="cleanItemInfo" @click="choice(x, y, i.name, i.val)"></div>
            </li>
        </ul>
        <div class="text-medium text-gray background-dark inventory-box">
            You have:{{ this.$store.state.totalWeight }} /{{ this.$store.state.herroWeight }} kilo
        </div>
        <button class="button button-primary button-big block-mobile save-btn " @click="itemDroper" v-show="!atTrasureChest">Drop</button>
        <button class="button button-primary button-big block-mobile save-btn " @click="itemDroper" v-show="atTrasureChest">{{whatInventory ? "Put In " : "Pick From " }}Chest</button>
        <ul class="inventory-maine" v-show="atTrasureChest" @click="choiceStore(false)">
            <li v-for="(item, x) in drawChest" >
                <div  v-for="(i, y) in item" v-bind:class="x===chousedItem.x && y===chousedItem.y && !whatInventory ? `section  ${i.class} choose`:`section  ${i.class}`"
                @mouseenter="getInformationItem(i.val)" @mouseleave="cleanItemInfo" @click="choice(x, y, i.name, i.val)"></div>
            </li>
        </ul>        
        <p :class= "classObject" v-show = "this.$store.state.fullBag" >{{ messege }} </p>
        <p :class= "classInfo" >{{ itemInfo.text }} <br> {{ itemInfo.weigth }} </p>
        <PopupMenu v-show="showPopup" @closer="showPopup = $event" @sendNo="dropOrNot = $event" :msg="`Do you want to Desroy this item ${chousedItem.name}`"/>
    </div>
</template>

<script>
import PopupMenu from './PopupNewGame'
export default {
  components: { PopupMenu },
  data: function() {
    return {
      inventory: this.$store.state.inventory,
      messege: 'Your bag will be is full! Try to find item with less weight',
      itemInfo: '',
      classObject: {
        'text-medium': true,
        'inventory-box': true,
        'badge-error': true
      },
      classInfo: {
        'text-medium': true,
        'inventory-box': true,
        'text-primary': true
      },
      chousedItem: { val: ' ' },
      showPopup: false,
      dropOrNot: false,
      whatInventory: true
    }
  },
  methods: {
    choice(x, y, name, val) {
      this.dropOrNot = false
      this.showPopup = false
      this.chousedItem = { x: x, y: y, name: name, val: val }
    },
    getInformationItem(val) {
      return (this.itemInfo = {
        text: this.$store.state.items[val].info,
        weigth:
          ' Weight  ' + this.$store.state.items[val].class + ' is: ' + this.$store.state.items[val].weight + ' kg!'
      })
    },
    cleanItemInfo(event) {
      return (this.itemInfo = '')
    },
    itemDroper() {
      const inventory = this.$store.state.inventory
      const chest = this.$store.state.items['9'].store

      if (this.chousedItem.val !== ' ' && !this.atTrasureChest) {
        this.showPopup = true
      } else if (this.whatInventory) {
        this.$store.dispatch('itemMoverToChest', { coords: this.chousedItem, from: inventory, to: chest })
      } else if (!this.whatInventory) {
        this.$store.dispatch('itemMoverToInventory', { coords: this.chousedItem, to: chest, from: inventory })
      }
      this.$store.commit('CalculateItems')
    },
    choiceStore(str) {
      this.whatInventory = str
    }
  },
  beforeUpdate: function() {
    if (this.dropOrNot) this.$store.dispatch('dropItemsFromInventory', this.chousedItem)
    this.$store.commit('CalculateItems')
    this.dropOrNot = false
  },
  computed: {
    drowBoxInventory() {
      return this.$store.getters.drowBoxInventory
    },
    drawChest() {
      return this.$store.getters.drawChest
    },
    atTrasureChest() {
      const terran = this.$store.state.terran
      const hero = this.$store.state.hero
      return terran[hero.x][hero.y] === '9'
    }
  }
}
</script>
<style scoped>
.inventory-box {
  padding: 10px 5px;
  max-width: 250px;
  color: white;
}
.inventory-maine {
  text-align: center;
  margin: 0 auto;
}
li {
  display: flex;
  max-width: 300px;
  margin: 0;
  padding: 0;
}
.section {
  width: 50px;
  height: 50px;
  background: transparent;
  border: 1px solid #18232f;
  padding: 0;
}
.gold {
  background-image: url('https://orig00.deviantart.net/9152/f/2015/187/2/b/apple_animation_logo_for_rainmeter_by_hekee-d8pte64.gif');
  background-color: #18232f;
  background-size: cover;
}
.diamond {
  background-image: url('http://img71.laughinggif.com/pic/HTTPS9tZWRpYS5naXBoeS5jb20vbWVkaWEvSUtCcmdXdmdsRXVJZy9naXBoeS5naWYlog.gif');
  background-repeat: no-repeat;
  background-color: #18232f;
  background-size: 100%;
}
.food {
  background-image: url('http://moziru.com/images/drawn-dougnut-transparent-background-5.gif');
  background-repeat: no-repeat;
  background-color: #18232f;
  background-size: 100%;
}
.mainTrasure {
  background-image: url('https://www.chitalnya.ru/upload/208/96353343315422.gif');
  background-repeat: no-repeat;
  background-color: #18232f;
  background-size: 100%;
}
.choose {
  border: 2px solid white;
}
.key {
  background-image: url('http://srorieltomsk.ru/upload/medialibrary/a54/8503418_5f8e8269.gif');
  background-repeat: no-repeat;
  background-size: 100%;
  background-color: #18232f;
}
</style>
