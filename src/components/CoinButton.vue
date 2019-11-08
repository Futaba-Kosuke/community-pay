<template>
  <div>
    <v-btn block height=70px @click="openCoin()">
      {{ coin_name }}
    </v-btn>
    <CoinDataDialog :dialog_flag='dialog_flag' :coin_data='coin_data' @closeThis="closeCoin()"/>
  </div>
</template>

<script>
import CoinDataDialog from './CoinDataDialog'

export default {
  name: 'btn',
  components: {
    CoinDataDialog,
  },
  props: {
    coin_name: String,
  },
  data () {
    return {
      dialog_flag: false,
      coin_data: [],
    }
  },
  methods: {
    openCoin() {
      // coin_nameと同じデータをall_coinから検索して、this.coin_dataに挿入
      const result = this.$store.state.all_coin.filter((n) => n.name === this.coin_name)
      this.coin_data = result

      // dialogを表示するフラグをtrueにする
      this.dialog_flag = true
    },
    closeCoin() {
      // コインのdialogを表示するフラグをfalseにする
      this.dialog_flag = false
    }
  }
}
</script>