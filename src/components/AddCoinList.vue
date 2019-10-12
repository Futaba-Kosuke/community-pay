<template>
<v-container>
  <v-select
    :items="this.negative_coin"
    v-model="selected_coin"
    label="コイン追加"
    outlined
    block
    :disabled="isEmpty"
  ></v-select>
  <v-btn text @click="enableCoin()" :disabled="isSelected">このコインを使用可能にする</v-btn>
</v-container>
</template>

<script>
export default {
  name: 'add_coin',
  data: function() {
    return{
      selected_coin: '',
      negative_coin: this.$store.state.negative_coin,
    }
  },
  methods: {
    enableCoin: function () {
      this.$store.commit('enableCoin', this.selected_coin);
      this.selected_coin = '';
      this.negative_coin = this.$store.state.negative_coin;
    }
  },
  computed: {
    isSelected: function () {
      return this.selected_coin === '';
    },
    isEmpty: function () {
      return this.negative_coin.length === 0;
    }
  }
}
</script>