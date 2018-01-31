<template class="Quest">
  <div class="Quest">
   <div class="text-huge text-white text-with-subtitle under"> 
       <h2>{{ nameQuest.name }}</h2>
      <div :class="nameQuest.class" class="picture"></div>
      <div>{{ nameQuest.badAnsver }}<br>{{ nameQuest[nameQuest.start].mess }}</div>
      <div :class="nameQuest.classPrize" v-show="nameQuest.getPrize" class="picture"></div>
      <div>
        <div v-for="(item, index) in nameQuest[nameQuest.start].options">
          <button class="button button-secondary block-mobile" @click="checkAnswers(item)">{{item}}</button>
        </div>
      </div>
      
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  computed: {
    nameQuest: function() {
      return this.$store.getters.getYorQuestForNow
    }
  },
  methods: {
    checkAnswers(item) {
      if (this.nameQuest[this.nameQuest.start].ansver === event.target.innerHTML) {
        this.$store.dispatch('putQustInfo', this.nameQuest)
        this.$store.dispatch('herroAnsvers', event.target.innerHTML)
        console.log('getters.drowBoxInventory', this.$store.getters.drowBoxInventory)
      } else {
        this.$store.dispatch('putQustbadAnsver', this.nameQuest)
        this.$store.dispatch('herroAnsvers', event.target.innerHTML)
      }
    }
  }
}
</script>
<style scoped>
.picture {
  margin: auto;
  width: 250px;
  height: 250px;
  background-color: #2c3e50;
}
.over {
  position: static;
  text-align: center;
  width: 50%;
  margin: auto;
}
.under {
  position: absolute;
  width: 600px;
  padding: 20px;
  background-color: #2c3e50;
}
</style>
