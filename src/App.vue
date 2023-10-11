<script>
import Constructor from "@/components/vue-constructor.vue";
export default {
  name: "App",
  components: { Constructor },
  data() {
    return {
      pagetitle: "Откройте больше возможностей «Крестьянки»",
      subitle: "Вместе с полезными дополнениями",
    };
  },
};
</script>

<template>
  <Constructor v-bind:section="{ pagetitle, subitle }" />
</template>
