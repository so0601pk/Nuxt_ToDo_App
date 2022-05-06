<template>
  <div>
    <div v-if="comps">
      <div v-for="(comp, index) in comps" :key="index">
        <input id="todo" type="checkbox" checked="checked" /><label
          for="todo"
          >{{ comp }}</label
        >
      </div>
    </div>
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
})
</script>
