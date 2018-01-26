import Vue from 'vue'
import Vuex from 'vuex'
import globalStore from '@/store/'
Vue.use(Vuex)
const store = new Vuex.Store(globalStore)
import * as actions from '../../../src/store/actions'
describe('action', () => {
  it('Should  testing  spy non for heroDelete', () => {
    let spy = spyOn(actions, 'heroDelete').and.callThrough()
    actions.heroDelete(store)
    expect(spy).toHaveBeenCalled()
  })
  it('Should  testing  spy non for heroMove', () => {
    let spy = spyOn(actions, 'heroMove').and.callThrough()
    actions.heroMove(store, store.state.hero)
    expect(spy).toHaveBeenCalled()
  })

  it('Should  testing  spy non for heroDraw', () => {
    let spy = spyOn(actions, 'heroDraw').and.callThrough()
    actions.heroDraw(store)
    expect(spy).toHaveBeenCalled()
  })
  // getBoxInventory
  it('Should  testing  spy non for getBoxInventory', () => {
    let spy = spyOn(actions, 'getBoxInventory').and.callThrough()
    actions.getBoxInventory(store)
    expect(spy).toHaveBeenCalled()
  })
  // pickItem
  it('Should  testing  pickItem', () => {
    let spy = spyOn(actions, 'pickItem').and.callThrough()
    actions.pickItem(store)
    expect(spy).toHaveBeenCalled()
  })

  // getShowOtherMenuNow
  it('Should  testing getShowOtherMenuNow', () => {
    let spy = spyOn(actions, 'getShowOtherMenuNow').and.callThrough()
    actions.getShowOtherMenuNow(store)
    expect(spy).toHaveBeenCalled()
  })
  // winGame
  it('Testing winGame', () => {
    let spy = spyOn(actions, 'winGame').and.callThrough()
    actions.winGame(store)
    expect(spy).toHaveBeenCalled()
  })
  // notWinGame
  it('Testing notWinGame', () => {
    let spy = spyOn(actions, 'notWinGame').and.callThrough()
    actions.notWinGame(store)
    expect(spy).toHaveBeenCalled()
  })
  // dialog
  it('Testing dialog', () => {
    let spy = spyOn(actions, 'dialog').and.callThrough()
    actions.dialog(store)
    expect(spy).toHaveBeenCalled()
  })
})
