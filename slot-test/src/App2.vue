<template>
  <div>
    <Layout>
      <template v-slot:header>
        <h2>header 영역</h2>
      </template>

      <template v-slot:sidebar>
        <h2>sidebar 영역</h2>
      </template>

      <template v-slot:default>
        <h2>content 영역</h2>
        <h2>content 영역</h2>
        <h2>content 영역</h2>
        <h2>content 영역</h2>
        <h2>content 영역</h2>
        <h2>content 영역</h2>
      </template>

      <template v-slot:footer>
        <h2>footer 영역</h2>
      </template>
    </Layout>
  </div>
</template>
<script>
import Layout from './components/Layout.vue';
export default {
  name: 'App2',
  components: { Layout },
};
</script>
