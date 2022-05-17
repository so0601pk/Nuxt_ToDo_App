<template>
  <div id="contents">
    <h1>#todo</h1>
    <!-- タブコンポーネント -->
    <button v-for="(tab, index) in tabs" :key="index" @click="changeTab(tab)">
      <span>{{ tab }}</span>
    </button>
    <!-- タブを押下した際に、下記コンポーネントが切り替わる -->
    <component
      :is="currentTab"
      @changeCheck="changeCheck"
      @deleteAll="deleteAll"
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
    changeCheck(index: number) {
      const changeNum = index
      this.$accessor.todo.changeState(changeNum)
    },
    deleteAll() {
      this.$accessor.todo.deleteTodo()
    },
  },
})
</script>
