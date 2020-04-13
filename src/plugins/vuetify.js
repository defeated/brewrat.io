import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,

    themes: {
      light: {
        primary: colors.brown.lighten1
      },
      dark: {
        primary: colors.brown.base
      }
    }
  }
});
