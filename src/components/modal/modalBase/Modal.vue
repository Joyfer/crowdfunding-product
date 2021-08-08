<template>
  <teleport to="body">
    <div class="modal" v-if="store.state.modal" @click.self="handleModal">

        <Card class="w-2/3"><slot></slot></Card>
      
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store/index";
import Card from "@components/resources/card/Card.vue";

export default defineComponent({
  name: "Modal",
  components: {
    Card,
  },
  setup() {
    const store = useStore();
    const handleModal = (): void => {
      store.commit("handleModal");
    };
    return { store, handleModal };
  },
});
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
