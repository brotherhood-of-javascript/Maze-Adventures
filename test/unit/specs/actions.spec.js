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
