<template>
  <div>
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
import 'firebase/firestore'
import firebaseui from 'firebaseui-ja'
import 'firebaseui-ja/dist/firebaseui.css'
import store from '@/store'

export default {
  name: "Login",
  mounted() {
    console.log("Login_mounted");
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", {
      callbacks: {
        uiShown: () => {
          console.log("uiShown");
        },
        signInSuccessWithAuthResult: (authResult, redirectUrl) => {
          console.log("signInSuccessWithAuthResult", authResult, redirectUrl);

          let isNewUser = authResult.additionalUserInfo.isNewUser;  // 新規ユーザーか、そうでないか(Boolean)
          let displayName = authResult.user.displayName;  // 表示名(String)
          let photoURL = authResult.user.photoURL;  // ユーザー画像のURL(String)

          store.commit('updateUser', true)

          // SNSログイン＆で登録済みであればスキップ
          if (displayName != "ゲスト" && !isNewUser) {
            return true;
          }

          const db = firebase.firestore()
          db.collection('user').doc(authResult.user.uid).set({
            name: displayName,  // String
            explanation: '',  // String
            management_coins: [],  // Array(Reference)
            management_coin_names: [], // Array(String)
            active_coins: [],  // Array(Array(AnyType))
            active_coin_names: [],  // Array(String)
          })
          .then(() => {
            console.log('Firestoreへのユーザー登録完了')
          })

          switch (authResult.additionalUserInfo.providerId) {  // どのサービスを使ったのか
            case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
              displayName = authResult.additionalUserInfo.profile.name;
              photoURL = authResult.additionalUserInfo.profile.picture;
              break;
            case firebase.auth.FacebookAuthProvider.PROVIDER_ID:
              displayName = authResult.additionalUserInfo.profile.name;
              photoURL = authResult.additionalUserInfo.profile.picture.data.url;
              break;
            case firebase.auth.TwitterAuthProvider.PROVIDER_ID:
              displayName = authResult.additionalUserInfo.profile.name;
              photoURL =
                authResult.additionalUserInfo.profile.profile_image_url;
              break;
            case firebase.auth.GithubAuthProvider.PROVIDER_ID:
              displayName = authResult.additionalUserInfo.profile.name;
              photoURL = authResult.additionalUserInfo.profile.avatar_url;
              break;
            default:
              displayName = "ゲスト";
              photoURL = "";
              break;
          }

          const user = {
            displayName: displayName,
            photoURL: photoURL
          };

          // firebase.auth().currentUserでユーザー情報を取得。この場合はUpdateを行う。
          firebase
            .auth()
            .currentUser.updateProfile(user)
            .then(res => {
              console.log("Auth登録完了", res);
              alert("ログインしました。");
              this.$router.push('/')
            });
          
        },
        signInFailure: function(error) {
          console.log("signInFailure", error);
          alert(error.message);
        }
      },
      autoUpgradeAnonymousUsers: true,
      signInFlow: "redirect",
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ]
    });
  }
};
</script>