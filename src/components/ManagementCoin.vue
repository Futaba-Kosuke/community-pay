<template>
  <v-card>
    <managing-coin-button v-for="coin in management_coins" :key="coin" :coin_name="coin" />
  </v-card>
</template>

<script>
import ManagingCoinButton from '@/components/ManagingCoinButton'

export default {
  components: {
    ManagingCoinButton,
  },
  data: function () {
    return {
      management_coins: this.$store.state.management_coin_names
    }
  }
}
</script>