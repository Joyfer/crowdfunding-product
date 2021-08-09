<template>
  <Modal :isOpen="store.state.pledgeModal" @closeModal="closeModal">
    <h1 class="font-bold text-3xl">Back this project</h1>
    <p class="mt-6 text-gray-600 mb-10 text-lg">
      Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the
      world?
    </p>
    <div><PledgeListModal></PledgeListModal></div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./modalBase/Modal.vue";
import { useStore } from "@/store/index";
import useModifyBodyOverflow from "@composable/useModifyBodyOverflow";
import PledgeListModal from "@/components/CardsContentIndex/pledgeList/PledgeListModal.vue";

export default defineComponent({
  name: "ModalPledgeListModal",
  components: {
    Modal,
    PledgeListModal,
  },
  setup() {
    const store = useStore();
    const { handleOverflow } = useModifyBodyOverflow();

    const closeModal = (): void => {
      store.commit("handlePledgeModal", false);
      handleOverflow(false);
    };
    return { store, closeModal };
  },
});
</script>

<style scoped></style>
