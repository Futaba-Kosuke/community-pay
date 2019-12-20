<template>
  <div class="my-2">
    <v-btn to="/login_form" x-large class="start_button" color="indigo">ログインしてください</v-btn>
  </div>
</template>

<style scoped>
.start_button {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 15px 30px;
  text-align: center;
  width: 300px;
  font-size: 20px;

  color: white;
}
</style>