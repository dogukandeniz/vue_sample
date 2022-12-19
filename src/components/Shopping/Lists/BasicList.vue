<script setup>
import BasicCard from '../Cards/BasicCard.vue';
import { useShoppingStore } from '@/stores/shopping';
import { useBasketStore } from '@/stores/basket';
import { computed } from 'vue';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();
const shoppingStore = useShoppingStore();
const basketStore = useBasketStore();

const addBasketHander = item => {
  basketStore.addBasket(item);
  toast.success('Added Basket', {
    timeout: 1000,
  });
  setTimeout(() => {
    router.push({
      name: 'basket',
    });
  }, 500);
};

const items = computed(() => {
  return shoppingStore.list;
});
const basket = computed(() => {
  return basketStore.getBasket;
});
</script>

<template>
  <div class="shopping-basic-list">
    <basic-card
      v-for="item in items"
      :item="item"
      :key="item.id"
      @addBasket="addBasketHander"
      :basket="basket"
    />
  </div>
</template>

<style lang="scss" scoped>
.shopping-basic-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
