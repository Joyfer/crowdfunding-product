<template>
  <div class="py-4 bg-primary flex"><SearchInput></SearchInput></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchInput from "../../../components/search/SearchInput.vue";
export default defineComponent({
  name: "Navbar",
  components: {
    SearchInput,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
