<template>
  <div
    class="flex justify-between px-6 lg:px-28 pt-10 absolute w-full gradient pb-5"
  >
    <div>
      <img :src="mySvg" alt="logo" />
    </div>
    <div>
      <img class="sm:hidden block" :src="hamburguer" alt="burger_menu" />
    </div>
    <ul class="sm:flex hidden space-x-8 text-white">
      <li><a class="hover:underline" href="#">About</a></li>
      <li><a class="hover:underline" href="#">Discover</a></li>
      <li><a class="hover:underline" href="#">Get Started</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
/// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import logo from "../../../assets/icon/logo.svg";
import iconHamburger from "../../../assets/icon/icon-hamburger.svg";

export default defineComponent({
  name: "Navbar",
  components: {
    SvgIcon,
  },
  setup() {
    const mySvg = logo,
      hamburguer = iconHamburger;
    return { mySvg, hamburguer };
  },
});
</script>

<style scoped>
.gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.466) 0%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
