<template>
  <Modal
    :isOpen="store.state.pledgeCompletedModal"
    @closeModal="closeModal"
    classes="w-11/12 md:w-1/2"
  >
    <div
      class="flex justify-center items-center flex-col space-y-8 text-center"
    >
      <img class="w-32 h-32" src="@/assets/icon/icon-check.svg" />
      <h1 class="text-3xl font-bold">Thanks for your support!</h1>
      <p class="leading-8 md:px-5">
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <Button @click="closeModal">Got it!</Button>
    </div>
  </Modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./modalBase/Modal.vue";
import { useStore } from "@/store/index";
import PledgeListModal from "@/components/CardsContentIndex/pledgeList/PledgeListModal.vue";
import useModal from "@composable/useModal";
import Button from "@components/resources/buttons/Button.vue";

export default defineComponent({
  name: "ModalPledgeCompleted",
  components: {
    Modal,
    PledgeListModal,
    Button,
  },
  setup() {
    const store = useStore();
    const { closeModal } = useModal("handlePledgeCompletedModal", store);

    return { store, closeModal };
  },
});
</script>

<style scoped></style>
