<template>
  <div>
    <v-btn block height=70px @click.stop="openCoin()">
      {{ coin_name }}
    </v-btn>
    <coin-data-dialog :dialog_flag='dialog_flag' :coin_data='coin_data' @closeThis="closeCoin()"/>
  </div>
</template>

<script>
import CoinDataDialog from '@/components/CoinDataDialog_ver2'

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
      coin_data: {},
    }
  },
  methods: {
    openCoin() {
      // coin_nameと同じデータをall_coinから検索して、this.coin_dataに挿入
      const result = this.$store.state.coin_active_coins.filter((n) => n.name === this.coin_name)
      this.coin_data = result[0]

      const target_coin = this.$store.state.user_active_coins.filter((n) => n.name === this.coin_name)
      console.log(target_coin[0].value)
      this.coin_data.value = target_coin[0].value

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