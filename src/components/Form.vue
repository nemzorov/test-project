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
      comment: "",
      inputsValues: {},
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
    addComment(props) {
      // Метод для добовления "Покупка в рассрочку" в скрытый инпут comment.
      // Но в целом у меня все данные после отправки попадают в inputsValues
      // Этот метод сделал следую ТЗ
      this.comment = props.value ? props.label : "";
    },
    changeInputs(props) {
      if (props.name === "installment") {
        this.addComment(props);
      }
      this.inputsValues[props.label] = props.value;
    },
    changeProduct(props) {
      this.$emit("prod", props);
    },
    submitForm() {
      this.inputsValues["Товар"] = this.products.product.name;
      if (this.products.subproducts) {
        this.inputsValues["Доп. товары"] = this.products.subproducts.map(
          (e) => e.name
        );
      }
      this.$emit("form-submit", this.inputsValues);
      this.$emit("clear-form");
      this.clearForm();
    },
    clearForm() {
      for (const val in this.$refs) {
        this.$refs[val].clearVal();
      }
    },
  },
};
</script>

<template>
  <form @submit.prevent="submitForm" class="form">
    <div class="form__title">Заказ</div>
    <Select
      ref="inputSelect"
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
        ref="inputName"
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
        ref="inputPhone"
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
          ref="inputInstallment"
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
    <input type="hidden" class="comment" name="comment" :value="comment" />
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
