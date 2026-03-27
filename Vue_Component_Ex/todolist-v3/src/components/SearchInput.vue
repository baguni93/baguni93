<template>
  <input type="text" v-model="keyword" placeholder="할일 검색" />
  <button @click="search">검색</button>
</template>
<script setup>
import { ref } from 'vue';
// defineModel — modelValue props + update:modelValue emit 자동 처리
const keyword = ref('');

const emit = defineEmits(['search']);

const search = () => {
  emit('search', keyword.value);
};
</script>
