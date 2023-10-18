<script>
import Pagetitle from "@/components/UI/Pagetitle.vue";
import ProductList from "@/components/ProductList.vue";
import ProductImage from "@/components/ProductImage.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Constructor",
  data() {
    return {
      product: {},
      subproducts: undefined,
      resultPrice: 0,
    };
  },
  props: {
    data: {
      type: Object,
    },
  },
  methods: {
    formSubmit(props) {
      this.$emit("form-submit", props);
    },
    getSubprodList(list) {
      this.subproducts = list;
      this.calcPrice();
    },
    getProduct(product) {
      this.product = product;
      this.calcPrice();
    },
    calcPrice() {
      let result = 0;
      if (this.subproducts) {
        this.subproducts.forEach((el) => {
          result += el.price.current;
        });
      }
      result += this.product.price.current;
      this.resultPrice = result;
    },
  },
  components: { Pagetitle, ProductList, ProductImage, Form },
};
</script>

<template>
  <section class="constructor">
    <div class="container">
      <Pagetitle
        v-if="data.pagetitle"
        :parametrs="{ pagetitle: data.pagetitle, subtitle: data.subitle }"
      />
      <div class="constructor__items">
        <ProductList
          @prod-list="getSubprodList"
          :productList="data.subproducts"
          class="constructor__item constructor__item_subproducts"
        />
        <ProductImage
          class="constructor__item constructor__item_img"
          :subproducts="subproducts"
          :product="product"
        />
        <Form
          @prod="getProduct"
          @form-submit="formSubmit"
          :options="data.products"
          :resultPrice="resultPrice"
          :products="{ product, subproducts }"
          class="constructor__item constructor__item_form"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.constructor {
  .pagetitle {
    margin-bottom: 3.125rem;
  }
  &__items {
    display: flex;
    justify-content: space-between;
    column-gap: $gapColumns;
    row-gap: $gap;
    flex-wrap: wrap;
  }
  &__item {
    flex: 1 1 100%;

    @media (min-width: 993px) {
      flex-basis: auto;
    }

    &_subproducts {
      max-width: 26.7rem;
    }

    &_form {
      flex-grow: 0;
      @media (min-width: 993px) {
        min-width: 21.375rem;
      }
    }
  }
}
</style>
