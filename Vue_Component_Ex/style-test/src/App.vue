<template>
  <Child1 :myColor="myColor" />
  <Child2 :myColor="myColor" />
  <Child3 :myColor="myColor" />
</template>

<script>
import Child1 from './components/Child1.vue';
import Child2 from './components/Child2.vue';
import Child3 from './components/Child3.vue';

export default {
  name: 'App',
  components: { Child1, Child2, Child3 },

  data() {
    return {
      myColor: 'child',
    };
  },
};
</script>

<style>
.child {
  background-color: orange;
  border: solid 1px black;
  margin: 1.5em;
  padding: 1em;
}
</style>
