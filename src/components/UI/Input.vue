<script>
export default {
  name: "Input",
  data() {
    return {
      value: "",
    };
  },
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
      :required="!!parametrs.required"
      v-model="value"
      @input="
        $emit('input-change', {
          value: value,
          name: parametrs.name,
          label: parametrs.label,
        })
      "
    />
    <div class="input__label">{{ parametrs.label }}</div>
  </label>
</template>
