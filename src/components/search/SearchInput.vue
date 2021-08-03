<template>
  <div
    :class="
      'rounded bg-black bg-opacity-20 px-3' +
      ' ' +
      'focus-within:bg-white focus-within:bg-opacity-20 focus-within:shadow-lg transition-colors duration-200'
    "
  >
    <input
      type="text"
      :class="'text-white bg-black bg-opacity-0 border-none border-0 focus:ring-0 px-0'"
    />
    <PrimaryButton :text="true" color="white">Search</PrimaryButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PrimaryButton from "../button/PrimaryButton.vue";

export default defineComponent({
  components: {
    PrimaryButton,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
