<template>
        <ul>
            <div v-for="x in drawMap">
                <li v-for="n in x" :id="n.id" :class="n.class"  v-on:click="doWork($event)"></li>
            </div>
        </ul>
</template>

<script>
export default {
  data() {
    return {
      hero: { x: 8, y: 7 },
      fillField: field => {
        switch (field) {
          case '0':
            return 'tree'
          case '1':
            return 'wall'
          case '2':
            return 'monster'
          case '3':
            return 'hero'
        }
      },
      drawMap1: () => {
        return this.$store.getters.mapGetter
      }
    }
  },
  methods: {
    doWork(e) {
      console.log(e.target)
      this.$store.dispatch('heroMove', { x: this.hero.x, y: this.hero.y })
      this.drawMap1()
    }
  },
  created: function() {
    window.addEventListener('keyup', event => {
      switch (event.keyCode) {
        case 40:
          if (this.$store.state.terran[this.hero.x + 1][this.hero.y] !== ' ') return
          this.$store.dispatch('heroDelete', { x: this.hero.x, y: this.hero.y })
          this.hero.x++
          this.$store.dispatch('heroMove', { x: this.hero.x, y: this.hero.y })
          break
        case 38:
          if (this.$store.state.terran[this.hero.x - 1][this.hero.y] !== ' ') return
          this.$store.dispatch('heroDelete', { x: this.hero.x, y: this.hero.y })
          this.hero.x--
          this.$store.dispatch('heroMove', { x: this.hero.x, y: this.hero.y })
          break
        case 39:
          if (this.$store.state.terran[this.hero.x][this.hero.y + 1] !== ' ') return
          this.$store.dispatch('heroDelete', { x: this.hero.x, y: this.hero.y })
          this.hero.y++
          this.$store.dispatch('heroMove', { x: this.hero.x, y: this.hero.y })
          break
        case 37:
          if (this.$store.state.terran[this.hero.x][this.hero.y - 1] !== ' ') return
          this.$store.dispatch('heroDelete', { x: this.hero.x, y: this.hero.y })
          this.hero.y--
          this.$store.dispatch('heroMove', { x: this.hero.x, y: this.hero.y })
          break
      }
    })
  },
  computed: {
    drawMap() {
      return this.$store.getters.mapGetter
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  padding: 10px;
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
</style>
