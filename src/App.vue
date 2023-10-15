<script>
import Constructor from "@/components/Constructor.vue";
import Store from "@/api/store.js";
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
  <Constructor :data="data" />
</template>
