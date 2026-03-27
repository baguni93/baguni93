<template>
  <div>
    <input type="text" v-model.number="state.x" /> <br />
    <input type="text" v-model.number="state.y" /> <br />
    <div>Calc4 결과값 : {{ result }}</div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'Calc4',

  setup() {
    const state = reactive({ x: 10, y: 10 });

    const result = computed(() => {
      return state.x + state.y;
    });

    return { result, state };
  },
};
</script>
