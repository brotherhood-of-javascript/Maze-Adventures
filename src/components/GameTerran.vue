<template>
        <ul>
            <div v-for="(arr, x) in drawMap">
                <li v-for="(val, y) in arr" :id="val.id" :class="val.class"><img :src="img" v-if="hero.x===x && hero.y===y"></li>
            </div>
        </ul>
</template>

<script>
export default {
  created: function() {
    window.addEventListener('keydown', event => {
      const hero = this.$store.state.hero
      const terran = this.$store.state.terran
      const cantWalk = this.$store.state.cantWalk
      const pickableItems = this.$store.state.pickableItems
      const itemsToWin = this.$store.state.itemsToWin
      const items = this.$store.state.items
      const NPC = this.$store.state.NPC

      switch (event.keyCode) {
        case 40:
          if (NPC.includes(terran[hero.x + 1][hero.y])) {
            this.$store.dispatch('dialog', items[terran[hero.x + 1][hero.y]])
          }
          if (cantWalk.includes(terran[hero.x + 1][hero.y])) return
          this.$store.dispatch('heroMove', { x: hero.x + 1, y: hero.y })
          break
        case 38:
          if (NPC.includes(terran[hero.x - 1][hero.y])) {
            this.$store.dispatch('dialog', items[terran[hero.x + 1][hero.y]])
          }
          if (cantWalk.includes(terran[hero.x - 1][hero.y])) return
          this.$store.dispatch('heroMove', { x: hero.x - 1, y: hero.y })
          break
        case 39:
          if (NPC.includes(terran[hero.x][hero.y + 1])) {
            this.$store.dispatch('dialog', items[terran[hero.x][hero.y + 1]])
          }
          if (cantWalk.includes(terran[hero.x][hero.y + 1])) return
          this.$store.dispatch('heroMove', { x: hero.x, y: hero.y + 1 })
          break
        case 37:
          if (NPC.includes(terran[hero.x][hero.y - 1])) {
            this.$store.dispatch('dialog', items[terran[hero.x][hero.y - 1]])
          }
          if (cantWalk.includes(terran[hero.x][hero.y - 1])) return
          this.$store.dispatch('heroMove', { x: hero.x, y: hero.y - 1 })
          break
        case 13:
          if (itemsToWin.includes(terran[hero.x][hero.y])) {
            this.$store.dispatch('winGame')
            this.$router.push({ name: 'DevelopersScreen' })
          }
          if (pickableItems.includes(terran[hero.x][hero.y])) this.$store.dispatch('pickItem')
          break
      }
    })
  },
  computed: {
    drawMap() {
      return this.$store.getters.mapGetter
    },
    hero() {
      return this.$store.state.hero
    }
  },
  data: function() {
    return { img: this.$store.state.hero.img }
  }
}
</script>
<style scoped>
li {
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
</style>
