<script>
import Subproduct from "@/components/vue-subproduct.vue";
export default {
  name: "Subproducts",
  props: {
    subproducts: {
      type: Object,
    },
  },
  components: { Subproduct },
};
</script>

<template>
  <div class="subproducts">
    <div class="subproducts__items">
      <Subproduct
        v-for="subproduct in subproducts"
        v-bind:subproduct="subproduct"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.subproducts {
  background: $colorBgLight;
  border-radius: $borderRadius;
  padding: 1.25rem;

  &__items {
    display: flex;
    flex-direction: column;
    gap: $gapColumns;
  }
}
</style>
