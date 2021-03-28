<template>
  <div id="page">
    <div class="Export">
      <div>
        <searchBar></searchBar>
      </div>
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
  margin: 0 auto 0 auto;
  height: 580px;
  width: 100%;
  background-color: rgba(245, 245, 245, 0.0);
}
h1 {
  padding: 0;
  font-size: 100px;
  text-align: center;
  color: rgba(50, 100, 150, 1);
}
</style>