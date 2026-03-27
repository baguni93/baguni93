<template>
  <input
    type="text"
    :name="name"
    @input="$emit('update:name', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'InputName',
  props: ['name'],
};
</script>
