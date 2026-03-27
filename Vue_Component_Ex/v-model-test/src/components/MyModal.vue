<template>
  <div v-if="visible" class="modal-overlay">
    <div class="modal">
      <slot></slot>
      <button @click="$emit('update:visible', false)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyModal',
  props: ['visible'],
  emits: ['update:visible'],
};
</script>
