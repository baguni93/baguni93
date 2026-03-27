<template>
  <Calc />
  <Calc_setup />
  <Calc3 />
  <Calc4 />
  <Calc5 />
</template>

<script>
import Calc from './components/Calc.vue';
import Calc_setup from './components/Calc_setup.vue';
import Calc3 from './components/Calc3.vue';
import Calc4 from './components/Calc4.vue';
import Calc5 from './components/Calc5.vue';
export default {
  name: 'App',
  components: { Calc, Calc_setup, Calc3, Calc4, Calc5 },
};
</script>
