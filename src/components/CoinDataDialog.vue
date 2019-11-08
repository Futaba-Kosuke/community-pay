<template>
  <v-dialog
    v-model="dialog_flag"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar dark color="primary">
        <v-btn icon dark @click="closeThis()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    coin_data: Array,
    dialog_flag: Boolean,
  },
  methods: {
    closeThis() {
      this.$emit('closeThis')
    }
  }
}
</script>