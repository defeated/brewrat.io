import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drinks: []
  },

  mutations: {
    SET_DRINKS(state, drinks) {
      state.drinks = drinks
    }
  },

  actions: {
    async fetchDrinks({ commit }) {
      let response = await fetch('/drinks.json')
      let data = await response.json()
      commit('SET_DRINKS', data.drinks)
    }
  },

  modules: {
  }
})
