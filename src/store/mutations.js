export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type].x = xy.x
  state[type].y = xy.y

  state.itemsWindow = false
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
}
export const hideOrShowItemWindow = state => {
  state.itemsWindow = !state.itemsWindow
}
export const hideOrShowInventory = state => {
  state.openInventory = !state.openInventory
}
export const createNewState = (state, nameKey) => {
  if (localStorage.getItem(nameKey)) {
    Object.assign(state, JSON.parse(localStorage.getItem(nameKey)))
  }
}

export const drawItemInInventory = (state, { type, xy, item }) => {
  state[type][xy.x][xy.y] = item
  state[type] = [...state[type]]
}
