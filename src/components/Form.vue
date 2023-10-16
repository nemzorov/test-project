<script>
import Button from "@/components/UI/Button.vue";
import Input from "@/components/UI/Input.vue";
import Checkbox from "@/components/UI/Checkbox.vue";
import Select from "@/components/UI/Select.vue";
export default {
  name: "Form",
  components: { Button, Input, Checkbox, Select },
  props: {
    options: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="form__title">Заказ</div>
    <Select :options="options" />
    <div class="form__result">
      <div class="form__title">Итого:</div>
      <div class="form__price">11 000 ₽</div>
    </div>
    <div class="form__form">
      <Input
        :parametrs="{
          name: 'text',
          type: 'text',
          id: 21,
          label: 'Имя',
          required: false,
        }"
      />
      <Input
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
          :parametrs="{
            name: 'installment',
            id: 'installment',
            label: 'Покупка в рассрочку',
          }"
        />
      </div>
      <Button :parametrs="{ title: 'Заказать' }" />
    </div>
  </div>
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

  .checkbox__icon {
    border-width: 1px;
    font-size: 0.85rem;
  }
}
</style>
