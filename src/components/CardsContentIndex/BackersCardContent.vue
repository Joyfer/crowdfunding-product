<template>
  <Card>
    <template #default
      ><div class="grid grid-cols-3 divide-x-2 divide-solid gap-4">
        <div v-for="({ title, sub }, index) in data" :key="index" class="pl-12">
          <h1 class="font-bold text-4xl">{{ title }}</h1>
          <p class="mt-4 text-gray-600">{{ sub }}</p>
        </div>
      </div>
      <div class="mt-12"><ProgressBar /></div
    ></template>
  </Card>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../resources/card/Card.vue";
import ProgressBar from "../resources/progressBar/ProgressBar.vue";

export default defineComponent({
  name: "GridBackers",
  components: {
    Card,
    ProgressBar,
  },
  setup() {
    interface dataObjects {
      title: string;
      sub: string;
    }

    const data: dataObjects[] = [
      { title: "$89,914", sub: "of $100,000 backed" },
      { title: "5,007", sub: "total backers" },
      { title: "56", sub: "days left" },
    ];
    return { data };
  },
});
</script>

<style scoped></style>
