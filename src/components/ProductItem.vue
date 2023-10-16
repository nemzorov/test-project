<script>
import RadioInput from "@/components/UI/RadioInput.vue";
export default {
  name: "ProductItem",
  components: { RadioInput },
  props: {
    productItem: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="product-item">
    <div class="product-item__content hover-underline">
      <RadioInput
        :parametrs="{
          id: `prod${productItem.id}`,
          type: 'checkbox',
          name: productItem.name,
          img: productItem.img,
        }"
      />
    </div>

    <div class="product-item__price">
      <div v-if="productItem.price.old" class="product-item__price-old">
        {{ productItem.price.old }} {{ productItem.price.currency }}
      </div>
      <div class="product-item__price-current">
        {{ productItem.price.current }} {{ productItem.price.currency }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-item {
  display: flex;
  justify-content: space-between;

  &__content {
    display: flex;
    gap: 0.625em;
    align-items: center;
    cursor: pointer;
  }
  img {
    width: auto;
    object-fit: contain;
    object-position: center;
    max-height: 50px;
  }
  label {
    @extend .product-item__content;
  }
}
</style>
