<template>
  <div>
    <!-- 完了したTodoを表示 -->
    <div v-if="todoArr">
      <div v-for="(todo, index) in todoArr" :key="index">
        <template v-if="todo.checked == true">
          <input
            id="todo"
            type="checkbox"
            checked="checked"
            @change="undoTask(index)"
          /><label for="todo">{{ todo.task }}{{ index }}</label>
          <!-- Todo: imgタグでゴミ箱の画像を表示 -->
        </template>
      </div>
      <!-- Todo: ゴミ箱の画像を表示 -->
      <button @click="deleteAll()">delete all</button>
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
