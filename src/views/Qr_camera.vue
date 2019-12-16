<template>  <!--この下にhtml-->
  <div>
    <div class="QR">
      <h1>This is a qr_reader page</h1>
    </div>
    <qrcode-stream @decode="onDecode"></qrcode-stream>
  </div>
</template>

<script>
import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  // name: 'qr_reader',
  components: {
    QrcodeStream,
  },
  methods: {
    onDecode: (content) => { 
      console.log("!!!!!")
    },
  }
}
</script>

<style></style>