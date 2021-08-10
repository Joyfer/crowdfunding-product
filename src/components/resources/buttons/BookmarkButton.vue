<template>
  <button
    class="rounded-full font-bold flex button bg-gray-100"
    @click="handleBookmarked"
  >
    <div class="bg-black w-16 h-16 rounded-full">
      <img
        v-if="bookmarked"
        class="w-full h-full"
        src="../../../assets/icon/icon-bookmarked.svg"
        alt="BookmarkButtonIcon"
      />
      <img
        v-else
        class="w-full h-full icon transition duration-500 ease-in-out"
        src="../../../assets/icon/icon-bookmark.svg"
        alt="BookmarkButtonIcon"
      />
    </div>
    <div class="px-10 py-5 hidden sm:block" :class="classesIfIsBookmarked">
      {{ bookmarked ? "Bookmarked" : "Bookmark" }}
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({
  name: "BookmarkButton",
  setup() {
    const bookmarked = ref<boolean>(false);

    const handleBookmarked = (): void => {
      bookmarked.value = !bookmarked.value;
    };
    const classesIfIsBookmarked = computed((): string => {
      if (bookmarked.value === true) {
        return "text-primary";
      } else {
        return "text-gray-500";
      }
    });
    return { classesIfIsBookmarked, handleBookmarked, bookmarked };
  },
});
</script>

<style scoped>
.button:hover .icon {
  filter: brightness(1.5);
}
</style>
