<script>
import ButtonSubmit from "@/components/vue-button-submit.vue";
import Field from "@/components/vue-field.vue";
export default {
  name: "Form",
  components: { ButtonSubmit, Field },
  props: {
    products: {
      type: Object,
    },
  },
};
</script>

<template>
  <div class="form">
    <div class="form__title">Заказ</div>
    <div class="form__select"></div>
    <div class="form__result">
      <div class="form__title">Итого:</div>
      <div class="form__price">11 000 ₽</div>
    </div>
    <div class="form__form">
      <div class="form__fields">
        <Field
          v-bind:parametrs="{
            name: 'text',
            type: 'text',
            id: 21,
            label: 'Имя',
            required: true,
          }"
        />
        <Field
          v-bind:parametrs="{
            name: 'phone',
            type: 'tel;',
            id: 22,
            label: 'Телефон',
            required: true,
          }"
        />
      </div>
      <div class="form__text">
        Менеджеры свяжутся с вами в<br />
        ближайшее время для<br />
        уточнения деталей заказа
      </div>
      <div class="form__installment"></div>
      <ButtonSubmit v-bind:title="'Заказать'" />
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
  &__text {
    font-size: 1.125em;
    text-align: center;
    color: $colorTextMuted;
  }
}
</style>
