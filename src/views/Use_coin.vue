<template>
  <div class="use_coin">
    <Buttons :list="enable_coins"/>
    <AddCoinList :coins="disable_coins" @add_event="addCoin($event)" />
  </div>
</template>

<script>
import Buttons from '../components/ButtonList'
import AddCoinList from '../components/AddCoinList'

export default {
  name: 'use_coin',
  components: {
    Buttons,
    AddCoinList,
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
      this.disable_coins = this.disable_coins.filter((n) => {n !== name});
    }
  }
}
</script>
