<template>
  <div>
    <NoSlotTest />
    <SlotTest />
    <NameSlotTest />
    <ScopedSlotText />
  </div>
</template>
<script>
import NoSlotTest from './components/NoSlotTest.vue';
import SlotTest from './components/SlotTest.vue';
import NameSlotTest from './components/NameSlotTest.vue';
import ScopedSlotText from './components/ScopedSlotText.vue';
export default {
  name: 'App',
  components: { NoSlotTest, SlotTest, NameSlotTest, ScopedSlotText },
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
