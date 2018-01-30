<template>
  <div class="over">
    <div class="text-huge text-white text-with-subtitle under">{{NPC.name}} 
      <div :class="NPC.class" class="picture"></div>
      {{NPC.dialog[this.$store.state.items['8'].dialog.status].message}}{{NPC.dialog.status === 4 ? NPC.dialog.food:''}}
    </div>
  
  </div>
</template>
<script>
export default {
  computed: {
    NPC: function() {
      return this.$store.getters.dialogGetter
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
