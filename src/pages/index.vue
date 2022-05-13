<template>
  <div id="contents">
    <h1>#todo</h1>
    <!-- タブコンポーネント -->
    <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)">
      <!--①v-on:clickで押したタブのidがdataのidに変わる-->
      <span>{{ tab }}</span>
    </button>
    <!-- inputコンポーネント -->
    <!-- <CommonInputText v-if="currentTab !== 'Completed'" /> -->
    <component :is="currentTab" @changeCheck="changeCheck"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import All from '@/components/all/AllMain.vue'
import Active from '@/components/active/ActiveMain.vue'
import Completed from '@/components/completed/CompMain.vue'
import InputText from '@/components/common/inputText.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    All,
    Active,
    Completed,
    InputText,
  },
  data() {
    return {
      currentTab: 'All',
      tabs: ['All', 'Active', 'Completed'],
    }
  },
  methods: {
    changeTab(value: string) {
      this.currentTab = value
    },
    changeCheck(index: number) {
      const changeNum = index
      this.$accessor.todo.changeState(changeNum)
    },
  },
})
</script>
