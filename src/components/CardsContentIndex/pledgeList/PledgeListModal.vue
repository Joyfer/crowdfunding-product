<template>
  <article class="space-y-5">
    <div
      v-for="(item, index) in pledgeList"
      :key="index"
      class="rounded-lg border-custom border-gray-300"
      :class="item.lefts === 0 ? 'opacity-60' : ''"
    >
      <div class="flex px-4 py-6 md:p-8">
        <div class="pr-4">
          <div
            class="h-6 w-6 rounded-full ring-2 ring-gray-400 ring-offset-2 mt-1 cursor-pointer"
            :class="
              index === store.state.pledgeSelected ? 'bg-primary' : 'bg-white'
            "
            v-if="item?.lefts != 0"
            @click="() => changeSelectedPledge(index)"
          ></div>
        </div>
        <div>
          <div class="flex flex-col md:justify-between md:flex-row">
            <div
              class="flex md:content-center md:items-center flex-col md:flex-row"
            >
              <h3 class="font-bold text-xl" v-if="item?.lefts === 0">
                {{ item.name }}
              </h3>
              <h3
                class="font-bold text-xl hover:text-primary cursor-pointer transition-all ease-in-out"
                @click="() => changeSelectedPledge(index)"
                v-else
              >
                {{ item.name }}
              </h3>
              <span
                class="text-primary md:ml-4 font-medium mt-2 md:mt-0"
                v-if="item.pledgePrice != undefined"
                >Pledge ${{ item.pledgePrice }} or more</span
              >
            </div>
            <div
              class="hidden items-center md:flex"
              v-if="item.pledgePrice != 0 && item.pledgePrice != undefined"
            >
              <h1 class="font-bold text-2xl">
                {{ item?.lefts }}
              </h1>
              <p class="text-gray-600 ml-2 align-text-bottom">left</p>
            </div>
          </div>
          <p class="text-gray-600 mt-6 mb-6">
            {{ item.description }}
          </p>
          <div
            class="flex items-center md:hidden"
            v-if="item.pledgePrice != 0 && item.pledgePrice != undefined"
          >
            <h1 class="font-bold text-2xl">
              {{ item.lefts }}
            </h1>
            <p class="text-gray-600 ml-2 align-text-bottom">left</p>
          </div>
        </div>
      </div>
      <transition name="width">
        <div
          class="flex flex-col py-4 md:justify-between md:flex-row items-center px-8 border-custom-top border-gray-300"
          v-show="index === store.state.pledgeSelected"
        >
          <p class="md:my-auto mb-4">Enter your pledge.</p>
          <div class="my-auto flex space-x-2">
            <TextInputMoney
              @inputChange="pledgeCount = $event"
              v-if="item.pledgePrice != undefined"
            /><Button
              :disabled="verifyPledgeAmount(item?.pledgePrice, pledgeCount)"
              @click="acceptPledge"
              >Continue</Button
            >
          </div>
        </div>
      </transition>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Button from "@components/resources/buttons/Button.vue";
import dataCardsOutlined from "@/assets/data";
import TextInputMoney from "@components/resources/form/TextInputMoney.vue";
import { useStore } from "@/store/index";
import useModal from "@composable/useModal";

export default defineComponent({
  name: "PledgeListModal",
  components: {
    Button,
    TextInputMoney,
  },
  setup() {
    const store = useStore();
    const selected = ref<number>(10);
    const { openModal } = useModal("handlePledgeCompletedModal", store);
    const { closeModal } = useModal("handlePledgeModal", store);
    const pledgeCount = ref<number>(0);

    const acceptPledge = (): void => {
      closeModal();
      store.dispatch("incrementBackersTotalAmountA", pledgeCount.value);
      setTimeout(() => {
        openModal();
      }, 100);
    };

    const changeSelectedPledge = (index: number): void => {
      store.commit("changePledgeSelected", index);
    };

    const pledgeList: typeof dataCardsOutlined = [
      {
        name: "Pledge with no reward",
        description: `Choose to support us without a reward if you simply believe in our project. As a backer, you 
      will be signed up to receive product updates via email.`,
        pledgePrice: undefined,
        lefts: undefined,
      },
      ...dataCardsOutlined,
    ];

    const verifyPledgeAmount = (
      item: number | undefined,
      pledgeCountf: typeof pledgeCount.value
    ): boolean => {
      if (item != undefined) {
        if (item > pledgeCountf) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    };

    return {
      pledgeList,
      store,
      selected,
      changeSelectedPledge,
      pledgeCount,
      acceptPledge,
      verifyPledgeAmount,
    };
  },
});
</script>

<style scoped>
.border-custom {
  border-width: 1px;
}
.border-custom-top {
  border-top-width: 1px;
}
.width-enter-active {
  transition: all 0.5s ease;
}
.width-enter-from {
  transform-origin: top;
  transform: scaleY(0);
}
</style>
