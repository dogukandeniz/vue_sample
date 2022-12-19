<script setup>
import BasicList from '../components/Shopping/Lists/BasicList.vue';
import BasicLoading from '../components/Common/Loadings/BasicLoading.vue';
import { getShoppingList } from '../services/shopping';
import { onMounted, computed } from 'vue';
import { useShoppingStore } from '../stores/shopping';

const shoppingStore = useShoppingStore();

const listCount = computed(() => {
  return shoppingStore.getListCount;
});

onMounted(async () => {
  const result = await getShoppingList();
  shoppingStore.setList(result);
});
</script>

<template>
  <main>
    <section class="c-wrapper">
      <basic-list v-if="listCount" />
      <basic-loading v-else />
    </section>
  </main>
</template>
