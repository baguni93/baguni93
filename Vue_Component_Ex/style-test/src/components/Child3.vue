<template>
  <div :class="myColor"><h2>Child3</h2></div>
</template>
<script>
export default {
  name: 'Child3',
  props: ['myColor'],
};
</script>
