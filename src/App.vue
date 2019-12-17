<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>コミュペイ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!isLogin" text to="/login_form">ログイン</v-btn>
      <logout-form v-if="isLogin"></logout-form>
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
import TransitionBar from '@/components/TransitionBar'
import LogoutForm from '@/components/LogoutForm'
import firebase from 'firebase'
import 'firebase/firestore'
import store from '@/store'

export default {
  name: 'app',
  components: {
    TransitionBar,
    LogoutForm,
  },
  mounted: () => {
    // ログイン・非ログイン状態の判定
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        store.commit('updateUser', true)
        
        const user = firebase.auth().currentUser
        // console.log(user.uid)
        const db = firebase.firestore()
        db.collection('user').doc(user.uid).set({
          name: user.displayName,
          explanation: '',
          management_coins: [],
        })
      } else {
        store.commit('updateUser', false)
      }
    })
  },
  computed: {
    isLogin: () => {
      return store.state.user_state
    }
  },
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