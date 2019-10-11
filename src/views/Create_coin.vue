<template>
  <v-container class="create_coin">
      <v-text-field
        v-model="coin_name"
        label="コイン名"
      />
    <v-row>
      <v-col>
        <v-text-field
          :title="coin_name"
          label="日本円"
        />
      </v-col>
      <v-col>
        <v-text-field
          :label="coin_name"
        />
      </v-col>
    </v-row>
    <v-textarea
      label="説明"
    />
  </v-container>
</template>

<script>

export default {
  name: 'about',
  components: {
  },
  data: function() {
    return {
      coin_name: ''
    }
  }
}
</script>