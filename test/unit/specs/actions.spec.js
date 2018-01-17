import Vue from 'vue'
import Vuex from 'vuex'
import globalStore from '@/store/'
Vue.use(Vuex)
const store = new Vuex.Store(globalStore)
import * as actions from '../../../src/store/actions'

it('Should  testing  spy non for heroMove', () => {
  let spy = spyOn(actions, 'heroMove').and.callThrough()
  actions.heroMove(store, store.state.hero)
  expect(spy).toHaveBeenCalled()
})
it('Should  testing  spy non for heroDelete', () => {
  let spy = spyOn(actions, 'heroDelete').and.callThrough()
  actions.heroDelete(store)
  expect(spy).toHaveBeenCalled()
})
it('Should  testing  spy non for heroDraw', () => {
  let spy = spyOn(actions, 'heroDraw').and.callThrough()
  actions.heroDraw(store)
  expect(spy).toHaveBeenCalled()
})
describe('Testing action Inventory', () => {
  it('Should  testing  spy non for getBoxInventory', () => {
    let spy = spyOn(actions, 'getBoxInventory').and.callThrough()
    actions.getBoxInventory(store)
    expect(spy).toHaveBeenCalled()
  })
<<<<<<< HEAD
})
=======
})
<<<<<<< HEAD
=======

>>>>>>> 90fce427dbed63276d489ae8264dbbb83e97b9f3
>>>>>>> master
