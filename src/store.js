import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    active_coin: [],
    negative_coin: [],
  },
  mutations: {
    enableCoin (state, coin) {
      state.active_coin.push(coin);
      state.negative_coin = state.negative_coin.filter((n) => n.name !== coin.name);
    },
    disableCoin (state, coin) {
      state.negative_coin.push(coin);
      state.active_coin = state.active_coin.filter((n) => n.name !== coin.name);
    },
  },
  actions: {

  }
})