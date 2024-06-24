import { computed, onBeforeMount, onDeactivated, onMounted, ref } from 'vue';

export function composableTest() {
  // 생명 주기
  onBeforeMount(() => {
    console.log('onBeforeMount');
  });

  onMounted(() => {
    console.log('onMounted');
  });

  onDeactivated(() => {
    console.log('onDeactivated');
  });

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
  return { appTitle, addtest, computedAddnum, number };
}
