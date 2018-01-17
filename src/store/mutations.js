export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type] = { x: xy.x, y: xy.y }
<<<<<<< HEAD
=======
  state.itemsWindow = false
>>>>>>> master
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
}
<<<<<<< HEAD
export const hideOrShowInventory = (state) => {
  state.openInventory = !state.openInventory
}
export const createNewState = (state, name) => {
  if (localStorage.getItem(name)) {
    Object.assign(state, JSON.parse(localStorage.getItem(name)))
  }
=======
export const hideOrShowItemWindow = state => {
  state.itemsWindow = !state.itemsWindow
}
export const hideOrShowInventory = state => {
  state.openInventory = !state.openInventory
}
export const createNewState = state => {
  if (localStorage.getItem('quickSave')) {
    Object.assign(state, JSON.parse(localStorage.getItem('quickSave')))
  }
}

export const drawItemInInventory = (state, { type, xy, item }) => {
  state[type][xy.x][xy.y] = item
  state[type] = [...state[type]]
>>>>>>> master
}
