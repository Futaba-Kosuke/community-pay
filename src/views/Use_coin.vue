<template>
  <div class="use_coin">
    <!-- <h1>This is a use_coin page</h1> -->
    <Buttons :list="list"/>
  </div>
</template>

<script>
import Buttons from '../components/ButtonList'

export default {
  name: 'use_coin',
  components: {
    Buttons,
  },
  data: () => {
    return {
      list: [
        { name: 'a'},
        { name: 'b'},
      ]
    }
  }
}
</script>
