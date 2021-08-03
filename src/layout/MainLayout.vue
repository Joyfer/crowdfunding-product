<template>
  <header>
    <Navbar></Navbar>
  </header>
  <div>
    <router-view></router-view>
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
