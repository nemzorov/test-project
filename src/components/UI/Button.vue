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
  <button @click.prevent="" class="button button_submit">
    <span>{{ parametrs.title }}</span>
  </button>
</template>
