<template>
  <div class="py-4 px-2 bg-primary flex justify-between content-center">
    <div>Logo</div>
    <div><SearchInput></SearchInput></div>
  </div>
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
