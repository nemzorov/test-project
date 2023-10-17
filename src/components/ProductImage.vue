<script>
export default {
  name: "ProductImage",
  props: {
    product: {
      type: Object,
    },
    subproducts: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="product-image">
    <div class="product-image__wrapper">
      <div class="product-image__main">
        <img :src="product.img" />
      </div>
      <div v-if="subproducts" class="product-image__items">
        <div v-for="subproduct in subproducts" class="product-image__item">
          <img :src="subproduct.img" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-image {
  img {
    pointer-events: none;
  }
}
</style>
