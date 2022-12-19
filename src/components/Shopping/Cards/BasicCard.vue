<script setup>
import { defineEmits } from 'vue';

const props = defineProps(['item']);
const emits = defineEmits(['addBasket']);
</script>

<template>
  <div class="basic-shopping-card">
    <div class="visual_area">
      <img :src="props.item.image" />
    </div>
    <div class="description_area">{{ props.item.name }}</div>
    <div class="action_area">
      <span class="price_part"
        >{{ props.item.currency }} {{ props.item.price }}</span
      >
      <button
        type="button"
        class="button_part"
        @click="emits('addBasket', props.item)"
      >
        Add Basket
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/global.scss';
@import '@/styles/setup/color.scss';
.basic-shopping-card {
  width: calc(50% - 8px);
  border: 1px solid $color-grey-4;
  padding: 16px;
  margin-bottom: 16px;

  .visual_area {
    width: 100%;

    img {
      width: 100%;
    }
  }

  .description_area {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: $color-black-2;
    text-align: center;
    margin: 10px 0;
  }

  .action_area {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price_part {
      font-weight: 400;
      font-size: 16px;
      line-height: 16px;
      color: $color-black-2;
    }

    .button_part {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 16px;
      height: 32px;
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      color: #fff;
      background: #fd791d;
    }
  }
}
@include media-breakpoint-up('xs') {
  .basic-shopping-card {
    width: 100%;
  }
}
@include media-breakpoint-up('md') {
  .basic-shopping-card {
    width: calc(50% - 8px);
  }
}
</style>
