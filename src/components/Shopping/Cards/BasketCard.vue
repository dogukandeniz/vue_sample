<script setup>
import { defineEmits } from 'vue';

const props = defineProps(['item']);
const emits = defineEmits(['increment', 'decrement', 'removeItem', 'setCount']);

const setCount = e => {
  let count = e.target.value;
  if (
    e.target.value.length < 1 ||
    e.target.value === '' ||
    e.key == 'Backspace'
  ) {
    count = 1;
  }
  const payload = {
    id: props.item.id,
    count: count,
  };
  emits('setCount', payload);
};
</script>

<template>
  <div class="basket-item">
    <div class="main_area">
      <div class="visiual_area"><img :src="props.item.image" /></div>
      <div class="info_area">
        <div class="title">{{ props.item.name }}</div>
        <div class="unit_price">
          {{ props.item.currency }} {{ props.item.price }}
        </div>
      </div>
    </div>
    <div class="action_area">
      <div class="count_area">
        <button
          @click="emits('decrement', props.item.id)"
          class="minus"
          :disabled="props.item.count === 1"
        >
          -
        </button>
        <div class="input">
          <div class="basic-form-group">
            <input
              type="number"
              :value="props.item.count"
              @input="setCount"
              minlength="1"
              min="1"
              class="form-input-01 text-center"
            />
          </div>
        </div>
        <button @click="emits('increment', props.item.id)" class="plus">
          +
        </button>
      </div>
      <div class="remove_area">
        <button @click="emits('removeItem', props.item.id)" class="remove-btn">
          REMOVE
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/styles/setup/color.scss';
.basket-item {
  border: 1px solid $color-grey-4;
  border-top: none;
  padding: 16px;

  .main_area {
    display: flex;
    margin-bottom: 20px;

    .visiual_area {
      width: 100px;
      margin-right: 20px;

      img {
        width: 100%;
      }
    }

    .info_area {
      display: flex;
      flex-direction: column;
      justify-content: center;

      .title,
      .unit-price {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: $color-black-2;
      }

      .unit_price {
        font-weight: 600;
        margin-top: 32px;
      }
    }
  }

  .action_area {
    display: flex;
    flex-wrap: wrap;

    .count_area {
      display: flex;
      align-items: center;

      .minus,
      .plus {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: $color-grey-4;
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: $color-black-2;
      }

      .input {
        margin: 0 8px;
        width: 42px;
      }
    }

    .remove_area {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;

      .remove-btn {
        font-weight: 600;
        font-size: 14px;
        line-height: 16px;
        color: $color-black-2;
        background: none;
      }
    }
  }

  &:last-child {
    border-bottom: none;
  }
}
</style>
