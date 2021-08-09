// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  pledgeModal: boolean;
  pledgeSelected: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    pledgeModal: true,
    pledgeSelected: 10,
  },
  mutations: {
    handlePledgeModal(state, payload: boolean) {
      state.pledgeModal = payload;
    },
    changePledgeSelected(state, payload: number) {
      state.pledgeSelected = payload;
    },
  },
  actions: {
    handlePledgeModalA(context, payload: boolean) {
      context.commit("handlePledgeModal", payload);
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
