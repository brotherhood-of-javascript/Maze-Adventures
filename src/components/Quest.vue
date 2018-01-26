<template>
  <div class="Quest">
   <div class="text-huge text-white text-with-subtitle under"> 
       <h2>{{ nameQuest.name}}</h2><!-- {{this.$store.state.items['8'].name}}  -->
      <div :class="nameQuest.class" class="picture"></div>
      <div>{{ nameQuest[start]}}</div>
      <!-- {{this.$store.state.items['8'].dialog[this.$store.state.items['8'].dialog.status].message}}{{this.$store.state.items['8'].dialog.status===4?this.$store.state.items['8'].dialog.food:''}} -->
    </div>
  
  </div>
</template>
<script>
export default {
  data() {
    return {
      // nameQuest: this.$store.getters.getYorQuestForNow,
      quest: this.$store.state.quest
    }
  },
  computed: {
    nameQuest: function() {
      return this.$store.getters.getYorQuestForNow
    }
  }
}
</script>
<style scoped>
.picture {
  margin: auto;
  width: 250px;
  height: 250px;
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
