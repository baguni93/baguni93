<template>
  <div style="border: solid 1x gray; padding: 5px">
    이름: <input type="text" v-model="name" />
    <!-- <button @click="$emit('nameChanged', { name })">이벤트 발신</button> -->
    <button @click="sendName">이벤트 발신</button>
  </div>
</template>

<script>
export default {
  name: 'InputName',

  data() {
    return { name: '' };
  },

  methods: {
    sendName() {
      this.$emit('nameChanged', { name: this.name });
    },
  },
};
</script>
