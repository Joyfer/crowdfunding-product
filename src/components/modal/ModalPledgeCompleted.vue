<template>
  <Modal :isOpen="store.state.pledgeCompletedModal" @closeModal="closeModal">
    hola
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./modalBase/Modal.vue";
import { useStore } from "@/store/index";
import PledgeListModal from "@/components/CardsContentIndex/pledgeList/PledgeListModal.vue";
import useModal from "@composable/useModal";

export default defineComponent({
  name: "ModalPledgeCompleted",
  components: {
    Modal,
    PledgeListModal,
  },
  setup() {
    const store = useStore();
    const { closeModal } = useModal('handlePledgeCompletedModal', store);
    
    return { store, closeModal };
  },
});
</script>

<style scoped></style>
