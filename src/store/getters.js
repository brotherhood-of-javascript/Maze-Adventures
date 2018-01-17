const fillField = field => {
  switch (field) {
    case '0':
      return 'tree'
    case '1':
      return 'wall'
    case '2':
      return 'monster'
    case '3':
      return 'hero'
    case '4':
      return 'diamond'
    case '5':
      return 'gold'
    case '6':
      return 'food'
    case ' ':
      return ' '
  }
}

const setClassInveroment = value => {
  switch (value) {
    case '4':
      return 'diamond'
    case '5':
      return 'gold'
    case '6':
      return 'food'
    case ' ':
      return ' '
  }
}
export const mapGetter = state =>
  state.terran.map((val, x) => val.map((val, y) => ({ id: `x=${x}-y=${y}`, class: fillField(val) })))

export const drowBoxInventory = state =>
<<<<<<< HEAD
  state.inventory.map((val, i) => val.map((val, y) => ({ id: `${i}${y}`, weight: setClassInveroment(val), quantity: 1, describe: 'some items', class: setClassInveroment(val) })))
=======
  state.inventory.map((val, i) =>
    val.map((val, y) => ({
      id: `${i}${y}`,
      weight: setClassInveroment(val),
      quantity: 1,
      describe: 'some items',
      class: setClassInveroment(val)
    }))
  )

export const itemGetter = state => state.items[state.terran[state.hero.x][state.hero.y]]
>>>>>>> master
