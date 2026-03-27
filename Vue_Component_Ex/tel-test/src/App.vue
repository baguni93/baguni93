<template>
  <div>
    <h2>최신 인기곡</h2>
    <br /><br />
    <button @click="changeModal">Teleport를 이용한 Modal 기능</button>
    <teleport to="#modal">
      <Modal v-if="isModal" />
    </teleport>
  </div>
</template>
<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      isModal: false,
    };
  },
  methods: {
    changeModal() {
      this.isModal = true;
      setTimeout(() => {
        this.isModal = false;
      }, 2000);
    },
  },
};
</script>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
</style>
