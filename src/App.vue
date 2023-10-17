<script>
import Constructor from "@/components/Constructor.vue";
import Popup from "@/components/UI/Popup.vue";
import Loader from "@/components/UI/Loader.vue";
import Store from "@/api/store.js";
import API from "@/api/api.js";

export default {
  name: "App",
  components: { Constructor, Popup, Loader },
  data() {
    return {
      data: Store.getData(),
      popup: {
        isOpen: false,
        data: {
          title: 'Благодарим за заказ!',
          text: 'Менеджер уже получил Ваше сообщение, он свяжется с Вами в течение 10 минут',
        },
      },
      loader: {
        isOpen: false,
      }
    };
  },
  methods: {
    openPopup() {
      this.popup.isOpen = true;
    },
    closePopup() {
      this.popup.isOpen = false;
    },
    formSubmit(props) {
      this.loader.isOpen = true;
      API.submitForm(props).then((data)=>{
        this.loader.isOpen = false;
        this.openPopup();
        console.log('Форма отправлена', data);
      });
    }
  }
};
</script>

<template>
  <Constructor :data="data" @form-submit="formSubmit" />
  <Popup v-if="popup.isOpen" :parametrs="popup.data" @close-popup="closePopup"/>
  <Loader v-if="loader.isOpen"/>
</template>