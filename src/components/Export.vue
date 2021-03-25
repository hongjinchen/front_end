<template>
  <div id="page">
    <div style="left: 537px;">
      <searchBar></searchBar>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
export default {
  name: 'Export',
  components: {
    "searchBar": SearchBar
  }
}
</script>

<style scoped>
#page {
  margin: 0;
  padding: 0;
  background: pink;
  height: 1440px;
  width: 100%;
}
</style>