export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type] = { x: xy.x, y: xy.y }
}
export const hideDialog = (state, { type }) => {
  state[type] = false
}
export const showDialog = (state, { type }) => {
  state[type] = true
}
