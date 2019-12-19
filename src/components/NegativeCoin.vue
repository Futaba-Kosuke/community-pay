<template>
<v-container>
  <v-select
    :items="this.negative_coin"
    v-model="selected_coin"
    label="コイン追加"
    outlined
    block
    :disabled="isEmpty"
  ></v-select>
  <v-btn text @click="toEnableCoin()" :disabled="isSelected">このコインを使用可能にする</v-btn>
</v-container>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'add_coin',
  data: function() {
    return{
      selected_coin: '',
      negative_coin: this.$store.state.negative_coin_names,
    }
  },
  methods: {
    toEnableCoin: async function () {
      const db = firebase.firestore()
      
      const current_user = firebase.auth().currentUser
      const current_user_ref = db.collection('user').doc(current_user.uid)
      
      let selected_coin_ref
      await db.collection('coin').where('name', '==', this.selected_coin)
        .get()
        .then((query) => {
          query.forEach((doc) => {
            selected_coin_ref = db.collection('coin').doc(doc.id)
          })
        })
      
      const selected_coin_data = {
        name: this.selected_coin,
        address: selected_coin_ref,
        value: 0,
        update_time: new Date()
      }

      await current_user_ref.update({
        active_coin_names: firebase.firestore.FieldValue.arrayUnion(this.selected_coin)
      })
      await current_user_ref.update({
        active_coins: firebase.firestore.FieldValue.arrayUnion(selected_coin_data)
      })
      await selected_coin_ref.update({
        users: firebase.firestore.FieldValue.arrayUnion(current_user_ref)
      })

      alert(this.selected_coin + 'を有効化しました！')
      this.$router.push('/')
      this.$router.go(0)
    }
  },
  computed: {
    isSelected: function () {
      return this.selected_coin === '';
    },
    isEmpty: function () {
      return this.negative_coin.length === 0;
    }
  }
}
</script>