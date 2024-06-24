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

<script>
import { computed } from 'vue';
import { ref } from 'vue';

export default {
  setup() {
    // create() 부분
    // data
    const appTitle = ref('앱 내용 테스트');
    const number = ref(0);
    // method
    function addtest() {
      number.value = number.value + 1;
    }
    // computed
    const computedAddnum = computed(() => {
      return number.value + 2;
    });
    return { appTitle, number, addtest, computedAddnum };
  },
};
</script>

<style lang="scss" scoped></style>
