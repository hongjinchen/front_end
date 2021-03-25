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
  },
}
</script>

<style scoped>
.Export {
  position: static;
  padding: 80px;
  margin: 120px auto 0 auto;
  height: 600px;
  width: 800px;
  background-color: rgba(255, 255, 255, 0.9);
}
h1 {
  padding: 0;
  font-size: 100px;
  text-align: center;
  color: rgba(50, 100, 150, 1);
}
</style>