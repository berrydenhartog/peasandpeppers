import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    producten: [],
    cookie: { 
      set: false,
      accepted: false,
    },
  },
  mutations: {
    setCookieAccept(state, cookie) {
      state.cookie = cookie
      localStorage.setItem('cookie', JSON.stringify(state.cookie));
    },
    setUser(state, user) {
      if ( state.cookie.accepted == true) {
        state.user = user
      }
    },
    // eslint-disable-line 
    addProduct(state, product) {
      let found=false
      for (let i = 0; i < state.producten.length; i++) { 
        if ( product.weeknr === state.producten[i].weeknr &&
            product.dag === state.producten[i].dag &&
            product.volgnummer === state.producten[i].volgnummer &&
            product.grotevalue === state.producten[i].grotevalue ) {
            found=true
            state.producten[i].aantal += product.aantal
            break;
          }
      }

      if ( !found) {
        state.producten.push(product)
      }

      if(state.cookie.accepted) {
        localStorage.setItem('products', JSON.stringify(state.producten));
      }
      
    },
    deleteProduct(state, productnr) {
      state.producten.splice(productnr,1)
      if(state.cookie.accepted) {
        localStorage.setItem('products', JSON.stringify(state.producten));
      }
    },
    initialiseProducts(state){
      if(localStorage.getItem('cookie')) {
        state.cookie = JSON.parse(localStorage.getItem('cookie'))
      }
      
      if (state.cookie.accepted) {
        if(localStorage.getItem('products') ) {
          state.producten = JSON.parse(localStorage.getItem('products'))
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})