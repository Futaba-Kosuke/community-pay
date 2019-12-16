<template>
<div>
  <v-container v-if="isLogin" class="create_coin">
    <b><p class="items_explanation" style="font-size: 20px;">○コイン生成</p></b>

    <p class="items_explanation">1. コインの名前を記入してください</p>
    <v-text-field
      v-model="coin.name"
      label="コイン名"
      class="input_boxes"
      outlined
    />

    <p class="items_explanation">2. コインの変換レートを記入してください</p>
    <v-row>
      <v-col style="padding-top: 0px; padding-bottom: 0px;">
        <v-text-field
          v-model="coin.yen_rate"
          label="日本円"
          class="input_boxes"
          outlined
        />
      </v-col>
      <v-col style="padding-top: 0px; padding-bottom: 0px;">
        <v-text-field
          v-model="coin.coin_rate"
          :label="coin.name"
          class="input_boxes"
          outlined
        />
      </v-col>
    </v-row>

    <p class="items_explanation">3. コインの使用期限を記入してください</p>
    <v-select
      :items="this.deadlines"
      v-model="coin.deadline"
      label="使用期限"
      class="input_boxes"
      outlined
    ></v-select>

    <p class="items_explanation">4. コインの詳細について自由に記入してください</p>
    <v-textarea
      v-model="coin.explanation"
      label="説明"
      class="input_boxes"
      outlined
    />
    <v-btn @click="createCoin()" :disabled="isCoin">この設定でコインを作成する</v-btn>
  </v-container>
  <forced-login-button v-if="!isLogin"/>
</div>
</template>

<script>
import firebase from '@/firebase.js'
import store from '@/store'
import ForcedLoginButton from '@/components/ForcedLoginButton'

export default {
  name: 'create_coin',
  components: {
    ForcedLoginButton,
  },
  data: function() {
    return {
      coin: {
        name: '',
        yen_rate: '',
        coin_rate: '',
        deadline: '無制限',
        explanation: '',
        owners: [],
        users: [],
      },
      deadlines: ['無制限', '1日', '3日', '5日', '1週間', '3週間', '1ヵ月', '3ヵ月', '5ヵ月', '10ヵ月', '1年']
    }
  },
  methods: {
    createCoin: function () {
      if (this.coin.name !== '' && !isNaN(this.coin.yen_rate) && !isNaN(this.coin.coin_rate) && this.coin.explanation !== '') {
        this.$store.commit('createCoin', this.coin);
        const db = firebase.firestore();
        db.collection("coin").add(this.coin)
          .then(() => {
            console.log("success!");
          })
          .catch((error) => {
            console.error("Error: ", error);
          })
        Object.assign(this.$data, this.$options.data.call(this));
      }
    }
  },
  computed: {
    isCoin: function () {
      return !(this.coin.name !== '' && this.coin.yen_rate !== '' && this.coin.coin_rate !== '' && this.coin.deadline !== '' && this.coin.explanation !== '' && !isNaN(this.coin.yen_rate) && !isNaN(this.coin.coin_rate));
    },
    isLogin: () => {
      return store.state.user_state
    }
  }
}
</script>

<style scoped>
.items_explanation {
  margin-top: 15px;
  margin-bottom: 10px;
}
.input_boxes {
  margin-top: 0px;
  padding-top: 0px;
  padding: 15px;
}
</style>