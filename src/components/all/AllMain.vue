<template>
  <div>
    <CommonInputText />
    <div v-if="active || completed">
      <!-- <div v-for="a in as">
        <div> <input type="checkbox" name="">{{}} </div>
      </div> -->
    </div>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      active: this.$accessor.active.getTodo,
    }
  },
})
</script>
