<script setup>
import { computed } from 'vue';
import BasketHeader from '../Cards/BasketHeader.vue';
import BasketFooter from '../Cards/BasketFooter.vue';
import BasketCard from '../Cards/BasketCard.vue';
import { useBasketStore } from '@/stores/basket';
import { useToast } from 'vue-toastification';

const toast = useToast();
const basketStore = useBasketStore();

const props = defineProps(['count', 'totalPrice']);

const decrementHandler = id => {
  basketStore.decrement(id);
};
const incrementHandler = id => {
  basketStore.increment(id);
};
const removeItemHandler = id => {
  basketStore.removeBasketItem(id);
  toast.success('Removed From Basket', {
    timeout: 2000,
  });
};
const setCountHandler = item => {
  basketStore.setCountHandler(item);
};
const basketList = computed(() => {
  return basketStore.getBasket;
});
</script>

<template>
  <basket-header :count="props.count" :totalPrice="props.totalPrice" />
  <basket-card
    @increment="incrementHandler"
    @remove-item="removeItemHandler"
    @decrement="decrementHandler"
    @set-count="setCountHandler"
    v-for="basket in basketList"
    :item="basket"
    :key="basket.id"
  />
  <basket-footer />
</template>
