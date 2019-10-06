<template>
<v-container>
  <v-select
    :items="coins"
    v-model="selected_coin"
    label="コイン追加"
    outlined
    block
  ></v-select>
  <v-btn text @click="submitParent()">このコインを使用する</v-btn>
</v-container>
</template>

<script>
export default {
  name: 'add_coin',
  props: {
    coins: Array,
  },
  data: function() {
    return{
      selected_coin: '',
    }
  },
  methods: {
    submitParent: function() {
      if (this.selected_coin !== '') {
        // console.log(this.selected_coin);
        this.$emit('add_event', this.selected_coin);
        this.selected_coin = '';
      }
    }
  }
}
</script>