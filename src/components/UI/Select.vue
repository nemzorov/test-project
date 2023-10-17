<script>
export default {
  name: "Select",
  props: {
    parametrs: {
      type: Object,
    },
  },
  data() {
    return {
      option: this.parametrs.options[0],
      isOpenList: false,
    };
  },
  methods: {
    productChange(value) {
      this.$emit("product-change", value);
    },
    changeLink(props) {
      this.isOpenList = false;
      this.option = props;
      this.productChange(this.option);
    },
  },
  mounted() {
    this.productChange(this.option);
  },
};
</script>

<template>
  <div class="select">
    <div class="select__input" @click="isOpenList = !isOpenList">
      <input :value="option.name" type="text" autocomplete="off" readonly="" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="9"
        viewBox="0 0 16 9"
        fill="none"
      >
        <path
          d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7L7 8L9 8L9 7L7 7Z"
          fill="#00AC07"
        />
      </svg>
    </div>
    <ul v-if="isOpenList" class="select__list">
      <li v-for="optionEl in parametrs.options" @click="changeLink(optionEl)">
        {{ optionEl.name }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";
.select {
  width: 100%;
  cursor: pointer;
  position: relative;

  &__input {
    border: 2px solid currentColor;
    border-radius: 3px;
    color: $colorPrimary;
    width: 100%;
    font-size: 1.25em;
    padding: 1rem;
    height: 3.375rem;
  }

  &__list {
    width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    box-shadow: $boxShadow;
    border-radius: 3px;
    overflow: hidden;
    max-height: 350px;
    overflow: auto;
    z-index: 10;
    background: $colorBg;

    li {
      padding: 1rem;
    }

    li:hover {
      background: $colorBorder;
    }
  }

  svg {
    position: absolute;
    right: 1em;
    top: 50%;
    transform: translateY(-50%);
  }

  input {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    color: inherit;
    font-size: 1em;
    cursor: inherit;
  }
}
</style>
