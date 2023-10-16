<script>
import Checkbox from "@/components/UI/Checkbox.vue";
export default {
  name: "ProductItem",
  components: { Checkbox },
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
      <Checkbox
        :parametrs="{
          id: `prod${productItem.id}`,
          name: 'prod-item',
          label: productItem.name,
          img: productItem.img,
        }"
      />
    </div>

    <div class="product-item__price-wrapp">
      <div
        v-if="productItem.price.old"
        class="product-item__price product-item__price_old"
      >
        {{ productItem.price.old }} {{ productItem.price.currency }}
      </div>
      <div class="product-item__price product-item__price_current">
        {{ productItem.price.current }} {{ productItem.price.currency }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product-item {
  display: flex;
  justify-content: space-between;

  &__price {
    white-space: nowrap;

    &_old {
      text-decoration: line-through;
    }
  }

  .checkbox {
    font-size: 1.25rem;
  }
}
</style>
