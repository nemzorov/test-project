<script>
export default {
  name: "Subproduct",
  props: {
    subproduct: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="subproduct">
    <div class="subproduct__content hover-underline">
      <input v-bind:id="`subprod${subproduct.id}`" type="checkbox" />
      <label l v-bind:for="`subprod${subproduct.id}`">
        <img v-bind:src="subproduct.img" v-bind:alt="subproduct.name" />
        <span>{{ subproduct.name }}</span>
      </label>
    </div>

    <div class="subproduct__price">
      <div v-if="subproduct.price.old" class="subproduct__price-old">
        {{ subproduct.price.old }} {{ subproduct.price.currency }}
      </div>
      <div class="subproduct__price-current">
        {{ subproduct.price.current }} {{ subproduct.price.currency }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.subproduct {
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
    @extend .subproduct__content;
  }
}
</style>
