<template>
<v-dialog
  v-model="dialog_flag"
  fullscreen
  hide-overlay
  transition="dialog-bottom-transition"
>
  <v-card tile fullscreen>
    <v-toolbar height="80px" dark color="primary">
      <v-toolbar-title>{{ coin_data.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon dark @click="closeThis()">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div>
      <div class="coin_value">
        <u><p style="margin: 40px 0px;">残高: {{ coin_data.value }} コイン</p></u>
      </div>
      <div class="coin_element">
        <u><p>変換レート</p></u>
        <b><p>{{ coin_data.yen_rate }} 円 → {{ coin_data.coin_rate }} コイン</p></b>
      </div>
      <div class="coin_element">
        <u><p>利用期限</p></u>
        <b><p>{{ deadline }}</p></b>
      </div>
      <div class="coin_element">
        <u><p>説明</p></u>
        <b><p>{{ coin_data.explanation }}</p></b>
      </div>
      <v-footer app>
        <v-col><v-btn @click.stop="generateQR(true)" style="height: 100px;" x-large block color="primary">ペイ</v-btn></v-col>
        <v-col><v-btn @click.stop="generateQR(false)" style="height: 100px;" x-large block color="primary">チャージ</v-btn></v-col>
      </v-footer>
      
      <v-dialog v-model="qr_flag">
        <v-card>
          <v-card-title class="headline">{{ modeName }}</v-card-title>
          <vue-qrcode v-if="qr_str" :value="qr_str" :options="option" tag="img"></vue-qrcode>
        </v-card>
      </v-dialog>
    </div>
  </v-card>
</v-dialog>
</template>

<script>
import firebase from 'firebase'
import VueQrcode from '@chenfengyuan/vue-qrcode'

export default {
  components: {
    VueQrcode,
  },
  props: {
    dialog_flag: Boolean,
    coin_data: Object,
  },
  data () {
    return {
      qr_str: '',
      qr_flag: false,
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
      mode: null,
    }
  },
  methods: {
    closeThis: function () {
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
      this.mode = mode
      this.qr_flag = true

    },
  },
  computed: {
    deadline: function () {
      if (this.coin_data.deadline === '無制限') {
        return this.coin_data.deadline
      }
      return '最後の使用から ' + this.coin_data.deadline
    },
    modeName: function () {
      if (this.mode) {
        return 'ペイ'
      }
      return 'チャージ' 
    },
  }
}
</script>

<style scoped>
.coin_value {
  font-size: 40px;
  color: rgb(71, 140, 234);
  text-align: center;
  margin: 0px;
  padding: .5em .75em;
  border: 1px solid #ccc;
}
.coin_element {
  margin-top: 20px;
  margin-left: 30px;
  font-size: 20px;
}
.button {
  align-items: flex-end;
}
</style>