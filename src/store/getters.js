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
      name: state.items[val].name,
      val: val
    }))
  )

export const itemGetter = state => state.items[state.terran[state.hero.x][state.hero.y]]

export const dialogGetter = state => state.items['8']
export const monsterFreddy = state => state.items['2']
export const getYorQuestForNow = state => {
  return state.quest[state.nameQuest]
}
export const globalKey = () => 'saveKey'

export const drawChest = state =>
  state.items['9'].store.map((val, i) =>
    val.map((val, y) => ({
      id: `${i}${y}`,
      weight: state.items[val].weight,
      quantity: 1,
      describe: 'some items',
      class: state.items[val].class,
      name: state.items[val].name,
      val: val
    }))
  )
