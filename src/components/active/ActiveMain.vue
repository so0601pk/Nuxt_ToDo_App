<template>
  <div>
    <CommonInputText />
    <div v-if="todos">
      <div v-for="(todo, index) in todos" :key="index">
        <input id="todo" type="checkbox" /><label for="todo">{{ todo }}</label>
      </div>
    </div>
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
})
</script>
