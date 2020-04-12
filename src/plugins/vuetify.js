import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,

    themes: {
      light: {
      },
      dark: {
        primary: colors.brown.base
      }
    }
  }
});
