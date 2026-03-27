<template>
  <!-- <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  /> -->

  <input type="text" v-model="model" />
  <input type="text" v-model="name" />
  <input type="text" v-model="email" />
</template>

<script>
export default {
  // defineModel()이 내부적으로 아래를 자동 처리한다.

  name: 'MyInput',
  //   props: ['modelValue'],
  //   emits: ['update:modelValue'],
};
</script>

<script setup>
const model = defineModel();
const name = defineModel('name');
const email = defineModel('email');

// <!-- 부모 -->
// <Child v-model:name="searchName" />
// const name = defineModel('name')
//<template>
//<input v-model="name" />
//</template>;
</script>
