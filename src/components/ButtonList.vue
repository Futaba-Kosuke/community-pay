<template>
  <v-card>
    <Button v-for="l in list" v-bind:key="l.name" :msg="l.name"/>
  </v-card>
</template>

<script>
import Button from './CoinButton'

export default {
  name: 'button_list',
  components: {
    Button,
  },
  props: {
    list: Array,
  }
}
</script>