<template>
  <div><input type="text" v-model.number="x" /> <br /></div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'Calc4',

  setup() {
    const x = ref(0);
    const result = watch(
      () => x.value,
      (current, old) => {
        console.log(`${old} -> ${current}`);
      },
    );
    return { x, result };
  },
};
</script>
