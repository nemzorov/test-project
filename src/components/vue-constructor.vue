<script>
import Pagetitle from "@/components/vue-pagetitle.vue";
import Subproducts from "@/components/vue-subproducts.vue";
import Canvas from "@/components/vue-canvas.vue";
import Form from "@/components/vue-form.vue";

export default {
  name: "Section",
  props: {
    data: {
      type: Object,
    },
  },
  components: { Pagetitle, Subproducts, Canvas, Form },
};
</script>

<template>
  <section class="constructor">
    <div class="container">
      <Pagetitle
        v-if="data.pagetitle"
        v-bind:pagetitle="data.pagetitle"
        v-bind:subtitle="data.subitle"
      />
      <div class="constructor__items">
        <Subproducts
          v-bind:subproducts="data.subproducts"
          class="constructor__item constructor__item_subproducts"
        />
        <Canvas class="constructor__item constructor__item_img" />
        <Form class="constructor__item constructor__item_form" />
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
      @media (min-width: 993px) {
        min-width: 21.375rem;
      }
    }
  }
}
</style>
