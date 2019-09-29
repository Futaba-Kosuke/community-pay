<template>
  <div class="home">
    <HeaderItem/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <TransitionButton title="create_coin" link="/create_coin"/>
    <TransitionButton title="use_coin" link="/use_coin"/>
    <TransitionButton title="qr_reader" link="/qr_reader"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HeaderItem from '@/components/HeaderItem.vue'
import TransitionButton from '@/components/TransitionButton.vue'

export default {
  name: 'home',
  components: {
    // HelloWorld,
    HeaderItem,
    TransitionButton,
  }
}
</script>

