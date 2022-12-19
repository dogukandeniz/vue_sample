<script setup>
const props = defineProps(['count', 'totalPrice']);
</script>
<template>
  <div class="basket-header">
    <div class="basket-line-count">MY CART ({{ props.count }})</div>
    <div class="basket-total-item">TRY {{ props.totalPrice }}</div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/styles/setup/color.scss';
.basket-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  border: 1px solid $color-grey-4;

  .basket-line-count,
  .basket-total-item {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    color: $color-black-2;
  }
}
</style>
