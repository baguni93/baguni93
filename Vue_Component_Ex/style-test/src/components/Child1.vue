<template>
  <div :class="myColor"><h2>Child1</h2></div>
</template>

<script>
export default {
  name: 'Child1',
  props: ['myColor'],
};
</script>
