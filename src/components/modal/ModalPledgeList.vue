<template>
  <Modal>Hola qué tal</Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./modalBase/Modal.vue";

export default defineComponent({
  name: "ModalPledgeList",
  components: {
    Modal,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
