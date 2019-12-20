<template>
  <v-card>
    <coin-button v-for="coin in active_coin" :key="coin" :coin_name="coin"/>
  </v-card>
</template>

<script>
import CoinButton from './CoinButton'

export default {
  name: 'button_list',
  components: {
    CoinButton,
  },
  data: function () {
    return {
      active_coin: this.$store.state.active_coin_names,
    }
  }
}
</script>