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
    <v-btn @click="createCoin()">この設定でコインを作成する</v-btn>
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
      this.$store.commit('disableCoin', this.coin);
      console.log(this.$store.state.negative_coin);
    }
  }
}
</script>