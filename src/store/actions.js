export const heroMove = async ({ commit, state }, heroCoords) => {
  commit('move', { type: 'hero', xy: { x: heroCoords.x, y: heroCoords.y } })
  commit('hideDialog', { type: 'showHideDialog' })
}

export const pickupItem = async ({ state, commit }) => {
  if (!state.showHideDialog) {
    commit('showDialog', { type: 'showHideDialog' })
  } else {
    commit('del', { type: 'terran', xy: state.hero })
    commit('hideDialog', { type: 'showHideDialog' })
  }
}
