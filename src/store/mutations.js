export const draw = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = '3'
  state[type] = [...state[type]]
}
export const move = (state, { type, xy }) => {
  state[type].x = xy.x
  state[type].y = xy.y
  state.itemsWindow = false
  state.dialogWindow = false
  state.quest.window = false
}
export const del = (state, { type, xy }) => {
  state[type][xy.x][xy.y] = ' '
  state[type] = [...state[type]]
  state.items['8'].dialog.food = state.inventory.reduce((sum, row) => {
    row.forEach(val => (val === '6' ? sum++ : ''))
    return sum
  }, 0)
}
export const delchest = (state, { type, xy }) => {
  state.items['9'][type][xy.x][xy.y] = ' '
  state.items['9'][type] = [...state.items['9'][type]]
}
export const saveNewState = (state, { key, value }) => {
  localStorage.setItem(key, JSON.stringify(value))
}
export const removeSavedState = (state, name) => {
  localStorage.removeItem(name)
}
export const loadNewState = (state, { key, value }) => {
  JSON.parse(localStorage.getItem(key, JSON.stringify(value)))
}
export const hideOrShowItemWindow = state => {
  state.itemsWindow = !state.itemsWindow
}
export const ShowDialogWindow = state => {
  state.dialogWindow = true
}
export const showFightWindow = state => {
  state.fightWindow = !state.fightWindow
}
export const showQuestWindow = state => {
  state.quest.window = true
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
  state.items['8'].dialog.food = state.inventory.reduce((sum, row) => {
    row.forEach(val => (val === '6' ? sum++ : ''))
    return sum
  }, 0)
  // stop collect
  state[type] = [...state[type]]
}
export const CalculateItems = state => {
  state.totalWeight = state.inventory.reduce((sum, row) => {
    row.forEach(val => {
      sum += state.items[val].weight
    })
    return sum
  }, 0)
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
  } else if (dialog.food >= 3) {
    state.inventory = state.inventory.map(row => row.map(val => (val === '6' ? ' ' : val)))
    if (dialog.status === 3) state.cantWalk[3] = ''
    dialog.status = links[0]
  }
}
export const resultFight = (state, { fight, links, statusOfWin }) => {
  statusOfWin = Math.round(Math.random())
  if (statusOfWin === 0) {
    fight.statusOfWin = links[0]
  } else if (statusOfWin === 1) {
    fight.statusOfWin = links[1]
  }
  console.log(statusOfWin)
}
export const loaderGame = (state, { loadedGame }) => {
  Object.assign(state, JSON.parse(loadedGame))
}
export const drowConversation = (state, dialog) => {
  state.jurnalConversation.push(dialog)
}

// --- Quest ---
export const putNameQuest = (state, name) => {
  return (state.nameQuest = name)
}
export const putQustInfo = (state, obj) => {
  obj.badAnsver = ''
  obj.start = obj[obj.start].links

  state.quest.status[obj.class] = obj.done
  if (obj.start[0] === 5) {
    obj.getPrize = true
    state.quest.status[obj.class] = 'You have passed it'
    state.jurnalConversation.push({ name: obj.name, message: obj[obj.start].mess })
  }
}
export const putQustbadAnsver = (state, obj) => {
  if (obj.start === 0) {
    state.jurnalConversation.push({ name: obj.name, message: obj[obj.start].mess })
    state.quest.window = obj[obj.start].badAnsver
  } else {
    state.jurnalConversation.push({
      name: obj.name,
      message: obj[obj[obj.start].badAnsver].mess + '' + obj[obj.start].mess
    })
    obj.badAnsver = obj[obj[obj.start].badAnsver].mess
  }
}
export const herroAnsvers = (state, ansver) => {
  state.jurnalConversation.push({ name: 'hero', message: ansver })
}
export const putItemfromQuest = (state, ansver) => {
  state[ansver.type][ansver.xy.x][ansver.xy.y] = ansver.prize

  console.log('dd', ansver)
  console.log('state', state[ansver.type][ansver.xy.x][ansver.xy.y])
}
// ---/ Quest ---

export const moveToChest = (state, { type, xy, item }) => {
  state.items['9'][type][xy.x][xy.y] = item
  state.items['9'][type] = [...state.items['9'][type]]
}
export const moveToInventory = (state, { type, xy, item }) => {
  state[type][xy.x][xy.y] = item
  state[type] = [...state[type]]
  state.items['8'].dialog.food = state.inventory.reduce((sum, row) => {
    row.forEach(val => (val === '6' ? sum++ : ''))
    return sum
  }, 0)
}
