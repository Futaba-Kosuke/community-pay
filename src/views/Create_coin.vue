<template>
  <div class="my-2">
    <v-btn v-if="isLogin" to="/create_coin_form" x-large class="start_button" color="rgb(71, 140, 234)">新規コインを作成する</v-btn>
    <forced-login-button v-if="!isLogin"></forced-login-button>
  </div>
</template>

<script>
import store from '@/store'
import ForcedLoginButton from '@/components/ForcedLoginButton'

export default {
  components: {
    ForcedLoginButton,
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
  }
}
</script>

<style scoped>
.start_button {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px 30px;
  text-align: center;
  width: 300px;
  font-size: 20px;

  color: white;
}
</style>