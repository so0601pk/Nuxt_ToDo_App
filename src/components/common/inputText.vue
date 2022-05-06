<template>
  <div>
    <input
      v-model="task"
      type="text"
      maxlength="15"
      minlength="1"
      placeholder="add details"
    />
    <div @click="addTask">
      <button>Add</button>
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
      this.$accessor.active.setTodo(todo)
      this.task = ''
    },
  },
})
</script>
