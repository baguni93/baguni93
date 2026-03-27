<template>
  <div>
    X : <input type="text" v-model.number="x" /> <br />
    Y : <input type="text" v-model.number="y" /> <br />
    <button @click="calcAdd">계산</button>
    <div>결과 : {{ result }}</div>
  </div>
</template>

<script>
export default {
  name: 'Calc2',

  data() {
    return {
      x: 10,
      y: 20,
      result: 30,
    };
  },

  methods: {
    calcAdd() {
      this.result = this.x + this.y;
    },
  },
};
</script>
