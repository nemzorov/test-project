<script>
export default {
  name: "Pagetitle",
  props: {
    parametrs: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="pagetitle">
    <h2 v-html="parametrs.pagetitle"></h2>
    <p v-if="parametrs.subtitle">{{ parametrs.subtitle }}</p>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.pagetitle {
  text-align: center;
  font-size: $sizePagetitle;

  @media (min-width: 1201px) {
    font-size: 3.25rem;
  }

  h1,
  h2 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0.4em;
  }

  span {
    color: $colorTextSpecial;
  }

  p {
    font-size: 0.615em;
  }
}
</style>
