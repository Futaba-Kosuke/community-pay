<template>  <!--この下にhtml-->
  <div>
    <div class="qr_reader">
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
    // onDecode: (content) => { 
    //   console.log("OK!")}
    
    onDecode (decodedString) {
    // ...
  }
 }
}
</script>

<style></style>