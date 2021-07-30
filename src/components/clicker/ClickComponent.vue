<template>
  <p class="text-4xl mb-4">{{ store.state.count }} bananas</p>
  <div
    class="h-20 w-full px-2 bg-primary rounded-lg"
    @click="store.commit('increment')"
  ></div>
</template>

<script setup lang="ts">
import { onMounted } from "@vue/runtime-core";
import { useStore } from "../../store/index";

const store = useStore();

const addBananasNumberCounter: number = store.state.moreBananas;
const mySetInterval = setInterval(() => store.commit("increment"), 10000);


onMounted(() => ():any => mySetInterval);
</script>

<style scoped></style>
