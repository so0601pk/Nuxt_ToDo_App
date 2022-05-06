<template>
  <div>
    <CommonInputText />
    <div v-if="actives">
      <div v-for="(active, index) in actives" :key="index">
        <input id="active" type="checkbox" /><label for="active">{{
          active
        }}</label>
      </div>
    </div>
    <div v-if="completed">
      <div v-for="(comp, index) in completed" :key="index">
        <input id="completed" type="checkbox" checked="checked" /><label
          for="completed"
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
      actives: this.$accessor.active.getTodo,
      completed: this.$accessor.completed.getComp,
    }
  },
})
</script>
