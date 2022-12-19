import { defineStore } from 'pinia';

export const useShoppingStore = defineStore('shopping', {
  state: () => {
    return {
      shoppingList: [],
    };
  },

  getters: {
    list: state => state.shoppingList,
    getListCount: state => state.shoppingList.length,
  },

  actions: {
    setList(list) {
      this.shoppingList = list;
    },
  },
});
