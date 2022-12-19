<script setup>
import { order } from '@/services/order';
import { useBasketStore } from '@/stores/basket';
import { useToast } from 'vue-toastification';

const toast = useToast();
const basketStore = useBasketStore();

const placeOrder = async () => {
  await order(basketStore.getBasket);
  toast.success('Sended', {
    timeout: 2000,
  });
};
</script>

<template>
  <div class="basket-footer">
    <button @click="$router.go(-1)" class="continue">COUNTINUE SHOPPING</button>
    <button @click="placeOrder" class="place-order">PLACE ORDER</button>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/setup/color.scss';
.basket-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border: 1px solid $color-grey-4;
  border-top: none;
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  .continue,
  .place-order {
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: $color-black-2;
    height: 32px;
    padding: 0 16px;
    background: $color-grey-4;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .place-order {
    color: #fff;
    background: #fd791d;
  }
}
</style>
