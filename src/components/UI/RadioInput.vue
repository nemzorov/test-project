<script>
export default {
  name: "RadioInput",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="radio-input">
    <input :type="parametrs.type" :name="parametrs.name" :id="parametrs.id" />
    <div class="radio-input__checked"></div>
  </div>
  <label :for="parametrs.id">
    <img :src="parametrs.img" :alt="parametrs.name" />
    <span>{{ parametrs.name }}</span>
  </label>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.radio-input {
  width: 1.875em;
  height: 1.875em;
  border: 3px solid $colorBorder;
  border-radius: 50%;
  padding: 0.2em;
  position: relative;

  &__checked {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.125em;
    height: 1.125em;
    background: transparent;
    border-radius: 50%;
    pointer-events: none;
    background: $colorPrimary;
    transition: 0.15s;
    font-size: 0;
  }
  input {
    display: none;

    &:checked {
      & ~ .radio-input__checked {
        font-size: 1em;
        transition: 0.15s;
      }
    }
  }
}
</style>
