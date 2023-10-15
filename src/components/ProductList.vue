<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: "ProductList",
  props: {
    productList: {
      type: Object,
    },
  },
  components: { ProductItem },
};
</script>

<template>
  <div class="product-list">
    <div class="product-list__items">
      <ProductItem
        v-for="subproduct in productList"
        :productItem="subproduct"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.product-list {
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
