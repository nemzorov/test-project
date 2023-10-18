<script>
import Checkbox from "@/components/UI/Checkbox.vue";
export default {
  name: "ProductItem",
  methods: {
    changeItem(props) {
      this.$emit("change-prod", {
        item: this.productItem,
        checked: props.value,
      });
    },
  },
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
        @input-change="changeItem"
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
@import "@/assets/scss/vars.scss";
.product-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $colorBorder;
  padding-bottom: 1.375em;
  gap: 3em;

  &__price {
    white-space: nowrap;
    text-align: right;

    &_current {
      font-weight: 700;
    }

    &_old {
      text-decoration: line-through;
      font-size: 0.875em;
    }
  }

  .checkbox {
    font-size: 1.25rem;
  }
}
</style>
