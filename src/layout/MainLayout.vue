<template>
  <header>
    <Navbar></Navbar>
  </header>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./bars/navbar/Navbar.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Navbar,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
