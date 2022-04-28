<template>
  <div id="contents">
    <h1>#todo</h1>
    <!-- タブコンポーネント -->
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="currentTab = tab.id"
    >
      <!--①v-on:clickで押したタブのidがdataのidに変わる-->
      <span :class="tab.id">{{ tab }}</span>
    </button>
    <!-- inputコンポーネント -->
    <component :is="currentTab"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import All from '@/components/all/AllMain.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    All,
  },
  data() {
    return {
      currentTab: 'All',
      tabs: ['All', 'Active', 'Completed'],
    }
  },
})
</script>
