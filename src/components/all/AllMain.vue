<template>
  <div>
    <CommonInputText />
    <div v-if="actives">
      <div v-for="(todo, index) in actives" :key="index">
        <input
          id="active"
          type="checkbox"
          @change="compTask(todo, index)"
        /><label for="active">{{ todo }}{{ index }}</label>
      </div>
    </div>
    <div v-if="completed">
      <div v-for="(comp, index) in completed" :key="index">
        <input
          id="completed"
          type="checkbox"
          checked="checked"
          @change="activeTask(comp, index)"
        /><label for="completed">{{ comp }}{{ index }}</label>
      </div>
    </div>
    {{ actives }}<br />
    {{ completed }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      actives: this.$accessor.active.getTodo,
      completed: this.$accessor.completed.getComp,
    }
  },
  methods: {
    compTask(todo: string, index: number) {
      this.$emit('complete', todo, index)
    },
    activeTask(comp: string, index: number) {
      this.$emit('active', comp, index)
    },
  },
})
</script>
