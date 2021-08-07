<template>
  <div class="image"></div>
  <div class="container mx-auto px-60 -mt-20 space-y-6">
    <section><MastercraftCardContent /></section>
    <section><BackersCardContent /></section>
    <section><AboutCardContent /></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackersCardContent from "../components/CardsContentIndex/BackersCardContent.vue";
import MastercraftCardContent from "../components/CardsContentIndex/MastercraftCardContent.vue";
import AboutCardContent from "../components/CardsContentIndex/AboutCardContent.vue";

export default defineComponent({
  name: "Index",
  components: { BackersCardContent, MastercraftCardContent, AboutCardContent },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.image {
  background-image: url(../assets/image-hero-desktop.jpg);
  height: 400px;
}
</style>
