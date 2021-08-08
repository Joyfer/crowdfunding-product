<template>
  <div>
    <Card
      ><template #default
        ><h2 class="font-bold text-2xl">About this project</h2>
        <p class="text-gray-600 my-9">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.<br /><br />
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
        <div>
          <PledgeList></PledgeList>
        </div>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../resources/card/Card.vue";
import Button from "../resources/buttons/Button.vue";
import PledgeList from "./pledgeList/PledgeList.vue";

export default defineComponent({
  name: "AboutCardContent",
  components: {
    Card,
    Button,
    PledgeList,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>
