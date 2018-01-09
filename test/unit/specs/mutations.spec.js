import * as mutations from '../../../src/store/mutations'
describe('Testing mutations', () => {
  let ter
  beforeEach(() => {
    ter = {
      terran: [['1', '0', ' '], ['1', '1', '1']],
      hero: { x: 1, y: 1 }
    }
  })
  it('Should  testing  spy non fo drawHero', () => {
    spyOn(mutations, 'draw').and.callThrough()
    mutations.draw(ter, { type: 'terran', xy: { x: 1, y: 1 } })
    expect(ter.terran).toEqual([['1', '0', ' '], ['1', '3', '1']])
  })
  it('Should  testing  spy non fo moveHero', () => {
    spyOn(mutations, 'move').and.callThrough()
    mutations.move(ter, { type: 'hero', xy: { x: 2, y: 2 } })
    expect(ter.hero).toEqual({ x: 2, y: 2 })
  })
  it('Should  testing  spy non fo deleteHero', () => {
    spyOn(mutations, 'del').and.callThrough()
    mutations.del(ter, { type: 'terran', xy: { x: 1, y: 1 } })
    expect(ter.terran).toEqual([['1', '0', ' '], ['1', ' ', '1']])
  })
})
