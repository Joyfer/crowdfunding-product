<template>
  <MainLayout
    ><template v-slot:default><router-view></router-view></template
  ></MainLayout>
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
  font-family: "Commissioner", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: rgb(248, 248, 248);
}
</style>
