<template>
  <!-- <MyInput v-model="searchName"></MyInput> -->
  <MyInput
    :modelValue="searchName"
    @update:modelValue="handleChange"
    v-model:name="userName"
    v-model:email="userEmail"
  ></MyInput>

  <h3>{{ searchName }}</h3>
  <h3>{{ userName }}</h3>
  <h3>{{ userEmail }}</h3>

  <div>
    <h3>검색어: {{ modalName }}</h3>
    <button @click="openModal">모달 열기</button>

    <MyModal v-model:visible="isModalOpen">
      <h2>검색 확인</h2>
      <p>현재 검색어는 {{ modalName }} 입니다.</p>
    </MyModal>
  </div>
</template>

<script>
import MyInput from './components/MyInput.vue';
import MyModal from './components/MyModal.vue';

export default {
  name: 'App',
  components: { MyInput, MyModal },
  data() {
    return {
      modalName: '모달',
      searchName: 'John',
      userName: 'userName',
      userEmail: 'userEmail',
      visible: false,
      isModalOpen: false,
    };
  },
  methods: {
    handleChange(value) {
      this.searchName = value;
    },

    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
