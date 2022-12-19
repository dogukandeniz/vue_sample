<script setup>
import { computed } from 'vue';
import BasketList from '../components/Shopping/Lists/BasketList.vue';

import { useBasketStore } from '../stores/basket';

const basketStore = useBasketStore();

const basketCount = computed(() => {
  return basketStore.getBasketCount;
});
const basketTotalPrice = computed(() => {
  return basketStore.getBasketTotalPrice;
});
</script>

<template>
  <main>
    <section class="c-wrapper">
      <basket-list
        v-if="basketCount"
        :count="basketCount"
        :total-price="basketTotalPrice"
      />
      <div v-else class="basket-is-empty">Basket is empty...</div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@import '@/styles/setup/color.scss';

.basket-is-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: $color-black-2;
}
</style>
