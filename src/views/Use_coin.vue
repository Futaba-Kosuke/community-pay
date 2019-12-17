<template>
<div>
  <div v-if="isLogin" class="use_coin">
    <ActiveCoin/>
    <NegativeCoin/>
  </div>
  <forced-login-button v-if="!isLogin"></forced-login-button>
</div>
</template>

<script>
import store from '@/store'
import ActiveCoin from '../components/ActiveCoin'
import NegativeCoin from '../components/NegativeCoin'
import ForcedLoginButton from '@/components/ForcedLoginButton'

export default {
  name: 'use_coin',
  components: {
    ActiveCoin,
    NegativeCoin,
    ForcedLoginButton,
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
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
