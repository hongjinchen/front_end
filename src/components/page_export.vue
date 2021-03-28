<template>
  <div id="page">
    <div class="Export">
      <h1 class="title">Gifter</h1>
      <div class="header" v-bind:style="{height:height, }">
        <searchBar class="searchbar"></searchBar>
      </div>
    </div>
    <div class="recommendation">
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
      <h1>something</h1>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
let y1 = window.scrollY;
let ht = 1020 - y1;

export default {
  name: 'page_explore',
  components: {
    "searchBar": SearchBar
  },
  data(){
    return{
      height:ht+'px',
    };
  },
  mounted() {
    this.alter_height();
  },
  methods:{
    alter_height(){
      let y2 = window.scrollY;
      if(y2 != y1){
        ht = ht + y1 - y2;
        this.height = ht+'px'
        y1 = y2;
      }
      setTimeout(this.alter_height, 20)
    },
  }
}
</script>

<style scoped>
#page {
  background: inherit;
  margin: 0;
  padding-top: 60px;
  height: auto;
  width: 100%;
}
.Export {
  width: 100%;
  height: 1020px;
  background: inherit;
  position: static;

  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(5, 20%);
  grid-gap: 0 0;

}
.header{
  width: 100%;
  position: fixed;
  min-height: 160px;
  background: inherit;

  grid-column: 1 / 4;
  grid-row: 5;
  place-self: end;

  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(5, 20%);
  grid-gap: 0 0;
}
.title {
  padding: 0;
  font-size: 128px;
  text-align: center;
  color: rgba(150, 50, 100, 1);
  grid-column: 2;
  grid-row: 2;
  z-index: 2;
}
.searchbar{
  grid-column: 2;
  grid-row: 3;
  place-self: center;
}
.recommendation{
  background-color: rgba(245, 245, 245, 0.6);
  height: 2040px
}
</style>