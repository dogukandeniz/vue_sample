import { defineStore } from 'pinia';

export const useBasketStore = defineStore('basket', {
  state: () => {
    return {
      basket: [],
    };
  },

  getters: {
    getBasket: (state) => state.basket,
    getBasketCount: (state) => state.basket.length,
    getBasketTotalPrice: (state) => {
      return state.basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.linePrice,
        0
      );
    },
  },

  actions: {
    increment(id) {
      this.basket = this.basket.map((bItem) => {
        if (bItem.id === id) {
          bItem.count++;
          bItem.linePrice = parseFloat(bItem.price) * bItem.count;
        }
        return bItem;
      });
    },
    decrement(id) {
      this.basket = this.basket.map((bItem) => {
        if (bItem.id === id) {
          bItem.count--;
          bItem.linePrice = parseFloat(bItem.price) * bItem.count;
        }
        return bItem;
      });
    },
    removeBasketItem(id) {
      this.basket = this.basket.filter((bItem) => bItem.id !== id);
    },
    setCountHandler({ id, count }) {
      this.basket = this.basket.map((bItem) => {
        if (bItem.id === id) {
          bItem.count = count;
          bItem.linePrice = parseFloat(bItem.price) * bItem.count;
        }
        return bItem;
      });
    },
    addBasket(item) {
      if (!this.basket.length) {
        this.basket.push({
          ...item,
          count: 1,
          linePrice: parseFloat(item.price),
        });
      } else {
        if (this.basket.find((bItem) => bItem.id === item.id)) {
          this.basket = this.basket.map((bItem) => {
            if (bItem.id === item.id) {
              bItem.count++;
              bItem.linePrice = parseFloat(bItem.price) * bItem.count;
            }
            return bItem;
          });
        } else {
          this.basket.push({
            ...item,
            count: 1,
            linePrice: parseFloat(item.price),
          });
        }
      }
    },
  },
});
