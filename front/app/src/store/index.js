import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    producten: []
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    addProduct(state, product) {
      state.producten.push(product)
    },
  },
  actions: {
  },
  modules: {
  }
})