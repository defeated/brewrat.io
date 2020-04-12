<template>
  <v-app>

    <v-navigation-drawer v-model="drawer" app />

    <v-app-bar app flat dark dense color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>BrewRat.io</v-toolbar-title>

      <v-spacer />

      <v-btn @click="$vuetify.theme.dark = !$vuetify.theme.dark" icon exact small>
        <v-icon small>mdi-theme-light-dark</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer inset app class="text-center" color="primary lighten-3">
      <v-col class="text-center">
        <img src="@/assets/face.png" height="24" width="24" />
        &copy;
        {{ new Date().getFullYear() }}
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<style scoped>
.v-footer img {
  vertical-align: text-bottom;
}
</style>
