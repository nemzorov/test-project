<script>
import Constructor from "@/components/vue-constructor.vue";
import Store from "@/store.js";
export default {
  name: "App",
  components: { Constructor },
  data() {
    return {
      data: Store.getData(),
    };
  },
};
</script>

<template>
  <Constructor v-bind:data="data" />
</template>
