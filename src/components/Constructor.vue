<script>
import Pagetitle from "@/components/UI/Pagetitle.vue";
import ProductList from "@/components/ProductList.vue";
import ProductImage from "@/components/ProductImage.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Constructor",
  props: {
    data: {
      type: Object,
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
          :productList="data.subproducts"
          class="constructor__item constructor__item_subproducts"
        />
        <ProductImage
          class="constructor__item constructor__item_img"
          :subproducts="data.subproducts"
          :products="data.products"
        />
        <Form
          :options="data.products"
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
      flex-basis: 26.5rem;
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
