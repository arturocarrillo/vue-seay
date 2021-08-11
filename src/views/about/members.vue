<template>
  <v-container grid-list-lg>
    <card-members></card-members>
  </v-container>
</template>

<script>
import text_members from "@/components/info/text-members";

export default {
  name: "members",

  components: {
    "card-members": text_members,
  },
};
</script>