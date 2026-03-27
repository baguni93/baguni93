<template>
  <div class="container">
    <div class="title">::TodoList App</div>
  </div>
  <div class="card card-default card-borderless">
    <div class="card-body">
      <InputTodo ref="inputRef" @add-todo="addTodo" />
      <SearchInput @search="onSearch" />
      <TodoList
        :todos="filteredList"
        @delete-todo="deleteTodo"
        @toggle-completed="toggleCompleted"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import TodoList from './components/TodoList.vue';
import InputTodo from './components/InputTodo.vue';
import SearchInput from './components/SearchInput.vue';

const ts = new Date().getTime();
const state = reactive({ todos: [] });
const inputRef = ref(null);
const keyword = ref('');
const onSearch = (value) => {
  keyword.value = value;
};

const filteredList = computed(() =>
  state.todos.filter((item) => item.todo.includes(keyword.value)),
);

onMounted(() => {
  inputRef.value.focus();
  state.todos.push({ id: ts, todo: '자전거 타기', completed: false });
  state.todos.push({
    id: ts + 1,
    todo: '딸과 공원 산책',
    completed: true,
  });
  state.todos.push({
    id: ts + 2,
    todo: '일요일 애견 카페',
    completed: false,
  });
  state.todos.push({
    id: ts + 3,
    todo: 'Vue 원고 집필',
    completed: false,
  });
});

const addTodo = (todo) => {
  if (todo.length >= 2) {
    state.todos.push({
      id: new Date().getTime(),
      todo: todo,
      completed: false,
    });
  }
};

const deleteTodo = (id) => {
  let index = state.todos.findIndex((item) => id === item.id);
  state.todos.splice(index, 1);
};

const toggleCompleted = (id) => {
  let index = state.todos.findIndex((item) => id === item.id);
  state.todos[index].completed = !state.todos[index].completed;
};
</script>
