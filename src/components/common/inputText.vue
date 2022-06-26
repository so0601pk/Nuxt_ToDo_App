<template>
  <div class="flex justify-cente py-7">
    <input
      v-model="task"
      type="text"
      maxlength="20"
      minlength="1"
      placeholder="add details"
      class="border rounded border-gray-300 w-full h-12"
    />
    <div @click="addTask">
      <button
        class="bg-indigo-600 text-white px-10 py-1.5 rounded-lg h-12 ml-7"
      >
        Add
      </button>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      task: '',
    }
  },
  methods: {
    addTask(): void {
      const todo: string = this.task
      if (todo !== '') {
        this.$accessor.todo.setTodo(todo)
        this.task = ''
      } else {
        this.task = ''
      }
    },
  },
})
</script>
