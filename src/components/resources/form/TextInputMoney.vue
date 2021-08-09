<template>
  <div
    class="flex content-center border-2 border-gray-300 rounded-full justify-center px-4 group focus-within:border-primary"
  >
    <span class="my-auto text-2xl font-bold text-gray-400">$</span>
    <input
      type="number"
      class="border-none bg-transparent w-20 font-bold focus:ring-0 focus:outline-none text-lg"
      v-model="text"
      @input="$emit('inputChange', text)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "TextInputMoney",
  setup() {
    const text = ref<number>(0);
    return { text };
  },
  emits: ["inputChange"],
});
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
}
</style>
