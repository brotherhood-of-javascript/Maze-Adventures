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
  }
}

const setClassInveroment = value => {
  switch (value) {
    case '0':
      return 'gold'
    case '1':
      return 'diamond'
    case '':
      return ''
    case '2':
      return 'food'
  }
}
export const mapGetter = state =>
  state.terran.map((val, x) => val.map((val, y) => ({ id: `x=${x}-y=${y}`, class: fillField(val) })))

export const drowBoxInventory = state =>
  state.inventory.map((val, i) => val.map((val, y) => ({ id: `${i}${y}`, weight: setClassInveroment(val), quantity: 1, describe: 'some items', class: setClassInveroment(val) })))
