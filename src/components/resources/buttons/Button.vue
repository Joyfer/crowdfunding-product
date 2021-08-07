<template>
  <button
    :class="
      `text-white px-10 py-5 rounded-full font-bold  ` +
      `transition duration-500 ease-in-out ` +
      (disabled ? `cursor-not-allowed bg-gray-300` : `bg-primary hover:bg-primary-dark`)
    "
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  setup() {
    return {};
  },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped></style>
