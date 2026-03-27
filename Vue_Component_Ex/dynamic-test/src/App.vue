<template>
  <div>
    <button v-for="tab in tabs" :key="tab" @click="OnChangeTab(tab)">
      {{ tab }}
    </button>

    <KeepAlive include="CoralSeaTab,MidwayTab">
      <component :is="currentTab"></component>
    </KeepAlive>
  </div>
</template>

<script>
import CoralSeaTab from './components/CoralSeaTab.vue';
import MidwayTab from './components/MidwayTab.vue';

export default {
  name: 'App',
  components: { CoralSeaTab, MidwayTab },

  data() {
    return {
      currentTab: 'CoralSeaTab',
      tabs: ['CoralSeaTab', 'MidwayTab'],
    };
  },
  methods: {
    OnChangeTab(e) {
      console.log(e);
      this.currentTab = e;
    },
  },
};
</script>
