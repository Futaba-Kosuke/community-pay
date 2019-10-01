<template>
  <v-container>
    <TransitionButton title="create_coin" link="/create_coin"/>
    <TransitionButton title="use_coin" link="/use_coin"/>
    <TransitionButton title="qr_reader" link="/qr_reader"/>
  </v-container>
</template>

<script>
import TransitionButton from '@/components/TransitionButton.vue'

export default {
  name: 'home',
  components: {
    TransitionButton,
  }
}
</script>
