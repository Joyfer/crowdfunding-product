<template>
  <Card>
    <template #default
      ><div
        class="grid grid-cols-1 md:grid-cols-3 md:divide-x-2 divide-solid gap-4"
      >
        <div
          v-for="({ title, sub }, index) in data"
          :key="index"
          class="text-center md:text-left md:pl-12"
        >
          <h1 class="font-bold text-4xl">
            {{ index === 0 ? `$${title}` : title }}
          </h1>
          <p class="mt-4 text-gray-600">{{ sub }}</p>
          <hr class="mx-24 mt-6 block md:hidden" />
        </div>
      </div>
      <div class="mt-12"><ProgressBar :progressNumber="progress" /></div
    ></template>
  </Card>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect, computed } from "vue";
import Card from "../resources/card/Card.vue";
import ProgressBar from "../resources/progressBar/ProgressBar.vue";
import { useStore } from "@/store/index";

export default defineComponent({
  name: "GridBackers",
  components: {
    Card,
    ProgressBar,
  },
  setup() {
    interface dataObjects {
      title: number;
      sub: string;
    }

    const store = useStore();

    const data = reactive<dataObjects[]>([
      {
        title: store.state.backersTotalAmount,
        sub: "of $100,000 backed",
      },
      { title: 5007, sub: "total backers" },
      { title: 56, sub: "days left" },
    ]);

    const progress = computed(
      () => (store.state.backersTotalAmount / 100000) * 100
    );

    watchEffect(() => {
      data[0].title = store.state.backersTotalAmount;
      data[1].title++;
    });
    return { data, progress };
  },
});
</script>

<style scoped></style>
