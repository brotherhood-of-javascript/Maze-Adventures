export const heroDelete = async ({ state, commit }) => {
  commit('del', { type: 'terran', xy: state.hero })
}

export const heroMove = async ({ commit }, heroCoords) => {
  commit('move', { type: 'hero', xy: { x: heroCoords.x, y: heroCoords.y } })
}

export const heroDraw = async ({ state, commit }) => {
  commit('draw', { type: 'terran', xy: state.hero })
}
