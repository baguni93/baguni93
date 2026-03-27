<template>
  <div>
    <div>
      <ul>
        <TodoListItem
          v-for="todoitem in todos"
          :key="todoitem.id"
          :todoitem="todoitem"
          @delete-todo="$emit('delete-todo', $event)"
          @toggle-completed="$emit('toggle-completed', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';
const props = defineProps({
  todos: { type: Array, required: true },
});

const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
