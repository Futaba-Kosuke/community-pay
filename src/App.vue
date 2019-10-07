<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>コミュペイ</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/qr_reader"><v-btn
        icon
        target="_blank"
      >
        <v-img
          :src="require('./assets/icon_setting.png')"
          class="my-3"
          contain
          height="30"
        ></v-img>
      </v-btn></router-link>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer
      app
      color="primary lighten-1"
      padless
    >
      <!-- <v-row
        justify="center"
        no-gutters
      >
        <router-link to="/"><v-btn text color="white" class="my-2">Home</v-btn></router-link> 
        <v-btn to="/" text color="white" class="my-2" exact>HOME</v-btn>
        <router-link to="/about"><v-btn text color="white" class="my-2">About</v-btn></router-link> 
        <router-link to="/use_coin"><v-btn text color="white" class="my-2">Use</v-btn></router-link> 
        <router-link to="/create_coin"><v-btn text color="white" class="my-2">Create</v-btn></router-link> 
        <router-link to="/qr_reader"><v-btn text color="white" class="my-2">QR</v-btn></router-link>
      </v-row> -->
      <TransitionBar/>
    </v-footer>
  </v-app>
</template>

<script>
import TransitionBar from './components/TransitionBar'

export default {
  name: 'app',
  components: {
    TransitionBar,
  }  
}
</script>