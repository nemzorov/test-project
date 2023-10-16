<script>
export default {
  name: "Popup",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="popup">
    <div class="popup__wrapper">
      <div class="popup__title">{{ parametrs.title }}</div>
      <div class="popup__text">{{ parametrs.text }}</div>
      <div @click="$emit('close-popup')" class="popup__close"></div>
    </div>
    <div @click="$emit('close-popup')" class="popup__bgr"></div>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  &__wrapper {
    position: absolute;
    left: 50%;
    top: 50%;
    background: $colorBg;
    transform: translate(-50%, -50%);
    box-shadow: $boxShadow;
    border-radius: $borderRadius;
    width: 100%;
    height: auto;
    max-width: 745px;
    padding: 3.125rem;
    text-align: center;
  }

  &__bgr {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    z-index: -1;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.625rem;
  }

  &__text {
    font-size: 1.375rem;
  }
  &__close {
    position: absolute;
    right: 1.875rem;
    top: 1.875rem;
    font-size: 1.4rem;
    width: 1em;
    height: 1em;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background: $colorTitle;
      position: absolute;
      left: 50%;
      top: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
