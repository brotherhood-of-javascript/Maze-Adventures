<template>
  <div class="JurnalQuests">
      <button class="button button-huge block-mobile" @click="openJurnalQuests">Jurnal Quests</button>
      <section class="box-jurnal" v-show="open">
            <h2>Jurnal Quests:</h2>
            <ul>
              <li class="list" v-for="(value, key) in this.$store.state.quest.status">{{key}} : <span>{{value}}</span></li>
            </ul>
      </section>
  </div>
</template>
<script>
export default {
  name: 'JurnalQuests',
  data() {
    return {
      open: false
    }
  },
  methods: {
    openJurnalQuests() {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
h2 {
  margin-bottom: 10px;
  padding: 3px;
  text-transform: uppercase;
  border-bottom: 2px solid #64829f;
}
.button {
  width: 100%;
  margin: 5px 0;
}
.box-jurnal {
  color: white;
  width: 100%;
  height: 300px;
  background-color: #18232f;
  padding: 10px;
  overflow: auto;
  text-align: center;
}
.list {
  font-size: 14px;
  text-transform: uppercase;
  text-align: left;
  margin-bottom: 7px;
}
.list span {
  text-transform: lowercase;
  font-size: 16px;
}
</style>
