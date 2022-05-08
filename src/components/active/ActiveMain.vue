<template>
  <div>
    <CommonInputText />
    <div v-if="todos">
      <div v-for="(todo, index) in todos" :key="index">
        <input
          id="todo"
          type="checkbox"
          @change="compTask(todo, index)"
        /><label for="todo">{{ todo }}{{ index }}</label>
      </div>
    </div>
    {{ todos }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      todos: this.$accessor.active.getTodo,
    }
  },
  methods: {
    compTask(todo: string, index: number) {
      this.$emit('complete', todo, index)
    },
  },
})
</script>
