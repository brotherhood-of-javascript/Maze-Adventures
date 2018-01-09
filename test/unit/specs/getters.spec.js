import * as getters from '../../../src/store/getters'

describe('getter', () => {
  let ter
  beforeEach(() => {
    ter = {
      terran: [['0', '1'], ['2', '3']]
    }
  })
  it('Should  testing  spy non fo hideHero', () => {
    spyOn(getters, 'mapGetter').and.callThrough()
    expect(getters.mapGetter(ter)).toEqual([
      [{ id: 'x=0-y=0', class: 'tree' }, { id: 'x=0-y=1', class: 'wall' }],
      [{ id: 'x=1-y=0', class: 'monster' }, { id: 'x=1-y=1', class: 'hero' }]
    ])
  })
})
