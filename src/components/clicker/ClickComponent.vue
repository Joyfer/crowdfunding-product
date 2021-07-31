<template>
  <p class="text-4xl mb-4">{{ store.state.count }} bananas</p>
  <div
    class="h-20 w-full px-2 bg-primary rounded-lg"
    @click="store.commit('increment')"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "../../store/index";

export default defineComponent({
  setup() {
    const store = useStore();


    const mySetInterval = setInterval(() => store.commit("increment"), store.state.moreBananas);

    onMounted(() => (): any => mySetInterval);

    return {store};
  },
});
</script>

<style scoped></style>
