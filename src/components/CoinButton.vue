<template>
  <v-btn block height=70px>
    {{ msg }}  
  </v-btn>
</template>

<script>
export default {
  name: 'btn',
  props: {
    msg: String,
  }
}
</script>