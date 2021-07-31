<script lang="ts">
import { defineComponent, computed } from "vue";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";

interface classes {
  [index: string]: boolean;
}

export default defineComponent({
  name: "PrimaryButton",
  components: {
    SvgIcon,
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
      validator: (val: string) =>
        ["primary", "secondary", "success"].includes(val),
    },
    text: { type: Boolean, required: false, default: false },
    icon: { type: String, required: false },
  },

  setup: (props) => {
    const colors = computed(
      (): classes => {
        return {
          "bg-primary hover:bg-primary-light text-white shadow hover:shadow-md":
            props.color === "primary" && props.text === false,
          "bg-secondary hover:bg-secondary-light text-white shadow hover:shadow-md":
            props.color === "secondary" && props.text === false,
          "bg-success hover:bg-success-light text-white shadow hover:shadow-md":
            props.color === "success" && props.text === false,
        };
      }
    );

    const textButton = computed(
      (): classes => {
        return {
          "text-primary hover:bg-primary-light hover:bg-opacity-10":
            props.text && props.color === "primary",
          "text-secondary hover:bg-secondary-light hover:bg-opacity-10":
            props.text && props.color === "secondary",
          "text-success hover:bg-success-light hover:bg-opacity-10":
            props.text && props.color === "success",
        };
      }
    );

    return { colors, textButton };
  },
});
</script>

<template>
  <button
    class="px-2 py-1 rounded focus:outline-none focus:none active:none transition duration-300 ease-in-out"
    :class="[colors, textButton]"
  >
    <span class="text-sm font-bold uppercase inline-flex"
      ><slot>Sumar</slot
      ><SvgIcon v-if="icon" class="ml-2" type="mdi" :size="18" :path="icon"></SvgIcon
    ></span>
  </button>
</template>

<style scoped>
</style>