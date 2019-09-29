<template>
  <div class="about">
    <HeaderItem/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import HeaderItem from "../components/HeaderItem"

export default {
  name: 'about',
  components: {
    HeaderItem,
  }
}
</script>