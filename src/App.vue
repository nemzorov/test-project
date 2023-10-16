<script>
import Constructor from "@/components/Constructor.vue";
import Popup from "@/components/UI/Popup.vue";
import Store from "@/api/store.js";

export default {
  name: "App",
  components: { Constructor, Popup },
  data() {
    return {
      data: Store.getData(),
      popup: {
        idOpen: false,
        data: {},
      },
    };
  },
  methods: {
    openPopup(parametrs) {
      this.popup.idOpen = true;
      this.popup.data = parametrs;
      document.body.classList.add('open-popup');
    },
    closePopup() {
      this.popup.idOpen = false;
      this.popup.data = {};
      document.body.classList.remove('open-popup');
    }
  }
};
</script>

<template>
  <Constructor :data="data" @popup-open="openPopup" />
  <Popup v-if="popup.idOpen" :parametrs="popup.data" @close-popup="closePopup"/>
</template>

