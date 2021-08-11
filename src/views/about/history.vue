<template>
  <v-container grid-list-lg>
    <card-history></card-history>
  </v-container>
</template>

<script>
import text_history from "@/components/info/text-history";

export default {
  name: "History",

  components: {
    "card-history": text_history,
  },
};
</script>