export const doSomeAction = async ({ commit, getters }) => {
  // TODO: some action
}
export const heroMove = async ({ state, commit }, heroCoordinates) => {
  commit('move', { type: 'terran', xy: heroCoordinates })
}
export const heroDelete = async ({ state, commit }, heroCoordinates) => {
  commit('del', { type: 'terran', xy: heroCoordinates })
}
