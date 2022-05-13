<template>
  <div>
    <div v-if="todoArr">
      <div v-for="(todo, index) in todoArr" :key="index">
        <template v-if="todo.checked == true">
          <input
            id="todo"
            type="checkbox"
            checked="checked"
            @change="undoTask(index)"
          /><label for="todo">{{ todo.task }}{{ index }}</label>
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
    undoTask(index: number) {
      this.$emit('changeCheck', index)
    },
  },
})
</script>
