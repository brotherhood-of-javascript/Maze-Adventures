<template>
  <div class="JurnalConversation">
        <button class="button button-huge block-mobile" @click="openJurnalConversation">Jurnal Conversation</button>
        <section class="box-jurnal" v-show="open">
            <h2 >conversation:</h2>
            <div v-for = "item in this.$store.state.jurnalConversation" :class="item.name" class="dialog">
                <h3 class="title">{{ item.name}}:</h3>
                <p class="text">{{ item.message}}</p>
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
  max-width: 300px;
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
.dialog {
  margin: 5px 0;
  padding: 5px;
  width: 100%;
  max-width: 300px;
  text-align: left;
}
.text {
  width: 100%;
  max-width: 300px;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
}
.title {
  font-size: 20px;
  line-height: 22px;
  padding-bottom: 5px;
}
.Cat {
  background-color: #9b59b6;
}
.Gnome {
  background-color: #4caf50;
}
.hero {
  background-color: #64829f;
}
</style>
