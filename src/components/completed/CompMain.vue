<template>
  <div>
    <!-- 完了したTodoを表示 -->
    <div v-if="todoArr" class="complete_todo_wrap">
      <div
        v-for="(todo, index) in todoArr"
        :key="index"
        class="complete_todo_container leading-8 text-xl pt-7"
      >
        <template v-if="todo.checked == true">
          <input
            id="todo"
            class="complete_todo h-4 w-4"
            type="checkbox"
            checked="checked"
            @change="undoTask(index)"
          /><label for="todo">{{ todo.task }}{{ index }}</label>
          <!-- Todo: imgタグでゴミ箱の画像を表示 -->
        </template>
      </div>

      <div class="delete_button_wrap flex justify-end">
        <button
          class="delete_button bg-indigo-600 text-white px-10 py-1.5 rounded-lg"
          @click="deleteAll()"
        >
          delete all
        </button>
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
    undoTask(index: number) {
      this.$emit('changeCheck', index)
    },
    deleteAll() {
      this.$emit('deleteAll')
    },
  },
})
</script>
