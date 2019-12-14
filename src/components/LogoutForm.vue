<template>
  <div>
    <v-btn text @click.stop="dialog_flag = true">ログアウト</v-btn>
    <v-dialog
      v-model="dialog_flag"
    >
      <v-card>
        <v-card-title class="headline">ログアウトしてよろしいですか？</v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog_flag = false; logout();">はい</v-btn>
          <v-btn text @click="dialog_flag = false">いいえ</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Logout',
  data () {
    return {
      dialog_flag: false,
    }
  },
  methods: {
    logout: () => {
      if (!firebase.auth().currentUser) {
        alert("問題が発生しました。アプリを再起動してください。")
        return
      }
      firebase.auth().signOut()
        .then((res) => {
          alert("正常にログアウトしました。")
        })
        .catch((err) => {
          alert("問題が発生しました。アプリを再起動してください。aaa", err)
        })
    }
  }
}
</script>