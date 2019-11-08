<template>
  <v-card>
    <Button v-for="coin in active_coin" :key="coin" :coin_name="coin"/>
  </v-card>
</template>

<script>
import Button from './CoinButton'

export default {
  name: 'button_list',
  components: {
    Button,
  },
  data: function () {
    return {
      active_coin: this.$store.state.active_coin,
    }
  }
}
</script>