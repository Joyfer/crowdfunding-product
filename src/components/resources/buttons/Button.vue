<template>
  <button
    :class="
      `bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary-dark ` +
      `transition duration-500 ease-in-out ` +
      (disabled ? `cursor-not-allowed` : ``)
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
