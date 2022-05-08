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
    <component
      :is="currentTab"
      @active="activeTask"
      @complete="compTask"
    ></component>
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
    activeTask(comp: string, index: number) {
      const activeTask = comp
      const deleteNum = index
      this.$accessor.active.setTodo(activeTask)
      this.$accessor.completed.deleteTodo(deleteNum)
    },
    compTask(active: string, index: number) {
      const compTask = active
      const deleteNum = index
      this.$accessor.completed.setTodo(compTask)
      this.$accessor.active.deleteTodo(deleteNum)
    },
  },
})
</script>
