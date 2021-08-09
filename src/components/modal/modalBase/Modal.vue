<template>
  <teleport to="body">
    <transition name="fade">
      <div class="modal" v-if="isOpen" @click.self="$emit('closeModal')">
        <Card class="w-2/3 h-5/6 overflow-auto"
          ><div class="flex justify-end">
            <IconButton @click="$emit('closeModal')"
              ><img src="@/assets/icon/icon-close-modal.svg"
            /></IconButton>
          </div>
          <slot></slot
        ></Card>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "@components/resources/card/Card.vue";
import IconButton from "@components/resources/buttons/IconButton.vue";

export default defineComponent({
  name: "Modal",
  components: {
    Card,
    IconButton,
  },
  setup() {
    return {};
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ["closeModal"],
});
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
