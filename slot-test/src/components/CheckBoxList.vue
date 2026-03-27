<template>
  <div v-for="item in items" :key="item.id">
    <slot name="icon" :aaa="item.checked"></slot>
    <input
      type="checkbox"
      :value="item.id"
      :checked="item.checked"
      @change="
        $emit('check-changed', { id: item.id, checked: $event.target.checked })
      "
    />
    <slot :aaa="item.checked" :bbb="item.label"></slot>
  </div>
</template>

<script>
export default {
  name: 'CheckBoxList',
  props: ['items'],
  emits: ['check-changed'],
};
</script>
