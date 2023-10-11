<script>
export default {
  name: "Pagetitle",
};
</script>

<template>
  <div class="pagetitle">
    <h2>Откройте <span>больше возможностей</span> «Крестьянки»</h2>
    <p>Вместе с полезными дополнениями</p>
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
