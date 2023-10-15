<script>
export default {
  name: "Input",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <label class="input" :for="parametrs.id">
    <input
      placeholder=" "
      :name="parametrs.name"
      :type="parametrs.type"
      :class="parametrs.required ? 'required' : ''"
    />
    <div class="input__label">{{ parametrs.label }}</div>
  </label>
</template>
