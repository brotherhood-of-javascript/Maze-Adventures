const fillField = field => {
  switch (field) {
    case '0':
      return { ground: 'tree', img: '' }
    case '1':
      return { ground: 'wall', img: '' }
    case '2':
      return { ground: 'monster', img: '' }
    case '3':
      return { ground: 'tresure', img: '' }
    case '4':
      return { ground: 'apple', img: '' }
    case '5':
      return { ground: 'axe', img: '' }
    case ' ':
      return { ground: '', img: '' }
  }
}
export const mapGetter = state =>
  state.terran.map((val, x) => val.map((val, y) => ({ id: `x=${x}-y=${y}`, sqare: fillField(val) })))
