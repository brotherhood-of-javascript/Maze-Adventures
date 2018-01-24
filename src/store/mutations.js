export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type].x = xy.x
  state[type].y = xy.y
  state.itemsWindow = false
  state.dialogWindow = false
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
}
export const saveNewState = (state, { key, value }) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const removeSavedState = (state, name) => {
  localStorage.removeItem(name)
}
export const loadNewState = (state, {key, value}) => {
  JSON.parse(localStorage.getItem(key, JSON.stringify(value)))
}
export const hideOrShowItemWindow = state => {
  state.itemsWindow = !state.itemsWindow
}
export const ShowDialogWindow = state => {
  state.dialogWindow = true
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
  // collecting food
  if (state[type][xy.x][xy.y] === '6') {
    state.items['8'].dialog.food++
  }
  // stop collect
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
  if (status === 0 || status === 1) {
    dialog.status = links[0]
  } else if (dialog.food === 0) {
    dialog.status = links[2]
  } else if (dialog.food < 3) {
    dialog.status = links[1]
  } else if (dialog.food === 3) {
    if (dialog.status === 3) state.cantWalk[3] = ''
    dialog.status = links[0]
  }
}
export const loaderGame = (state, { loadedGame }) => {
  Object.assign(state, JSON.parse(loadedGame))
}
