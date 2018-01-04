export const move = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
}
