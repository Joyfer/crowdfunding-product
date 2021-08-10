// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  pledgeModal: boolean;
  pledgeCompletedModal: boolean;
  pledgeSelected: number;
  backersTotalAmount: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    pledgeModal: false,
    pledgeCompletedModal: false,
    pledgeSelected: 10,
    backersTotalAmount: 89914,
  },
  mutations: {
    handlePledgeModal(state, payload: boolean) {
      state.pledgeModal = payload;
    },
    handlePledgeCompletedModal(state, payload: boolean) {
      state.pledgeCompletedModal = payload;
    },
    changePledgeSelected(state, payload: number) {
      state.pledgeSelected = payload;
    },
    incrementBackersTotalAmount(state, payload: number) {
      state.backersTotalAmount = payload;
    },
  },
  actions: {
    incrementBackersTotalAmountA(context, payload: number) {
      if (context.state.backersTotalAmount + payload < 100000) {
        context.commit(
          "incrementBackersTotalAmount",
          context.state.backersTotalAmount + payload
        );
      } else {
        context.commit("incrementBackersTotalAmount", 100000);
      }
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
