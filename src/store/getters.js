export const mapGetter = state =>
  state.terran.map((val, x) => val.map((val, y) => ({ id: `x=${x}-y=${y}`, class: state.items[val].class })))

export const drowBoxInventory = state =>
  state.inventory.map((val, i) =>
    val.map((val, y) => ({
      id: `${i}${y}`,
      weight: state.items[val].weight,
      quantity: 1,
      describe: 'some items',
      class: state.items[val].class,
      val: val
    }))
  )

export const itemGetter = state => state.items[state.terran[state.hero.x][state.hero.y]]

export const dialogGetter = state => state.items['8']
export const getYorQuestForNow = state => {
  console.log('getters', state.nameQuest)
  return state.quest[state.nameQuest]
  //return state.quest.name
}

export const globalKey = () => 'saveKey'
