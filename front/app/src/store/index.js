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
      localStorage.setItem('products', JSON.stringify(state.producten));
    },
    initialiseProducts(state){
      if(localStorage.getItem('products')) {
        state.producten = JSON.parse(localStorage.getItem('products'))
      }
    }
  },
  actions: {
  },
  modules: {
  }
})