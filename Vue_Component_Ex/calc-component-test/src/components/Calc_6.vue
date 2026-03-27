<template>
  <div>
    reactive + watch
    <input type="text" v-model.number="state.x" /><br />
    <div>결과값 : {{ state.result }}</div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
  name: 'Calc_6',
  setup() {
    const state = reactive({ x: 0, result: 0 });

    watch(
      () => state.x,
      (currnet, old) => {
        console.log(`${old} -> ${currnet}`);
        state.result = currnet * 2;
      },
    );
    return { state };
  },
};
</script>
