<template>
  {{ store.state.count }}
  <button @click="sumar">Sumar</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from '../../store/index';

const store = useStore();
const sumar = (): void => store.commit('increment');

</script>

<style scoped></style>
