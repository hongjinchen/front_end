<template>
  <div id="page">
    <Export></Export>
  </div>
</template>

<script>
import Export from "./Export";
export default {
  name: 'page_export',
  components:{
    "Export": Export
  },
}
</script>

<style scoped>
#page {
  margin: 0;
  padding: 0;
  background-color: rgba(255, 255, 255, 0.0);
  height: 920px;
  width: 100%;
}
</style>