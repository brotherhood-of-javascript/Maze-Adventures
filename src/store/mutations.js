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
export const saveNewState = (state, name) => {
  localStorage.setItem(name, JSON.stringify(state))
}
export const removeSavedState = (state, name) => {
  localStorage.removeItem(name)
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
export const CalculateItems = (state, num) => {
  state.totalWeight += state.items[num].weight
}
export const checkingWaightBag = (state, num) => {
  let culWeight = state.totalWeight + state.items[num].weight
  if (culWeight > state.herroWeight) {
    state.fullBag = true
  } else {
    state.fullBag = false
  }
}
export const getShowOtherMenuNow = state => {
  if (state.start === false) {
    Object.assign(state, JSON.parse(state.initialState))
    console.log(state.initialState)
  }
  state.start = false
  state.initialState = JSON.stringify(state)
}
export const trueWin = state => {
  state.gameWinned = true
}
export const falseWin = state => {
  state.gameWinned = false
}
export const gnomeSpeak = (state, { dialog, links, status }) => {
  if (status === 1) {
    dialog.status = links[0]
  } else if (status === 2 && dialog.food < 3) {
    dialog.status = links[1]
    dialog[links[1]].message += dialog.food
  } else if (status === 4 && dialog.food < 3) {
    dialog.status = links[0]
    dialog[links[0]].message += dialog.food
    dialog.food++
  } else if (status === 4 && dialog.food === 3) {
    dialog.status = links[1]
  }
}
