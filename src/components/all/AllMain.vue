<template>
  <div>
    <!-- 入力フォームコンポーネント -->
    <CommonInputText />
    <!-- 全てのTodoを表示 -->
    <div v-if="todos">
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="leading-8 text-xl"
      >
        <input
          class="h-4 w-4"
          :id="'todo' + index"
          type="checkbox"
          :checked="todo.checked ? 'checked' : ''"
          @change="changeCheck(index)"
        /><label :for="'todo' + index" class="pl-2">{{ todo.task }}</label>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      todos: this.$accessor.todo.getTodo,
    }
  },
  methods: {
    changeCheck(index: number) {
      this.$emit('changeCheck', index)
    },
  },
})
</script>
