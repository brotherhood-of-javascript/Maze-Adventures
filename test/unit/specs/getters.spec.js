import * as getters from '../../../src/store/getters'

describe('getter', () => {
  let ter
  beforeEach(() => {
    ter = {
      terran: [['0', '1'], ['2', '3']],
      inventory: [['4', ' '], [' ', '5']],
      items: {
        ' ': { name: '', weight: 0, class: '' },
        '0': { name: 'Tree', weight: 0, class: 'tree' },
        '1': { name: 'Wall', weight: 0, class: 'wall' },
        '2': { name: 'Monster', weight: 0, class: 'monster' },
        '3': { name: 'Hero', weight: 1, class: 'hero' },
        '4': { name: 'Diamond', weight: 50, class: 'diamond', info: 'They are necklaces' },
        '5': { name: 'Gold', weight: 4, class: 'gold', info: 'the are Apples' },
        '8': { name: 'Gnome', weight: 0, class: 'gnome', info: 'If you collect this you win the game' }
      },
      hero: {
        x: 0,
        y: 0
      }
    }
  })
  // mapGetter
  it('Should  testing mapGetter - this func drow map', () => {
    spyOn(getters, 'mapGetter').and.callThrough()
    expect(getters.mapGetter(ter)).toEqual([
      [{ id: 'x=0-y=0', class: 'tree' }, { id: 'x=0-y=1', class: 'wall' }],
      [{ id: 'x=1-y=0', class: 'monster' }, { id: 'x=1-y=1', class: 'hero' }]
    ])
  })
  // drowBoxInventory
  it('Should  testing  spy non for drowBoxInventory', () => {
    spyOn(getters, 'drowBoxInventory').and.callThrough()
    expect(getters.drowBoxInventory(ter)).toEqual([
      [
        { class: 'diamond', describe: 'some items', id: '00', quantity: 1, val: '4', weight: 50 },
        { class: '', describe: 'some items', id: '01', quantity: 1, val: ' ', weight: 0 }
      ],
      [
        { class: '', describe: 'some items', id: '10', quantity: 1, val: ' ', weight: 0 },
        { class: 'gold', describe: 'some items', id: '11', quantity: 1, val: '5', weight: 4 }
      ]
    ])
  })
  // itemGetter
  it('Should  testing itemGetter - this func find and get item', () => {
    spyOn(getters, 'itemGetter').and.callThrough()
    expect(getters.itemGetter(ter)).toEqual({ class: 'tree', name: 'Tree', weight: 0 })
  })
  // dialogGetter
  it('Should  testing dialogGetter - this func speak with you', () => {
    spyOn(getters, 'dialogGetter').and.callThrough()
    expect(getters.dialogGetter(ter)).toEqual({
      name: 'Gnome',
      weight: 0,
      class: 'gnome',
      info: 'If you collect this you win the game'
    })
  })
})
