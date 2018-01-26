<template>
  <div class="JurnalConversation">
        <button class="button button-huge block-mobile" @click="openJurnalConversation">Jurnal Conversation</button>
        <section class="box-jurnal" v-show="open">
            <h2>This you can see all your conversation:</h2>
            <div v-for = "item in this.$store.state.jurnalConversation" :class="item.name">
                <h3>{{ item.name}}:</h3>
                <p>{{ item.message}} {{ item.food }}</p>
            </div> 
        </section>
  </div>
</template>
<script>
export default {
  name: 'JurnalConversation',
  data() {
    return {
      open: false
    }
  },
  methods: {
    openJurnalConversation() {
      this.open = !this.open
    }
  }
}
</script>
<style scoped>
h2 {
  font-size: 18px;
  line-height: 25px;
  max-width: 300px;
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
.Gnome {
  background-color: #4caf50;
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.Gnome p {
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
.Gnome h3 {
  font-size: 20px;
  line-height: 22px;
  padding-bottom: 5px;
}
</style>
