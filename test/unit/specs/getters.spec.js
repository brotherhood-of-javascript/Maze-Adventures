import * as getters from '../../../src/store/getters'

describe('getter', () => {
  let ter
  beforeEach(() => {
    ter = {
      terran: [['0', '1'], ['2', '3']],
      inventory: [
        ['1', ' '],
        [' ', '0']
      ]
    }
  })
  it('Should  testing  spy non fo hideHero', () => {
    spyOn(getters, 'mapGetter').and.callThrough()
    expect(getters.mapGetter(ter)).toEqual([
      [{ id: 'x=0-y=0', class: 'tree' }, { id: 'x=0-y=1', class: 'wall' }],
      [{ id: 'x=1-y=0', class: 'monster' }, { id: 'x=1-y=1', class: 'hero' }]
    ])
  })
<<<<<<< HEAD

=======
  
>>>>>>> 90fce427dbed63276d489ae8264dbbb83e97b9f3
  it('Should  testing  spy non for drowBoxInventory', () => {
    spyOn(getters, 'drowBoxInventory').and.callThrough()
    expect(getters.drowBoxInventory(ter)).toEqual([[{ "class": "diamond", "describe": "some items", "id": "00", "quantity": 1, "weight": "diamond" },
    { "class": "", "describe": "some items", "id": "01", "quantity": 1, "weight": "" }],
    [{ "class": "", "describe": "some items", "id": "10", "quantity": 1, "weight": "" },
    { "class": "gold", "describe": "some items", "id": "11", "quantity": 1, "weight": "gold" }]])
  })
})
