<script>
export default {
  name: "Pagetitle",
  props: ["pagetitle", "subtitle"],
};
</script>

<template>
  <div class="pagetitle">
    <h2>{{ pagetitle }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.pagetitle {
  text-align: center;
  h1,
  h2 {
    font-weight: 700;
    font-size: $sizePagetitle;
    text-transform: uppercase;
    margin-bottom: 0.4em;
  }

  span {
    color: $colorTextSpecial;
  }

  p {
    font-size: $sizeSubtitle;
  }
}
</style>
