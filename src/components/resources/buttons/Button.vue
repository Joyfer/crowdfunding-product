<template>
  <div>
    <button
      :class="
        `bg-primary text-white px-10 py-5 rounded-full font-bold hover:bg-primary-dark ` +
        `transition duration-500 ease-in-out`
      "
    >
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
