<script>
export default {
  name: "ButtonSubmit",
  props: ["title"],
};
</script>

<template>
  <button @click.prevent="" class="button button_submit">
    <span>{{ title }}</span>
  </button>
</template>
