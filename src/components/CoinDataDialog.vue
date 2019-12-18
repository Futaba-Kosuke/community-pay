<template>
  <v-dialog
    v-model="dialog_flag"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card tile>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeThis()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>{{ coin_data.name }}</v-toolbar-title>
      </v-toolbar>
      <v-list three-line subheader>
        <v-subheader>これはコインの使用・詳細確認画面です</v-subheader>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="item-subtitle">コイン名</v-list-item-subtitle>
            <v-list-item-title class="item-title">{{ coin_data.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="item-subtitle">換算</v-list-item-subtitle>
            <v-list-item-title class="item-title">{{ coin_data.coin_rate }} {{coin_data.name}} は {{ coin_data.yen_rate }} 円です </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="item-subtitle">利用期限</v-list-item-subtitle>
            <v-list-item-title class="item-title" v-text="deadline"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle class="item-subtitle">説明</v-list-item-subtitle>
            <v-list-item-title class="item-title">{{ coin_data.explanation }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    coin_data: Object,
    dialog_flag: Boolean,
  },
  methods: {
    closeThis() {
      this.$emit('closeThis')
    }
  },
  computed: {
    deadline: function() {
      if (this.coin_data.deadline === '無制限') {
        return this.coin_data.deadline
      } else {
        return '最後の使用から ' + this.coin_data.deadline
      }
    }
  }
}
</script>

<style scoped>
.item-subtitle {
  font-size: 15px;
}
.item-title {
  font-size: 25px;
}
</style>