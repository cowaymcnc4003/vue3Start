<template>
  <h1>COMPOSITION API 테스트</h1>
  <div>{{ appTitle }}</div>
  <ul>
    <li>
      {{ number }}
    </li>
    <li>
      {{ computedAddnum }}
    </li>
  </ul>
  <div>
    <button type="button" @click="addtest()">클릭</button>
  </div>
</template>

<script setup>
import { composableTest } from '@/hooks/composable.js';

const { appTitle, addtest, computedAddnum, number } = composableTest();

// import { onBeforeMount, onDeactivated, onMounted } from 'vue';
// import { computed } from 'vue';
// import { ref } from 'vue';

// // 생명 주기
// onBeforeMount(() => {
//   console.log('onBeforeMount');
// });

// onMounted(() => {
//   console.log('onMounted');
// });

// onDeactivated(() => {
//   console.log('onDeactivated');
// });

// // data
// const appTitle = ref('앱 내용 테스트');
// const number = ref(0);
// // method
// function addtest() {
//   number.value = number.value + 1;
// }
// // computed
// const computedAddnum = computed(() => {
//   return number.value + 2;
// });
</script>

<style lang="scss" scoped></style>
