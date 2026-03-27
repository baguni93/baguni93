<template>
  <div>
    <input type="text" v-model.number="x" /> <br />
    <input type="text" v-model.number="y" /> <br />
  </div>
  <div>결과값 : {{ sum }}</div>
</template>

<script>
export default {
  name: 'Calc',

  data() {
    return {
      x: 0,
      y: 0,
      result: 0,
    };
  },

  computed: {
    sum() {
      this.result = this.x + this.y;
      return this.result;
    },
  },
};
</script>
