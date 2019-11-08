<template>
  <v-dialog
    v-model="dialog_flag"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable
  >
    <v-card tile>
      <v-toolbar
        flat
        dark
        color="primary"
      >

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
}
</script>