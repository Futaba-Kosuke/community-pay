<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>コミュペイ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLogin" text to="/login_form">ログイン</v-btn>
      <logout-form v-if="isLogin"></logout-form>
    </v-app-bar>

    <v-content v-if="isLoaded">
      <router-view/>
    </v-content>

    <v-footer
      app
      color="primary lighten-1"
      padless
    >
      <TransitionBar/>
    </v-footer>
  </v-app>
</template>

<script>
import TransitionBar from '@/components/TransitionBar'
import LogoutForm from '@/components/LogoutForm'
import firebase from 'firebase'
import 'firebase/firestore'
import store from '@/store'

export default {
  name: 'app',
  components: {
    TransitionBar,
    LogoutForm,
  },
  mounted: () => {
    // ログイン・非ログイン状態の判定
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // ログインしている
        store.commit('updateUser', true)

        console.log('loading...')

        const db = firebase.firestore()
        const db_coin_names = db.collection('coin_names').doc('mqZnSrGaIxXB3uZdMQdm')
        const db_current_user = db.collection('user').doc(user.uid)
        
        let coin_names  // コインの名前一覧の取得
        await db_coin_names.get()
          .then((res) => {
            coin_names = res.data().coin_names
          })

        let active_coin_names  // 有効なコインの名前一覧の取得
        await db_current_user.get()
          .then((res) => {
            active_coin_names = res.data().active_coin_names
          })
        
        let negative_coin_names = coin_names.filter((item) => active_coin_names.indexOf(item) === -1)  // 無効なコインの名前一覧の取得

        let user_active_coins  // 代入するのでそのまま
        let coin_active_coins = []  // 空配列として定義
        let management_coin_names
        let management_coins
        await db_current_user.get()
          .then((res) => {

            const user_data = res.data()
            user_active_coins = user_data.active_coins
            
            user_data.active_coins.forEach(async (item) => {
              await db.collection('coin').doc(item.address.id).get()
                .then((coin) => {
                  coin_active_coins.push(coin.data())
                })            
            })

            management_coin_names = user_data.management_coin_names
            management_coins = user_data.management_coins
          })

        const loadDatas = {
          user_active_coins: user_active_coins,
          coin_active_coins: coin_active_coins,
          active_coin_names: active_coin_names,
          negative_coin_names: negative_coin_names,
          management_coin_names: management_coin_names,
          management_coins: management_coins,
        }
        console.log(loadDatas)
        
        store.commit('constCoins', loadDatas)
        store.commit('updateLoad', true)
      } else {
        // ログインしていない
        store.commit('updateUser', false)
        store.commit('updateLoad', true)
      }
    })
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    },
    isLoaded: () => {
      return store.state.load_state
    }
  },
}
</script>