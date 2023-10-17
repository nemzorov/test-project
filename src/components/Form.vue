<script>
import Button from "@/components/UI/Button.vue";
import Input from "@/components/UI/Input.vue";
import Checkbox from "@/components/UI/Checkbox.vue";
import Select from "@/components/UI/Select.vue";
export default {
  name: "Form",
  components: { Button, Input, Checkbox, Select },
  data() {
    return {
      inputsValues: {
        name: "",
        phone: "",
        installment: "",
        product: this.products,
      },
    };
  },
  props: {
    options: {
      type: Object,
    },
    products: {
      type: Object,
    },
    resultPrice: {
      type: Number,
    },
  },
  methods: {
    changeInputs(props) {
      this.inputsValues[props.name] = props.value;
    },
    changeProduct(props) {
      this.$emit("prod", props);
    },
  },
};
</script>

<template>
  <form @submit.prevent="$emit('form-submit', { inputsValues })" class="form">
    <div class="form__title">Заказ</div>
    <Select
      :parametrs="{ options: options, label: 'Товар', name: 'product' }"
      @product-change="changeProduct"
    />
    <div class="form__result">
      <div class="form__title">Итого:</div>
      <div class="form__price">
        <span>{{ resultPrice }}</span> ₽
      </div>
    </div>
    <div class="form__form">
      <Input
        @input-change="changeInputs"
        :parametrs="{
          name: 'name',
          type: 'text',
          id: 21,
          label: 'Имя',
          required: true,
        }"
      />
      <Input
        @input-change="changeInputs"
        :parametrs="{
          name: 'phone',
          type: 'tel;',
          id: 22,
          label: 'Телефон',
          required: true,
        }"
      />
      <div class="form__text">
        Менеджеры свяжутся с вами в<br />
        ближайшее время для<br />
        уточнения деталей заказа
      </div>
      <div class="form__installment">
        <Checkbox
          @input-change="changeInputs"
          :parametrs="{
            name: 'installment',
            id: 'installment',
            label: 'Покупка в рассрочку',
          }"
        />
      </div>
      <Button :parametrs="{ title: 'Заказать', type: 'submit' }" />
    </div>
  </form>
</template>

<style lang="scss">
@import "@/assets/scss/vars.scss";

.form {
  padding: 3.125em 1.876em;
  border-radius: $borderRadius;
  box-shadow: $boxShadow;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.875em;

  &__title {
    font-size: 2.1875em;
    font-weight: 700;
    text-align: center;
  }

  &__price {
    @extend .form__title;
    font-size: 3.125em;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 1.125em;
  }

  &__text {
    font-size: 1.125em;
    text-align: center;
    color: $colorTextMuted;
  }

  .checkbox {
    &__icon {
      border-width: 1px;
      font-size: 0.85rem;
      border-radius: 4px;
    }

    label {
      justify-content: center;
    }
  }
}
</style>
