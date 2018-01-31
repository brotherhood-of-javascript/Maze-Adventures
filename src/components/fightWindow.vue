<template>
  <div class="battlewind container">
    <h2 class="text-gray title-save-load-menu">Battle Game</h2>
    <div class="row">
      <div class="col-xs-6 col-md-6 hero-block">
        <h1 class="text-center">Hero</h1>
        <div :class="bot.target" class="photo-monster">

        </div>
        <div class="healthbar">
          <div class="healthbar text-center">
          </div>
        </div>
      </div>
      <div class="col-xs-6 col-md-6 hero-block">
        <h1 class="text-center">{{bot.name}} </h1>
        <div class="healthbar">
          <div :class="bot.class" class="photo-monster">

          </div>
          <div class="healthbar text-center">
          </div>
        </div>
      </div>
      <div class="result-battle">
       <span class="text-result text-center">{{bot.fight[bot.fight.statusOfWin].message}} </span>
      </div>
      <div class="aligner-space-around bottom-btn">
        <button class="button button-primary block-mobile" @click="getNoAnsver">End Battle</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'fight-window',
    methods: {
      getNoAnsver(event) {
        // this.$emit('sendNo', false)
        this.$store.commit('showFightWindow')
      }
    },
    computed: {
      bot: function() {
        return this.$store.getters.monsterFreddy
      }
    }
  }
</script>

<style scoped>
  .battlewind {
    position: absolute;
    top: 45%;
    left: 39%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 927px;
    height: 687px;
    background: #18232f;
    color: white;
    padding: 30px;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-transform: uppercase;
    line-height: 30px;
    border: 0;
    vertical-align: middle;
  }
  .result-battle {
    padding: 100px 0 60px 0;
  }
  .text-result {
    font-size: 34px;
    color: red;
  }
  .photo-monster {
    margin: auto;
    width: 262px;
    height: 200px;
  }
</style>

