<template>
  <div v-if="masterCraft" class="absolute inset-x-0 w-full -mt-8">
    <img class="mx-auto" src="../../../assets/icon/logo-mastercraft.svg" />
  </div>
  <div class="bg-white border-custom shadow-sm px-5 py-10 sm:px-12 rounded-md">
    <div>
      <slot></slot>
    </div>
    <div v-if="!!hasActionSlot" class="mt-8 flex justify-between">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Card",
  setup(props, context) {
    const hasActionSlot = context.slots.actions;
    return { hasActionSlot };
  },
  props: {
    masterCraft: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.border-custom {
  border: 1px solid rgb(240, 240, 240);
}
</style>
