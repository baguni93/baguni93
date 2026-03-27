<template>
  <div class="header">
    <h1 class="headerText">태평양 전쟁의 해전</h1>
    <nav>
      <ul class="nav nav-tabs nav-fill">
        <li v-for="tab in tabs" :key="tab.id" class="nav-item">
          <!-- // class 속성에 값을 "동적으로 바인딩"한다 -->

          <a
            style="cursor: pointer"
            class="nav-link"
            :class="{ active: tab.id === currentTab }"
            @click="changeTab(tab.id)"
            >{{ tab.label }}</a
          >
        </li>
      </ul>
    </nav>
  </div>
  <div class="container">
    <!-- //"currentTab 값에 해당하는 컴포넌트를 렌더링해라" -->
    <!-- "컴포넌트를 제거하지 말고 상태를 유지해라" -->
    <!-- "이 이름의 컴포넌트만 캐싱해라" -->
    <keep-alive include="MidwayTab,CoralSeaTab">
      <component :is="currentTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import MidwayTab from './components/MidwayTab.vue';
import LeyteGulfTab from './components/LeyteGulfTab.vue';
import CoralSeaTab from './components/CoralSeaTab.vue';

export default {
  name: 'App',
  components: { MidwayTab, LeyteGulfTab, CoralSeaTab },

  data() {
    return {
      currentTab: 'CoralSeaTab',
      tabs: [
        { id: 'CoralSeaTab', label: '산호해 해전' },
        { id: 'MidwayTab', label: '미드웨이 해전' },
        { id: 'LeyteGulfTab', label: '레이테만 해전' },
      ],
    };
  },
  methods: {
    changeTab(tab) {
      this.currentTab = tab;
    },
  },
};
</script>

<style>
.header {
  padding: 20px 0px 0px 20px;
}
.headerText {
  padding: 0px 20px 40px 20px;
}
.tab {
  padding: 30px;
}
</style>
