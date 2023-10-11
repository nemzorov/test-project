<script>
import Pagetitle from "@/components/elements/vue-pagetitle.vue";
import Products from "@/components/vue-products.vue";
import Canvas from "@/components/vue-canvas.vue";
import Form from "@/components/vue-form.vue";

export default {
  name: "Section",
  props: {
    section: {
      type: Object,
    },
  },
  components: { Pagetitle, Products, Canvas, Form },
};
</script>

<template>
  <section class="constructor">
    <div class="container">
      <Pagetitle
        v-if="section.pagetitle"
        v-bind:pagetitle="section.pagetitle"
        v-bind:subtitle="section.subitle"
      />
      <div class="constructor__wrapper">
        <Products class="constructor__products" />
        <Canvas class="constructor__img" />
        <Form class="constructor__form" />
      </div>
    </div>
  </section>
</template>

<style lang="scss"></style>
