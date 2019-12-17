<template>  <!--この下にhtml-->
  <div>
    <div v-if="isLogin">
      <div class="QR">
        <h1>This is a qr_reader page</h1>
      </div>
      <qrcode-stream @decode="onDecode"></qrcode-stream>
    </div>
    <forced-login-button v-if="!isLogin"></forced-login-button>
  </div>
</template>

<script>
import store from '@/store'
import { QrcodeStream } from 'vue-qrcode-reader'
import ForcedLoginButton from '@/components/ForcedLoginButton'

export default {
  // name: 'qr_reader',
  components: {
    QrcodeStream,
    ForcedLoginButton,
  },
  methods: {
    onDecode: (content) => { 
      console.log("!!!!!")
    },
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
  }
}
</script>

<style></style>