<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import PrimaryButton from "../button/PrimaryButton.vue";
import { mdiAccount } from "@mdi/js";
import { useStore } from "../../store/index";
import { upgrades } from "../../resources/upgrades";

export default defineComponent({
  name: "BuyUpgrade",
  components: {
    PrimaryButton,
  },
  setup() {
    const store = useStore();
    const icon = ref(mdiAccount);

    const upgrading = (): void => {
      store.commit("incrementMoreBananas");
      store.commit("incrementLevel");
    };

    const filteringArray = computed((): typeof upgrades => {
      return upgrades.filter((el) => el.level === (store.state.level + 1));
    });

    return { icon, store, upgrades, upgrading, filteringArray };
  },
});
</script>

<template>
  <PrimaryButton
    v-for="({ level, cost }, index) in filteringArray"
    :key="index"
    @click="upgrading"
    :icon="icon"
    class="w-full"
    :disabled="cost > store.state.count"
    >ADD UPGRADE LEVEL: {{ level }} - cost: {{cost}}</PrimaryButton
  >
</template>

<style scoped></style>
