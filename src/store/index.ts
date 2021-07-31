// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  count: number;
  moreBananas: number;
  level: number;
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    count: 0,
    moreBananas: 10000,
    level: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    incrementMoreBananas(state) {
      state.moreBananas = (50 / 100) * state.moreBananas;
    },
    incrementLevel(state) {
      state.level++;
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
