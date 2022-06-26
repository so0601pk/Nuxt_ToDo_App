<template>
  <div id="contents" class="px-16">
    <h1 class="text-2xl font-bold text-center">#todo</h1>
    <!-- タブコンポーネント -->
    <div class="tab m-58 flex border-b border-b-gray-200 pt-8">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex-1 text-center"
        @click="changeTab(tab)"
      >
        <button class="border border-b-blue-500 w-1/2 pb-2">
          <span class="text-lg">{{ tab }}</span>
        </button>
      </div>
    </div>
    <div class="todo-component">
      <!-- タブを押下した際に、下記コンポーネントが切り替わる -->
      <component
        :is="currentTab"
        @changeCheck="changeCheck"
        @deleteAll="deleteAll"
      ></component>
    </div>
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
      if (value === 'All' || value === 'Active' || value === 'Completed') {
        this.currentTab = value
      }
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
