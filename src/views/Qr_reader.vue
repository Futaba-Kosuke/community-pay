<template>  <!--この下にhtml-->
  <div>
    <v-container class="Qr_reader">
      <b><p class="items_explanation" style="font-size: 20px;">○コイン受け取り</p></b>
      <p class="items_explanation">値段を記入してください</p>
      <v-text-field
        v-model="coin.yen"
        label="値段"
        class="input_boxes"
        outlined
      />
      <v-row>
        <v-col><v-spacer/></v-col>
        <v-col>
        <v-btn to="QR" :disabled="Qr_reader" @clikc="noQR()">QR読み込み画面に移動する</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
  </template>

<script>
export default {
  name: 'QR',
  components: {},
  data: function() {
    return {
      coin: {
        yen: ''
      }
    }
  },
  methods: {
  noQR: function () {
      if (this.coin.yen !== '') {
        this.$store.commit('noQR', this.coin);
        Object.assign(this.$data, this.$options.data.call(this));
      }
    }
  },
  computed: {
    Qr_reader: function () {
      return !(this.coin.yen !== '' && !isNaN(this.coin.yen));
    }
  }
}
</script>

<style scoped>
.items_explanation{
  margin-top: 15px;
  margin-bottom: 10px;
}
.input_boxes{
  margin-top: 0px;
  padding-top: 0px;
  padding: 15px;
}
</style>