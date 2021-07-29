<template>
  <v-layout wrap>
    <v-carousel
      cycle
      v-model="model"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="img in images" :key="img" :src="img.src">
        <v-sheet height="100%" color="transparent">
          <v-row
            d-flex
            wrap
            align-content="center"
            class="fill-height"
            justify="center"
          >
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-layout>
</template>

<script>
export default {
  name: "carusel",
  data: () => ({
    images: [
      {
        src: "https://www.seay.org.mx/public/frontend/img/slider/slider-curso-compliance-4.jpg",
      },
      {
        src: "https://www.seay.org.mx/public/frontend/img/slider/slider-revista-portada.jpg",
      },
      {
        src: "https://www.seay.org.mx/public/frontend/img/slider/slider-ut-btn.jpg",
      },
    ],
  }),
};
</script>