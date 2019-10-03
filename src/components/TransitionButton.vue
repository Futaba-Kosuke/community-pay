<template>
  <router-link :to="link">
    <div class="flex-box">
      <h2 v-bind:class="title">{{ title }}</h2>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TransitionButton',
  props: {
    title: String,
    link: String,
  },
}
</script>

<style scoped>
.create_coin {
  background: orange;
}
.use_coin {
  background: green;
}
.qr_reader {
  background: red;
}
.flex-box {
  display: flex;
}
</style>