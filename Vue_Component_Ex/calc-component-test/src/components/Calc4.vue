<template>
  <input type="text" v-model.number="state.x" /> <br />
  <input type="text" v-model.number="state.y" /> <br />
  <div>결과 : {{ result }}</div>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
  name: ' Calc4',
  setup() {
    const state = reactive({ x: 2, y: 10 });
    const result = computed(() => {
      return state.x + state.y;
    });
    return { state, result };
  },
};
</script>
