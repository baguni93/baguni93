<template>
  <div>
    <div>
      <div>
        <input
          ref="inputE1"
          type="text"
          v-model.trim="todo"
          @keyup.enter="addTodoHandler"
        />
        <span @click="addTodoHandler">추가</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['add-todo']);
const todo = ref('');
const inputE1 = ref(null);

defineExpose({
  focus: () => {
    inputE1.value.focus();
    inputE1.value.scrollTop = 0;
    inputE1.value.scrollIntoView();
  },
});

const addTodoHandler = () => {
  if (todo.value.length >= 3) {
    emit('add-todo', todo.value);
    todo.value = '';
  }
};
</script>
