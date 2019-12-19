<template>
  <div>
    <v-btn block height=70px @click.stop="openInputDialog()">
      {{ coin_name }}
    </v-btn>
    <v-dialog v-model="dialog_flag">
      <v-card>
        <v-card-title class="headline">{{ coin_name }}</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="value"
            label="金額"
            outlined
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="qrRead(true)" :disabled="isInput" color="primary">ペイ</v-btn>
          <v-btn @click="qrRead(false)" :disabled="isInput" color="primary">チャージ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    coin_name: String,
  },
  data: function() {
    return {
      dialog_flag: false,
      value: '',
    }
  },
  computed: {
    isInput: function () {
      return !(this.value !== '' && !isNaN(this.value))
    }
  },
  methods: {
    openInputDialog: function () {
      this.dialog_flag = true
    },
    qrRead: function (mode) {
      this.$store.commit('updateManageState', { state: mode, value: this.value, target_coin_name: this.coin_name})
      console.log(this.$store.state.manage_state)
      console.log(JSON.stringify(this.$store.state.manage_state))
      console.log(JSON.parse(JSON.stringify(this.$store.state.manage_state)))
      this.$router.push('/Qr_camera')
    }
  }
}
</script>