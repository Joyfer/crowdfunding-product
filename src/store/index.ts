// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  pledgeModal: boolean;
  pledgeCompletedModal: boolean;
  pledgeSelected: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    pledgeModal: false,
    pledgeCompletedModal: false,
    pledgeSelected: 10,
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
  },
  actions: {
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
