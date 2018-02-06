export default function heroRunEvent(event) {
  const hero = this.$store.state.hero
  const terran = this.$store.state.terran
  const cantWalk = this.$store.state.cantWalk
  const pickableItems = this.$store.state.pickableItems
  const itemsToWin = this.$store.state.itemsToWin
  const items = this.$store.state.items
  const NPC = this.$store.state.NPC
  const bot = this.$store.state.bot
  const quest = this.$store.state.quest.number

  switch (event.keyCode) {
    case 40: // down
      if (NPC.includes(terran[hero.x + 1][hero.y])) {
        this.$store.dispatch('dialog', items[terran[hero.x + 1][hero.y]])
      }
      if (bot.includes(terran[hero.x + 1][hero.y])) {
        this.$store.dispatch('fight', items[terran[hero.x + 1][hero.y]])
      }
      // Quest starting
      if (quest.includes(terran[hero.x + 1][hero.y])) {
        this.$store.dispatch('getQuest', items[terran[hero.x + 1][hero.y]].class)
      }
      if (cantWalk.includes(terran[hero.x + 1][hero.y])) return
      this.$store.dispatch('heroMove', { x: hero.x + 1, y: hero.y })
      break

    case 38: // upp
      if (NPC.includes(terran[hero.x - 1][hero.y])) {
        this.$store.dispatch('dialog', items[terran[hero.x + 1][hero.y]])
      }
      if (bot.includes(terran[hero.x - 1][hero.y])) {
        this.$store.dispatch('fight', items[terran[hero.x + 1][hero.y]])
      }
      // Quest starting
      if (quest.includes(terran[hero.x - 1][hero.y])) {
        this.$store.dispatch('getQuest', items[terran[hero.x - 1][hero.y]].class)
      }

      if (cantWalk.includes(terran[hero.x - 1][hero.y])) return
      this.$store.dispatch('heroMove', { x: hero.x - 1, y: hero.y })
      break
    case 39: //  right
      if (NPC.includes(terran[hero.x][hero.y + 1])) {
        this.$store.dispatch('dialog', items[terran[hero.x][hero.y + 1]])
      }
      if (bot.includes(terran[hero.x][hero.y + 1])) {
        this.$store.dispatch('fight', items[terran[hero.x][hero.y + 1]])
      }
      // Quest starting
      if (quest.includes(terran[hero.x][hero.y + 1])) {
        this.$store.dispatch('getQuest', items[terran[hero.x][hero.y + 1]].class)
      }
      if (cantWalk.includes(terran[hero.x][hero.y + 1])) return
      this.$store.dispatch('heroMove', { x: hero.x, y: hero.y + 1 })
      break
    case 37: // left
      if (NPC.includes(terran[hero.x][hero.y - 1])) {
        this.$store.dispatch('dialog', items[terran[hero.x][hero.y - 1]])
      }
      if (bot.includes(terran[hero.x][hero.y - 1])) {
        this.$store.dispatch('fight', items[terran[hero.x][hero.y - 1]])
      }
      // Quest starting
      if (quest.includes(terran[hero.x][hero.y - 1])) {
        this.$store.dispatch('getQuest', items[terran[hero.x][hero.y - 1]].class)
      }
      if (cantWalk.includes(terran[hero.x][hero.y - 1])) return
      this.$store.dispatch('heroMove', { x: hero.x, y: hero.y - 1 })
      break
    case 13: // enter
      if (itemsToWin.includes(terran[hero.x][hero.y])) {
        this.$store.dispatch('winGame')
        this.$router.push({ name: 'DevelopersScreen' })
      }
      if (pickableItems.includes(terran[hero.x][hero.y])) this.$store.dispatch('pickItem')
      break
  }
}
export function heroRun1() {}
