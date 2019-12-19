<template>  <!--この下にhtml-->
  <div>
    <div v-if="isLogin">
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <forced-login-button v-if="!isLogin"></forced-login-button>
  </div>
</template>

<script>
import firebase from 'firebase'
import store from '@/store'
import { QrcodeStream } from 'vue-qrcode-reader'
import ForcedLoginButton from '@/components/ForcedLoginButton'

export default {
  // name: 'qr_reader',
  components: {
    QrcodeStream,
    ForcedLoginButton,
  },
  methods: {
    onDecode: async (content) => { 
      const qr_data = JSON.parse(content)

      let target_user_active_coins
      let db_key
      const db = firebase.firestore()
      await db.collection('user').doc(qr_data.uid).get()
        .then((res) => {
          target_user_active_coins = res.data().active_coins
          db_key = res.data().key
        })

      const nowTime = new Date()
      const generation_time = db_key.generation_time.toDate()
      const diff_second = Math.floor((nowTime.getTime() - generation_time.getTime()) / 1000) // 秒の差が求まる
      
      if (diff_second > 180) {
        // QR生成から3分以上経過している
        alert('QRの使用期限が切れています。')
        return
      }
      
      if (db_key.key !== qr_data.key) {
        // データベースとQRのkeyが同値でない
        alert('認証に失敗しました。再起動してください。')
        return
      }

      // 前の2つの条件を潜り抜けたら到達できる
      const state = store.state
      const active_coin_names = state.active_coin_names
      const target_coin_name = state.manage_state.target_coin_name
      const target_index = active_coin_names.indexOf(target_coin_name)
      let update_value
      console.log(state.manage_state.state)
      if (state.manage_state.state) {
        update_value = Number(state.manage_state.value) * (-1)
      } else {
        update_value = Number(state.manage_state.value)
      }

      const target_coin = target_user_active_coins[target_index]
      target_user_active_coins[target_index] = {
        address: target_coin.address,
        name: target_coin.name,
        update_time: new Date(),
        value: target_coin.value + update_value
      }

      db.collection('user').doc(qr_data.uid).update({
        active_coins: target_user_active_coins
      })

    },
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
  }
}
</script>