<template>
  <v-container grid-list-lg>
    <card-weare></card-weare>
  </v-container>
</template>

<script>
import text_weare from "@/components/info/text-weare";

export default {
  name: "weare",

  components: {
    "card-weare": text_weare,
  },
};
</script>