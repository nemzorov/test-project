<script>
export default {
  name: "Checkbox",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="checkbox">
    <label :for="parametrs.id">
      <div class="checkbox__icon">
        <input type="checkbox" :name="parametrs.name" :id="parametrs.id" />
        <div class="checkbox__checked"></div>
      </div>
      <img v-if="parametrs.img" :src="parametrs.img" :alt="parametrs.name" />
      <span>{{ parametrs.label }}</span>
    </label>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.checkbox {
  &__icon {
    width: 1.5em;
    height: 1.5em;
    border: 3px solid $colorBorder;
    border-radius: 50%;
    position: relative;
  }

  &__checked {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1em;
    height: 1em;
    background: transparent;
    border-radius: inherit;
    pointer-events: none;
    background: $colorPrimary;
    transition: 0.15s;
    font-size: 0;
  }

  label {
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

  input {
    display: none;

    &:checked {
      & ~ .checkbox__checked {
        font-size: 1em;
        transition: 0.15s;
      }
    }
  }
}
</style>
