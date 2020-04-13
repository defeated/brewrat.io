<template>
  <v-container>

    <v-data-iterator :items="drinks" :items-per-page="-1" hide-default-footer loading loading-text="Brewing...">
      <template v-slot:default="props">
        <v-row>
          <v-col cols="12" md="4" v-for="item in props.items" :key="item.id">
            <Drink :drink="item" />
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Drink from '@/components/Drink.vue'

export default {
  components: {
    Drink
  },

  computed: {
    ...mapState(['drinks'])
  },

  mounted() {
    this.$store.dispatch('fetchDrinks')
  }
}
</script>

<style scoped>
.v-card__title {
  background: rgba(0, 0, 0, 0.25);
}
</style>
