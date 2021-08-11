<template>
  <v-container grid-list-lg>
    <card-directory></card-directory>
  </v-container>
</template>
<script>
import directory from "@/components/info/directory";

export default {
  name: "main-directory",

  components: {
    "card-directory": directory,
  },
};
</script>