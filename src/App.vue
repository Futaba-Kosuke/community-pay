<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>コミュペイ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="isLogin" text to="/login_form">ログイン</v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      app
      color="primary lighten-1"
      padless
    >
      <TransitionBar/>
    </v-footer>
  </v-app>
</template>

<script>
import TransitionBar from './components/TransitionBar'
import firebase from 'firebase'

export default {
  name: 'app',
  components: {
    TransitionBar,
  },
  computed: {
    isLogin: () => {
      return firebase.auth().currentUser === null
    }
  }
  // created: () => {
  //   const db = firebase.firestore();
  //   db.collection('test1').get()
  //     .then(res => {
  //       res.forEach((data) => {
  //         console.log(data.data())
  //       })
  //     });
  // }
}
</script>