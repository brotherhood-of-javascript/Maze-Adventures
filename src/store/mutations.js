export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type] = { x: xy.x, y: xy.y }
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
