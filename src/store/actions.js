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
export const winGame = async ({ state, commit }) => {
  commit('trueWin')
}
export const notWinGame = async ({ state, commit }) => {
  commit('falseWin')
}
export const dialog = async ({ state, commit }, NPC) => {
  commit('ShowDialogWindow')
  commit('gnomeSpeak', { dialog: NPC.dialog, links: NPC.dialog[NPC.dialog.status].links, status: NPC.dialog.status })
  commit('drowConversation', {
    name: NPC.name,
    message: NPC.dialog[NPC.dialog.status].message,
    food: NPC.dialog.status === 4 ? NPC.dialog.food : ''
  })
}
export const dropItemsFromInventory = async ({ state, commit }, coords) => {
  commit('del', { type: 'inventory', xy: coords })
}
export const itemMoverToChest = async ({ state, commit }, { coords, from, to }) => {
  commit('moveToChest', {
    type: 'store',
    xy: findEmptyPlace(to),
    item: from[coords.x][coords.y]
  })
  commit('del', { type: 'inventory', xy: coords })
}
export const itemMoverToInventory = async ({ state, commit }, { coords, from, to }) => {
  commit('moveToInventory', {
    type: 'inventory',
    xy: findEmptyPlace(from),
    item: to[coords.x][coords.y]
  })
  commit('delchest', { type: 'store', xy: coords })
}
