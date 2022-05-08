<template>
  <div>
    <div v-if="comps">
      <div v-for="(comp, index) in comps" :key="index">
        <input
          id="todo"
          type="checkbox"
          checked="checked"
          @change="activeTask(comp, index)"
        /><label for="todo">{{ comp }}{{ index }}</label>
      </div>
    </div>
    {{ comps }}
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      comps: this.$accessor.completed.getComp,
    }
  },
  methods: {
    activeTask(comp: string, index: number) {
      this.$emit('active', comp, index)
    },
  },
})
</script>
