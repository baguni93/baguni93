<template>
  <div :class="myColor"><h2>Child2</h2></div>
</template>

<script>
export default {
  name: 'Child2',
  props: ['myColor'],
};
</script>
