<template>
  <div class="image"></div>
  <div class="container mx-auto px-60 -mt-20 space-y-6">
    <section>
      <Card :masterCraft="true">
        <template #default>
          <div class="text-center my-4">
            <h1 class="font-bold text-3xl">Mastercraft Bamboo Monitor Riser</h1>
            <p class="mt-5 text-gray-600 mb-10">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div></template
        ><template #actions
          ><Button>Back this project</Button><BookmarkButton></BookmarkButton
        ></template>
      </Card>
    </section>
    <section><BackersCardContent /></section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BackersCardContent from "../components/CardsContentIndex/BackersCardContent.vue";

import Card from "../components/resources/card/Card.vue";
import Button from "../components/resources/buttons/Button.vue";
import BookmarkButton from "../components/resources/buttons/BookmarkButton.vue";
export default defineComponent({
  name: "Index",
  components: { Card, Button, BookmarkButton, BackersCardContent },
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
