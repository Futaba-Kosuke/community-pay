<template>
<div>
  <div v-if="isLogin">
    <management-coin/>
  </div>
  <forced-login-button v-if="!isLogin"></forced-login-button>
</div>
</template>

<script>
import store from '@/store'
import ManagementCoin from '@/components/ManagementCoin'
import ForcedLoginButton from '@/components/ForcedLoginButton' 

export default {
  components: {
    ManagementCoin,
    ForcedLoginButton,
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
  }
}
</script>