<template>
  <Modal
    :isOpen="store.state.pledgeModal"
    @closeModal="closeModal"
    classes="w-11/12 md:w-2/3 h-5/6"
  >
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
import useModal from "@composable/useModal";
import PledgeListModal from "@/components/CardsContentIndex/pledgeList/PledgeListModal.vue";

export default defineComponent({
  name: "ModalPledgeListModal",
  components: {
    Modal,
    PledgeListModal,
  },
  setup() {
    const store = useStore();
    const { closeModal } = useModal("handlePledgeModal", store);

    return { store, closeModal };
  },
});
</script>

<style scoped></style>
