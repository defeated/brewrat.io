<template>
  <v-card tile>
    <v-img :src="drink.photo" height="240" class="white--text align-end">
      <v-card-title class="py-1">
        {{ drink.name }}
      </v-card-title>
    </v-img>

    <v-card-subtitle class="text-truncate">
      {{ drink.subtitle }}
    </v-card-subtitle>

    <v-card-text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est distinctio numquam sequi cumque, odio eaque facilis impedit veritatis reprehenderit id inventore laboriosam, esse consectetur repudiandae? Inventore eum omnis sapiente odit?

      <v-chip-group class="mt-3">
        <v-chip tile v-for="tag in drink.tags" :key="tag">
          <v-icon left>
            {{ tagIcons[tag] }}
          </v-icon>
          {{ tag }}
        </v-chip>
      </v-chip-group>

    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['drink'],

  data() {
    return {
      tagIcons: {
        cold: "mdi-snowflake",
        hot: "mdi-fire",
        espresso: "mdi-coffee",
        pourover: "mdi-water",
        milk: "mdi-glass-pint-outline",
        dessert: "mdi-ice-cream",
      }
    }
  }
}
</script>

<style scoped>
.v-card__title {
  background: rgba(0, 0, 0, 0.25);
}
</style>
