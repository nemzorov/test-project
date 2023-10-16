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
  <select class="select" v-model="option">
    <option v-for="option in options">{{ option.name }}</option>
  </select>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.select {
  border: 2px solid currentColor;
  border-radius: 3px;
  padding: 1rem;
  color: $colorPrimary;
  width: 100%;
  font-size: 1.25em;
}
</style>
