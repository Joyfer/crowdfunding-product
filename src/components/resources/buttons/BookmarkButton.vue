<template>
  <button class="bg-gray-100 rounded-full font-bold flex button">
    <div class="bg-black w-16 h-16 rounded-full">
      <img
        class="w-full h-full icon transition duration-500 ease-in-out"
        src="../../../assets/icon/icon-bookmark.svg"
        alt="BookmarkButtonIcon"
      />
    </div>
    <div class="px-10 py-5 text-gray-500 hidden sm:block">Bookmark</div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookmarkButton",
  setup() {
    return {};
  },
});
</script>

<style scoped>
.button:hover .icon{
  filter: brightness(1.5);
}

</style>
