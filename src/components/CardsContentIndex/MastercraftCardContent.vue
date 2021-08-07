<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../resources/card/Card.vue";
import BookmarkButton from "../resources/buttons/BookmarkButton.vue";
import Button from "../resources/buttons/Button.vue";

export default defineComponent({
  name: "MastercraftCardContent",
  components: {
    Card,
    BookmarkButton,
    Button,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
