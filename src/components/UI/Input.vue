<script>
import { vMaska } from "maska";
export default {
  name: "Input",
  directives: { maska: vMaska },
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
  methods: {
    clearVal() {
      this.value = undefined;
    },
  },
};
</script>

<template>
  <label class="input" :for="parametrs.id">
    <input
      v-if="parametrs.name !== 'phone'"
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
    <input
      placeholder="+7 (___)-___-__-__"
      v-if="parametrs.name === 'phone'"
      type="tel"
      v-maska
      class="phone"
      :class="parametrs.required ? 'required' : ''"
      :required="!!parametrs.required"
      v-model="value"
      data-maska="+7 (###)-###-##-##"
      @change="
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
