<template>
  <div>
    <h2>Sender</h2>

    <button @click="sendMessage">이벤트발신</button>
  </div>
</template>

<script>
export default {
  name: 'Semder',
  methods: {
    sendMessage() {
      this.emitter.emit('message', Date.now() + '에 발신된 메시지');
    },
  },
};
</script>
