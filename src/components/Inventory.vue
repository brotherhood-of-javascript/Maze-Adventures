<template>
    <div class="inventory">
        <ul class="inventory-maine" >
            <li v-for="item in drowBoxInventory" >
                <div  v-for="i in item" :class="`section  ${i.class}`" @mouseenter="getInformationItem(i.val)" @mouseleave="cleanItemInfo" ></div>
            </li>
        </ul>
        <div class="text-medium text-gray background-dark inventory-box">
            You have:{{ this.$store.state.totalWeight }} /{{ this.$store.state.herroWeight }} kilo
        </div>
        <p :class= "classObject" v-show = "this.$store.state.fullBag" >{{ messege }} </p>
        <p :class= "classInfo" >{{ itemInfo.text }} <br> {{ itemInfo.weigth }} </p>
    </div>
</template>

<script>
export default {
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
      }
    }
  },
  methods: {
    getInformationItem(val) {
      return (this.itemInfo = {
        text: this.$store.state.items[val].info,
        weigth:
          ' Weight  ' + this.$store.state.items[val].class + ' is: ' + this.$store.state.items[val].weight + ' kg!'
      })
    },
    cleanItemInfo(event) {
      return (this.itemInfo = '')
    }
  },
  computed: {
    drowBoxInventory() {
      return this.$store.getters.drowBoxInventory
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
</style>
