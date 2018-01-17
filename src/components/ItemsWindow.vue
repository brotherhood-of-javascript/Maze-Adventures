<template>
  <div class="over">
    <div class="text-huge text-white text-with-subtitle under">Congratilations you find {{item.name}}
      <div :class="item.class" class="picture"></div>
      Weight: {{item.weight}}
    </div>
  
  </div>
</template>
<script>
export default {
  computed: {
    item: function() {
      return this.$store.getters.itemGetter
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
  width: 500px;
  padding: 20px;
  background-color: #2c3e50;
}
</style>
