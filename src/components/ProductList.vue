<script>
import ProductItem from "@/components/ProductItem.vue";
export default {
  name: "ProductList",
  data() {
    return {
      subproducts: [],
    };
  },
  props: {
    productList: {
      type: Object,
    },
  },
  methods: {
    changeForm(props) {
      if (props.checked) {
        this.subproducts.push(props.item);
      } else {
        this.subproducts = this.subproducts.filter(
          (el) => el.id !== props.item.id
        );
      }
      this.$emit("prod-list", this.subproducts);
    },
    successClear() {
      this.subproducts = [];
    },
  },
  components: { ProductItem },
};
</script>

<template>
  <div class="product-list">
    <div class="product-list__items">
      <ProductItem
        ref="prodItem"
        @clear-success="successClear"
        @change-prod="changeForm"
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
    justify-content: center;
    gap: $gapColumns;
    height: 100%;
  }
}
</style>
