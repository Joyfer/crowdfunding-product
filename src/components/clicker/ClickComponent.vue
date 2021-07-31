<script lang="ts">
import { defineComponent, watchEffect } from "vue";
import { onMounted } from "@vue/runtime-core";
import { useStore } from "../../store/index";

export default defineComponent({
  setup() {
    const store = useStore();

    let mySetInterval = setInterval(() => store.commit("increment"), store.state.moreBananas);
 
    watchEffect(() => {
     clearInterval(mySetInterval);
     mySetInterval = setInterval(() => store.commit("increment"), store.state.moreBananas);
    });

    return { store, mySetInterval };
  },
});
</script>

<template>
  <p class="text-4xl mb-4">{{ store.state.count }} bananas</p>
  <div
    class="h-20 w-full px-2 bg-primary rounded-lg"
    @click="store.commit('increment')"
  >
    {{ store.state.moreBananas }}
  </div>
</template>

<style scoped></style>
