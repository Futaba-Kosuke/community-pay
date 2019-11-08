import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 全てのコイン(Object)
    all_coin: [
      {
        name: '',
        yen: '',
        coin: '',
        explanation: '',
      },
      {
        name: 'active',
        yen: '0',
        coin: '0',
        explanation: 'this is active coin',
      },
      {
        name: 'negative',
        yen: '100',
        coin: '0',
        explanation: 'this is negative coin',
      }
    ],
    // activeなコイン(String)
    active_coin: ['active'],
    // negativeなコイン(String)
    negative_coin: ['negative'],
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