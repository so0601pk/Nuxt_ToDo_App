<template>
  <div class="tab"></div>
</template>
<script lang="ts">
import Vue from 'vue'
// type Tab = {
//   tab:Array<string>
// };
export default Vue.extend({
  data() {
    return {
      currentTab: 'All',
      tabs: ['All', 'Active', 'Completed'],
    }
  },
})
</script>
