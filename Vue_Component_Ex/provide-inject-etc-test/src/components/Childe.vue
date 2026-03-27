<template>
  <div>
    <h5>static: {{ staticCount }}</h5>
    <h5>reactive: {{ reactiveCount }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Child',
  inject: ['staticCount', 'reactiveCount'],
  mounted() {
    console.log(this.staticCount);
    console.log(this.reactiveCount);
  },
};
</script>
