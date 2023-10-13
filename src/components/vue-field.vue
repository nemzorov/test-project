<script>
export default {
  name: "Field",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <label class="field" v-bind:for="parametrs.id">
    <input
      placeholder=" "
      class="field__input"
      v-bind:name="parametrs.name"
      v-bind:type="parametrs.type"
      v-bind:class="parametrs.required ? 'required' : ''"
    />
    <div class="field__label">{{ parametrs.label }}</div>
  </label>
</template>
