<template>
  <div class="use_coin">
    <ActiveCoin/>
    <NegativeCoin/>
  </div>
</template>

<script>
import ActiveCoin from '../components/ActiveCoin'
import NegativeCoin from '../components/NegativeCoin'

export default {
  name: 'use_coin',
  components: {
    ActiveCoin,
    NegativeCoin,
  },
  data: function() {
    return {
      enable_coins: [],
      disable_coins: [
        'タピオカコイン',
        '高専コイン',
      ],
    }
  },
  methods: {
    addCoin: function(name) {
      this.enable_coins.push({
        name: name,
      });
      this.disable_coins = this.disable_coins.filter((n) => n !== name);
    }
  }
}
</script>
