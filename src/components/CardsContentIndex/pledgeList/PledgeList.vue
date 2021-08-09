<template>
  <article class="space-y-5">
    <div
      v-for="(item, index) in pledgeList"
      :key="index"
      class="rounded-lg border-custom border-gray-300 px-4 py-6 md:p-8"
      :class="item.lefts === 0 ? 'opacity-60' : ''"
    >
      <div class="flex flex-col md:justify-between md:flex-row">
        <h3 class="font-bold text-xl">{{ item.name }}</h3>
        <span class="text-primary font-medium mt-2 md:mt-0"
          >Pledge ${{ item.pledgePrice }} or more</span
        >
      </div>
      <p class="text-gray-600 mt-6 mb-10">
        {{ item.description }}
      </p>
      <div class="flex flex-col md:justify-between md:flex-row">
        <div class="flex items-center">
          <h1 class="font-bold text-4xl">{{ item.lefts }}</h1>
          <p class="text-gray-600 ml-2 align-text-bottom">left</p>
        </div>
        <Button
          class="mt-10 md:mt-0 w-11/12 md:w-2/6"
          :disabled="item.lefts === 0"
          >{{ item.lefts === 0 ? "Out of stock" : "Select Reward" }}</Button
        >
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "@components/resources/buttons/Button.vue";
import dataCardsOutlined from "@/assets/data";

export default defineComponent({
  name: "PledgeList",
  components: {
    Button,
  },
  setup() {
    return { pledgeList: dataCardsOutlined };
  },
});
</script>

<style scoped>
.border-custom {
  border-width: 1px;
}
</style>
