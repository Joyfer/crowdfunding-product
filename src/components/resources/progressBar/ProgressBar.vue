<template>
  <div>
    <div class="w-full bg-gray-300 rounded-lg h-4">
      <div
        class="bg-primary h-full rounded-lg width-animation"
        :style="{ width: number + '%' }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProgressBar",
  setup() {
    const number = ref(50);

    return { number };
  },
});
</script>

<style scoped>
.width-animation {
  -webkit-transition: width 1s ease-in-out;
  -moz-transition: width 1s ease-in-out;
  -o-transition: width 1s ease-in-out;
  transition: width 1s ease-in-out;
}
</style>
