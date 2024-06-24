<template>
  <CompositionApi
    :propsData="propsData"
    @emitTest="emitReceive"
  ></CompositionApi>
</template>
<script setup>
import { ref } from 'vue';
import CompositionApi from './components/CompositionApi.vue';
const propsData = ref('프롭 데이터 입니다');

function emitReceive(message) {
  console.log('Receive:' + message);
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
