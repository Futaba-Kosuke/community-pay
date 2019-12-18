import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // activeなコインのデータ(Object)
    active_coin: [''],
    // activeなコインの名前一覧(String)
    active_coin_names: [],
    // negativeなコインの名前一覧(String)
    negative_coin_names: [],
    // ユーザー情報(Boolean)
    user_state: null,
  },
  mutations: {
    constCoins (state, coin_data) {
      state.active_coins = coin_data.active_coins
      state.active_coin_names = coin_data.active_coin_names
      state.negative_coin_names = coin_data.negative_coin_names
    },
    updateUser (state, user_state) {
      state.user_state = user_state
    }
  },
  actions: {

  }
})