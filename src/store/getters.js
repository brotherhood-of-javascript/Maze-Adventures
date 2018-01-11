const fillField = field => {
  switch (field) {
    case '0':
      return { ground: 'tree', img: '' }
    case '1':
      return { ground: 'wall', img: '' }
    case '2':
      return { ground: 'monster', img: '' }
    case '3':
      return {
        ground: 'way',
        img:
          'https://orig00.deviantart.net/e0b9/f/2010/234/2/8/west_dash_animation_by_hero_in_pixels.gif'
      }
    case ' ':
      return { ground: 'way', img: '' }
  }
}
export const mapGetter = state =>
  state.terran.map((val, x) =>
    val.map((val, y) => ({ id: `x=${x}-y=${y}`, sqare: fillField(val) }))
  )
