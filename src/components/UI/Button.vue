<script>
export default {
  name: "Button",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <button :type="parametrs.type" class="button button_submit">
    <span>{{ parametrs.title }}</span>
  </button>
</template>
