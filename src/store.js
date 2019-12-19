import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // activeなコインのデータ(Object)
    user_active_coins: [],  // user固有のデータ(残高など)
    coin_active_coins: [],  // userに紐付けされたコインのデータ(コインそのものの名前・レートなど)
    // activeなコインの名前一覧(String)
    active_coin_names: [],
    // negativeなコインの名前一覧(String)
    negative_coin_names: [],
    // managementしているコインの名前一覧(String)
    management_coin_names: [],
    // managementしているコインのPATH(Reference)
    management_coins: [],
    // ユーザー情報(Boolean)
    user_state: false,
    // ローディング中はfalse(Boolean)
    load_state: false,
  },
  mutations: {
    constCoins (state, coin_data) {
      state.user_active_coins = coin_data.user_active_coins
      state.coin_active_coins = coin_data.coin_active_coins
      state.active_coin_names = coin_data.active_coin_names
      state.negative_coin_names = coin_data.negative_coin_names
      state.management_coin_names = coin_data.management_coin_names
      state.management_coins = coin_data.management_coins
    },
    updateUser (state, user_state) {
      state.user_state = user_state
    },
    updateLoad (state, load_state) {
      state.load_state = load_state
    }
  },
  actions: {

  }
})