<template>
  <div>
    <CommonInputText />
    <div v-if="todos">
      <div v-for="(todo, index) in todos" :key="index">
        <input
          :id="'todo' + index"
          type="checkbox"
          :checked="todo.checked ? 'checked' : ''"
          @change="changeCheck(index)"
        /><label :for="'todo' + index">{{ todo.task }}</label>
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
