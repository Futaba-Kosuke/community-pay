import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    all_coin: [],  // 全てのコイン(Object)
    active_coin: [],  // activeなコイン(String)
    negative_coin: [],  // negativeなコイン(String)
  },
  mutations: {
    createCoin (state, coin) {
      state.all_coin.push(coin);
      state.negative_coin.push(coin.name);
    },
    enableCoin (state, coin_name) {
      state.active_coin.push(coin_name);
      state.negative_coin = state.negative_coin.filter((n) => n !== coin_name);
    },
    disableCoin (state, coin_name) {
      state.negative_coin.push(coin_name);
      state.active_coin = state.active_coin.filter((n) => n !== coin_name);
    },
  },
  actions: {

  }
})