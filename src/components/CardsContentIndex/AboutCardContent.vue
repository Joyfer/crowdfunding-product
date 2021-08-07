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
        <article class="space-y-5">
          <div
            v-for="(item, index) in pledgeList"
            :key="index"
            class="rounded-lg border-custom border-gray-300 px-4 py-6 md:p-8"
            :class="item.lefts === 0 ? 'filter grayscale' : ''"
          >
            <div class="flex flex-col md:justify-between md:flex-row">
              <h3 class="font-bold text-xl">{{ item.name }}</h3>
              <span class="text-primary font-medium mt-2 md:mt-0"
                >Pledge ${{ item.pledgePrice }} or more</span
              >
            </div>
            <p class="text-gray-600 mt-6 mb-10">
              {{ item.description }}
            </p>
            <div class="flex flex-col md:justify-between md:flex-row">
              <div class="flex items-center">
                <h1 class="font-bold text-4xl">{{ item.lefts }}</h1>
                <p class="text-gray-600 ml-2 align-text-bottom">left</p>
              </div>
              <Button class="mt-10 md:mt-0 w-11/12 md:w-2/6" :disabled="item.lefts === 0">{{
                item.lefts === 0 ? "Out of stock" : "Select Reward"
              }}</Button>
            </div>
          </div>
        </article>
      </template>
    </Card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../resources/card/Card.vue";
import Button from "../resources/buttons/Button.vue";

export default defineComponent({
  name: "AboutCardContent",
  components: {
    Card,
    Button,
  },
  setup() {
    interface dataCardsOutlined {
      name: string;
      description: string;
      lefts: number;
      pledgePrice: number;
    }

    const dataCardsOutlined: dataCardsOutlined[] = [
      {
        name: "Bamboo Stand",
        description: `You get an ergonomic stand made of natural bamboo. You've helped
        us launch our promotional campaign, and you’ll be added to a
        special Backer member list.`,
        lefts: 101,
        pledgePrice: 25,
      },
      {
        name: "Black Edition Stand",
        description: `You get a Black Special Edition computer stand and a personal thank you. 
        You’ll be added to our Backer member list. Shipping is included.`,
        lefts: 64,
        pledgePrice: 75,
      },
      {
        name: "Mahogany Special Edition",
        description: `You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. 
        You’ll be added to our Backer member list. Shipping is included.`,
        lefts: 0,
        pledgePrice: 200,
      },
    ];
    return { pledgeList: dataCardsOutlined };
  },
});
</script>

<style scoped>
.border-custom {
  border-width: 1px;
}
</style>
