<template>
        <ul>
            <div v-for="(map, x) in drawMap">
                <li v-for="(n, y) in map" :id="n.id" :class="n.sqare.ground">
                  <img :src="n.sqare.img" v-if="hero.x === x && hero.y === y">
                </li>
            </div>
        </ul>
</template>

<script>
export default {
  created: function() {
    window.addEventListener('keydown', event => {
      const hero = this.$store.state.hero
      switch (event.keyCode) {
        case 40:
          if (this.$store.state.terran[hero.x + 1][hero.y] !== ' ') return
          this.$store.dispatch('heroDelete')
          this.$store.dispatch('heroMove', { x: hero.x + 1, y: hero.y })
          this.$store.dispatch('heroDraw')
          break
        case 38:
          if (this.$store.state.terran[hero.x - 1][hero.y] !== ' ') return
          this.$store.dispatch('heroDelete')
          this.$store.dispatch('heroMove', { x: hero.x - 1, y: hero.y })
          this.$store.dispatch('heroDraw')
          break
        case 39:
          if (this.$store.state.terran[hero.x][hero.y + 1] !== ' ') return
          this.$store.dispatch('heroDelete')
          this.$store.dispatch('heroMove', { x: hero.x, y: hero.y + 1 })
          this.$store.dispatch('heroDraw')
          break
        case 37:
          if (this.$store.state.terran[hero.x][hero.y - 1] !== ' ') return
          this.$store.dispatch('heroDelete')
          this.$store.dispatch('heroMove', { x: hero.x, y: hero.y - 1 })
          this.$store.dispatch('heroDraw')
          break
      }
    })
    this.$store.dispatch('heroDraw')
  },
  computed: {
    drawMap() {
      return this.$store.getters.mapGetter
    },
    hero() {
      return this.$store.state.hero
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  /* padding: 10px; */
  /* border: solid 1px black; */
  float: left;
  width: 45px;
  height: 45px;
  text-align: center;
  padding: auto;
  margin-bottom: 0;
  background-repeat: no-repeat;
  background-size: 45px 45px;
  background-color: white;
}
.wall {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4nlHGm-bnqkEuBVhDAqSozdW2arCSC8FOru0vnPN_hzs1sIjl7Q');
}
.tree {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpzy1Pf7lkQkCzJ7J1GuxbVPZzyMRaK1Xkuw_bIyKLk3ZSPCk2zQ');
}
.monster {
  background-image: url('http://www.fright-bytes.com/scary-halloween-animations/monsters/monster1b.gif');
}
.hero {
  background-image: url('https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif');
}
.way {
  background-image: url('https://t4.ftcdn.net/jpg/01/07/76/85/240_F_107768523_jtL7cY9ajSRuTJmCfj4SAhTF8cebX317.jpg');
}

img {
  width: 100%;
  height: 100%;
}
</style>
