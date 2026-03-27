<template>
  <li @click="$emit('toggle-completed', todoitem.id)">
    <span>{{ todoitem.todo }} {{ todoitem.completed ? '(완료)' : '' }}</span>
  </li>
  <span @click.stop="$emit('delete-todo', todoitem.id)">삭제</span>
</template>

<script setup>
const props = defineProps({ todoitem: { type: Object, required: true } });
const emit = defineEmits(['delete-todo', 'toggle-completed']);
</script>
