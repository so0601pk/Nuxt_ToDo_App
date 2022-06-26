<template>
  <div>
    <!-- 入力フォームコンポーネント -->
    <CommonInputText />
    <!-- 全てのTodoを表示 -->
    <div v-if="todos" class="all_todo_wrap">
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="all_todo_container leading-8 text-xl"
      >
        <input
          :id="'todo' + index"
          class="todo h-4 w-4"
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
