<template>
  <MainLayout
    ><template v-slot:default><router-view></router-view></template
  ></MainLayout>
  <ModalPledgeList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MainLayout from "./layout/MainLayout.vue";
import ModalPledgeList from "./components/modal/ModalPledgeList.vue";
export default defineComponent({
  name: "App",
  components: { MainLayout, ModalPledgeList },
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
  padding-bottom: 120px;
}
p {
  letter-spacing: 0.025em;
  line-height: 1.7rem;
}
</style>
