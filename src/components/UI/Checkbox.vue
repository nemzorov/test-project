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
    <input type="checkbox" :name="parametrs.name" :id="parametrs.id" />
    <label v-bind:for="parametrs.id">{{ parametrs.label }}</label>
  </div>
</template>

<style lang="scss">
.checkbox {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625em;
  font-size: 1.25em;

  input {
    cursor: inherit;
    width: 1.5em;
    height: 1.5em;
  }
  label {
    cursor: inherit;
  }
}
</style>
