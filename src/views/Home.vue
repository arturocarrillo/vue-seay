<template>
  <v-container grid-list-lg>
    <app-carusel></app-carusel>
    <v-row wrap>
      <v-col cols="12">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-card-title>Hello</v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import carusel from "@/components/partials/carusel";

export default {
  name: "Home",

  components: {
    "app-carusel": carusel,
  },
};
</script>
