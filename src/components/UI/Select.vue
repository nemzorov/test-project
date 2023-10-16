<script>
export default {
  name: "Select",
  props: {
    options: {
      type: Object,
    },
  },
  data() {
    return {
      option: this.options[0]["name"],
    };
  },
};
</script>

<template>
  <select v-model="option">
    <option v-for="option in options">{{ option.name }}</option>
  </select>
</template>

<style lang="scss"></style>
