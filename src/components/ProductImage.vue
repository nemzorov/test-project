<!-- често говоря, я не знаю, как это правильно сделать. Поэтому сделал так. -->
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
@keyframes view-subprod {
  from {
    transform: translate(-50%, -50%) scale(2);
    left: 50%;
    top: 50%;
  }
  to {
    transform: scale(1);
  }
}

.product-image {
  &__wrapper {
    position: relative;
    width: 100%;
    height: 400px;
  }

  &__item {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    animation-name: view-subprod;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
    --width: 5rem;
    width: var(--width);

    img {
      width: 100%;
    }

    &:nth-child(1) {
      left: 0;
      top: 80%;
    }
    &:nth-child(2) {
      left: 25%;
      top: 100%;
    }
    &:nth-child(3) {
      left: 50%;
      top: 100%;
    }
    &:nth-child(4) {
      left: calc(100% - var(--width));
      top: 80%;
    }
  }

  &__main {
    position: absolute;
    left: 50%;
    top: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
  }
  img {
    object-fit: contain;
  }
}
</style>
