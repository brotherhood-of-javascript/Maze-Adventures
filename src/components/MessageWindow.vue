<template>
  <section class="section">
    <div>
        <div class="text-huge text-white text-with-subtitle overwindow">
          <p>Congratulations you found {{items.name}}</p>
          <div class="bigitem"><img :src="items.pic"/> </div>
          <p>Weight {{items.weight}}kg</p>
          <p class="smalltxt">press push ENTER to pickup</p>
          </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    items: function() {
      return this.$store.state.items[this.$store.state.terran[this.$store.state.hero.x][this.$store.state.hero.y]]
    }
  }
}
</script>

<style scoped>
div {
  position: static;
  text-align: center;
  width: 50%;
  margin: auto;
}
.bigitem {
  height: 200px;
  width: 200px;
}
.overwindow {
  position: absolute;
  width: 500px;
  padding: 20px;
  background-color: #2c3e50;
}
img {
  width: 100%;
  height: 100%;
}
.smalltxt {
  font-size: 20px;
}
</style>
