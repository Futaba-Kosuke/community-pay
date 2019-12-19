<template>
  <v-card tile>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="closeThis()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-toolbar-title>{{ coin_data.name }}</v-toolbar-title>
    </v-toolbar>
    <v-card-actions>
      <v-col><v-btn @click="generateQR(true)" style="height: 100px;" block color="primary">ペイ</v-btn></v-col>
      <v-col><v-btn @click="generateQR(false)" style="height: 100px;" block color="primary">チャージ</v-btn></v-col>
    </v-card-actions>
    <vue-qrcode v-if="qr_str" :value="qr_str" :options="option" tag="img"></vue-qrcode>
    <v-list three-line subheader>
      <v-subheader>これはコインの使用・詳細確認画面です</v-subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="item-subtitle">コイン名</v-list-item-subtitle>
          <v-list-item-title class="item-title">{{ coin_data.name }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="item-subtitle">換算</v-list-item-subtitle>
          <v-list-item-title class="item-title">{{ coin_data.coin_rate }} {{coin_data.name}} は {{ coin_data.yen_rate }} 円です </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="item-subtitle">利用期限</v-list-item-subtitle>
          <v-list-item-title class="item-title" v-text="deadline"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-subtitle class="item-subtitle">説明</v-list-item-subtitle>
          <v-list-item-title class="item-title">{{ coin_data.explanation }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import firebase from 'firebase'
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  components: {
    VueQrcode,
  },
  props: {
    coin_data: Object,
  },
  data () {
    return {
      qr_str: '',
      option: {
        errorCorrectionLevel: "M",
        maskPattern: 0,
        margin: 10,
        width: 400,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF"
        },
      },

    }
  },
  methods: {
    closeThis() {
      this.$emit('closeThis')
    },
    generateQR: function (mode) {
      // ランダム文字列の生成。DBのランダム文字列と、QRのランダム文字列が同値の時に決済の許可を出す。
      const LENGTH = 20
      const WORDS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const generateRandomStr = () => {
        let r = "";
        for(let i = 0; i < LENGTH; i++){
          r += WORDS[Math.floor(Math.random() * WORDS.length)];
        }
        return r;
      }

      const key = generateRandomStr()

      // カレントユーザーのID
      const uid = firebase.auth().currentUser.uid

      // DBに上げるデータの生成 ~ データベースへの登録
      const key_data = {
        key: key,
        generation_time: new Date(),
      }
      const db = firebase.firestore()
      db.collection('user').doc(uid).update({
        key: key_data,
      })

      // QRデータの生成 ~ QRコードの生成
      const qr_data = JSON.stringify({
        mode: mode,
        uid: uid,
        key: key,
      })

      this.qr_str = qr_data

    }
  },
  computed: {
    deadline: function() {
      if (this.coin_data.deadline === '無制限') {
        return this.coin_data.deadline
      }
      return '最後の使用から ' + this.coin_data.deadline
    }
  }
}
</script>

<style scoped>
.item-subtitle {
  font-size: 15px;
}
.item-title {
  font-size: 25px;
}
.QR {
  text-align: center;
  size: 300px;
}
</style>