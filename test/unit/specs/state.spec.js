import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import globalStore from '@/store/'
const store = new Vuex.Store(globalStore)
describe('store', () => {
    it("Should  Defined store 'toBeDefined'", () => {
        expect(store).toBeDefined();
    });
    it("Should Defined state in store use 'toBeDefined'", () => {
        expect(store.state).toBeDefined();
    });
    it("Should Defined getters in store use 'toBeDefined'", () => {
        expect(store.getters).toBeDefined();
    });
    it("Should Defined terran object", () => {
        expect(store.state.terran).toBeDefined();
    });
    it("Should exist terran object", () => {
        expect(store.state.terran).toEqual(jasmine.any(Array));
    });
    it("Should Defined hero object with position", () => {
        expect(store.state.hero).toBeDefined();
    });
    it("Should exist hero object", () => {
        expect(store.state.terran).toEqual(jasmine.any(Array));
    });
    it("Should exist hero '1'", () => {
        expect(store.state.terran[0]).toContain("1");
    });
    it("Should  exist hero '0'", () => {
        expect(store.state.terran[1]).toContain("0");
    });
    it("Should  exist hero ' '", () => {
        expect(store.state.terran[1]).toContain(" ");
    });
    it("Should  exist hero'", () => {
        expect(store.state.hero).toEqual(jasmine.any(Object));
    });
    it("Should  exist  hero 'x'", () => {
        expect(store.state.hero.x).toBeDefined();
    });
    it("Should  exist  hero 'y'", () => {
        expect(store.state.hero.y).toBeDefined();
    });
    it("Should Defined inventory arrey in state", () => {
        expect(store.state.inventory).toBeDefined();
    });
});

