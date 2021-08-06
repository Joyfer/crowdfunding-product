<template>
  <div class="flex justify-between px-28 pt-10 absolute w-full gradient pb-5">
    <div>
      <img :src="mySvg" />
    </div>
    <ul class="flex space-x-8 text-white">
      <li>About</li>
      <li>Discover</li>
      <li>Get Started</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import logo from "../../../assets/icon/logo.svg";

export default defineComponent({
  name: "Navbar",
  components: {
    SvgIcon,
  },
  setup() {
    const mySvg = logo;
    return { mySvg };
  },
});
</script>

<style scoped>
.gradient {
background: rgb(0,0,0);
background: linear-gradient(180deg, rgba(0, 0, 0, 0.466) 0%, rgba(255,255,255,0) 100%);
}
</style>
