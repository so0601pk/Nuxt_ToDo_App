<template>
  <div>
    <!-- 入力フォームコンポーネント -->
    <CommonInputText />
    <!-- 完了していないTodoを表示 -->
    <div v-if="todoArr">
      <div
        v-for="(todo, index) in todoArr"
        :key="index"
        class="leading-8 text-xl"
      >
        <template v-if="todo.checked == false">
          <input
            id="todo"
            type="checkbox"
            class="h-4 w-4"
            @change="compTask(index)"
          /><label for="todo" class="pl-2">{{ todo.task }}{{ index }}</label>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      todoArr: this.$accessor.todo.getTodo,
    }
  },
  computed: {},
  methods: {
    compTask(index: number) {
      this.$emit('changeCheck', index)
    },
  },
})
</script>
