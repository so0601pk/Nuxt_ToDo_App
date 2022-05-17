<template>
  <div>
    <!-- 入力フォームコンポーネント -->
    <CommonInputText />
    <!-- 完了していないTodoを表示 -->
    <div v-if="todoArr">
      <div v-for="(todo, index) in todoArr" :key="index">
        <template v-if="todo.checked == false">
          <input id="todo" type="checkbox" @change="compTask(index)" /><label
            for="todo"
            >{{ todo.task }}{{ index }}</label
          >
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
