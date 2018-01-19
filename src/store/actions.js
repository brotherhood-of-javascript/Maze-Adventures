export const heroDelete = async ({ state, commit }) => {
  commit('del', { type: 'terran', xy: state.hero })
}

export const heroMove = async ({ commit }, heroCoords) => {
  commit('move', { type: 'hero', xy: { x: heroCoords.x, y: heroCoords.y } })
}

export const heroDraw = async ({ state, commit }) => {
  commit('draw', { type: 'terran', xy: state.hero })
}

export const getBoxInventory = async ({ state, commit }) => {
  commit('hideOrShowInventory')
}
const findEmptyPlace = inventory => {
  for (let x = 0; x < inventory.length; x++) {
    for (let y = 0; y < inventory[x].length; y++) {
      if (inventory[x][y] === ' ') return { x: x, y: y }
    }
  }
}

export const pickItem = async ({ state, commit }) => {
  commit('hideOrShowItemWindow')
  if (!state.itemsWindow) {
    commit('checkingWaightBag', state.terran[state.hero.x][state.hero.y])
    if (!state.fullBag) {
      commit('drawItemInInventory', {
        type: 'inventory',
        xy: findEmptyPlace(state.inventory),
        item: state.terran[state.hero.x][state.hero.y]
      })
      commit('CalculateItems', state.terran[state.hero.x][state.hero.y])
      commit('del', { type: 'terran', xy: state.hero })
    }
  }
}

export const getShowOtherMenuNow = async ({ state, commit }) => commit('getShowOtherMenuNow')
