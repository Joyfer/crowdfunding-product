<template>
  <div class="image"></div>
  <div class="container mx-auto px-4 lg:px-32 xl:px-60 -mt-20 space-y-6">
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
@media (max-width: 400px) {
  .image {
    background-image: url(../assets/image-hero-mobile.jpg);
    background-position: center;
    background-size: cover;
    height: 400px;
  }
}

@media (min-width: 401px) {
  .image {
    background-image: url(../assets/image-hero-desktop.jpg);
    background-position: center;
    background-size: cover;
    height: 400px;
  }
}
</style>
