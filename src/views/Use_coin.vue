<template>
  <div class="use_coin">
    <!-- <h1>This is a use_coin page</h1> -->
    <v-layout justify-center>
      <v-btn block text height="70px" @click="addCoin()">新規コイン追加</v-btn>
    </v-layout>
    <Buttons :list="coin_list"/>
  </div>
</template>

<script>
import Buttons from '../components/ButtonList'

export default {
  name: 'use_coin',
  components: {
    Buttons,
  },
  data: function() {
    return {
      coin_list: [],
    }
  },
  methods: {
    addCoin: function(name) {
      this.coin_list.push({
        name: name,
      });
    }
  }
}
</script>
