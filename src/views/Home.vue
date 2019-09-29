<template>
  <div class="home">
    <HeaderItem/>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeaderItem from '@/components/HeaderItem.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    HeaderItem,
  }
}
</script>

