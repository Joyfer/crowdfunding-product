<template>
  <PrimaryButton :icon="icon" class="w-full">ADD FIRST UPGRADE</PrimaryButton>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PrimaryButton from "../button/PrimaryButton.vue";
import { mdiAccount } from "@mdi/js";
export default defineComponent({
  name: "BuyUpgrade",
  components: {
    PrimaryButton,
  },
  setup() {
    const icon = ref(mdiAccount);
    return { icon };
  },
});
</script>

<style scoped></style>
