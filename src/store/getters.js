const fillField = field => {
  switch (field) {
    case '0':
      return 'tree'
    case '1':
      return 'wall'
    case '2':
      return 'monster'
    case '3':
      return 'hero'
  }
}
export const mapGetter = state =>
  state.terran.map((val, x) => val.map((val, y) => ({ id: `x=${x}-y=${y}`, class: fillField(val) })))
