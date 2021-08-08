// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  modal: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    modal: true,
  },
  mutations: {
    handleModal(state) {
      state.modal = !state.modal;
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
