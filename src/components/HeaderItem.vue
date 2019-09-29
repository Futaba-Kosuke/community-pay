<template>
  <header class="flex-box">
    <h1 class="title">コミュペイ</h1>
    <router-link to="/qr_reader"><img src="../assets/icon_setting.png" class="icon"></router-link>
  </header>
</template>

<style scoped>
.title {
  font-size: 30px;
  margin-left: 30px;
}

.icon {
  width: 30px;
  margin: 10px;
}

.flex-box {
  display: flex;
  justify-content: space-between;
  background: #5cb487;
}
</style>