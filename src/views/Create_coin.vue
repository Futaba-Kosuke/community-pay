<template>
  <v-container class="create_coin">
      <v-text-field
        v-model="coin.name"
        label="コイン名"
      />
    <v-row>
      <v-col>
        <v-text-field
          v-model="coin.yen"
          label="日本円"
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="coin.coin"
          :label="coin.name"
        />
      </v-col>
    </v-row>
    <v-textarea
      v-model="coin.explanation"
      label="説明"
    />
    <v-btn @click="createCoin()" :disabled="isCoin">この設定でコインを作成する</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'about',
  components: {
  },
  data: function() {
    return {
      coin: {
        name: '',
        yen: '',
        coin: '',
        explanation: '',
      }
    }
  },
  methods: {
    createCoin: function () {
      if (this.coin.name !== '' && !isNaN(this.coin.yen) && !isNaN(this.coin.coin) && this.coin.explanation !== '') {
        this.$store.commit('disableCoin', this.coin);
        // console.log(this.$store.state.negative_coin);
        Object.assign(this.$data, this.$options.data.call(this));
      }
    }
  },
  computed: {
    isCoin: function () {
      return !(this.coin.name !== '' && this.coin.yen !== '' && this.coin.coin !== '' && this.coin.explanation !== '' && !isNaN(this.coin.yen) && !isNaN(this.coin.coin));
    }
  }
}
</script>