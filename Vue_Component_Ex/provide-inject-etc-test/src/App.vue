<template>
  <div><Childe /></div>
  <button @click="test">버튼</button>
</template>

<script>
import Childe from './components/Childe.vue';
import { computed } from 'vue';

export default {
  name: 'App',
  components: { Childe },
  data() {
    return { count: 0 };
  },

  provide() {
    return {
      staticCount: this.count,
      reactiveCount: computed(() => this.count),
    };
  },

  methods: {
    test() {
      this.count++;
    },
  },
};
</script>
