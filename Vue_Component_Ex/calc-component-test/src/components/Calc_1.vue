<template>
  <div>
    X : <input type="text" v-model.number="x" /> <br />
    Y : <input type="text" v-model.number="y" /> <br />
  </div>
</template>

<script>
export default {
  name: 'Calc',
  data() {
    return {
      x: 10,
      y: 20,
    };
  },
};
</script>
