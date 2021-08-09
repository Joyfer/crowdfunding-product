<template>
  <button class="rounded-full"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconButton",
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
