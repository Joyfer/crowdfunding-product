<template>
  <MainLayout></MainLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./layout/MainLayout.vue";
export default defineComponent({
  name: "App",
  components: { MainLayout },
});
</script>

<style>
#app {
  font-family: "Varela Round", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
