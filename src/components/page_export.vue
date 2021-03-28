<template>
  <div id="page">
    <v-app id="slide_shows">
      <v-carousel cycle height="480px" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">
                {{ slide }} Slide
              </div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-app>
    <searchBar id="search_bar"></searchBar>
    <div id="search_history" v-show="hasHistory">
      <h1 class="subtitle-1">Search History</h1>
      <div class="showHistory" v-for="(history, i) in user_history" :key="i"></div>
    </div>
    <div id="recommendation_today">
      <h1 class="subtitle-2">Recommended Today</h1>
      <div class="showRecommendation">
        <v-card class="rc1">
          <!-- <v-img :src="require('../assets/shiming.png')">
          </v-img> -->
          <span>1</span>
        </v-card>
        <v-card class="rc2">
          <span>2</span>
        </v-card>
        <v-card class="rc3">
          <span>3</span>
        </v-card>
        <v-card class="rc4">
          <span>4</span>
        </v-card>
        <v-card class="rc5">
          <span>5</span>
        </v-card>
      </div>
    </div>
    <div id="list_of_good_things">
      <h1 class="subtitle-3">List of good things</h1>
      <div class="showArticles">
        <v-card class="sa1">
          <span>1</span>
        </v-card>
        <v-card class="sa2">
          <span>2</span>
        </v-card>
      </div>
    </div>
    <div id="about">
      <h2 class="info-1">CONNECT US</h2>
      <h2 class="info-2">TEL: (123) 456-789</h2>
      <h2 class="info-3">EMAIL: xxx@xxxx.com</h2>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'

export default {
  name: 'page_export',
  components: {
    "searchBar": SearchBar
  },
  data () {
    return {
      recommendGift: [],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      user_history:['ball', 'butterfly', ],
      hasHistory: false,
    }
  },
  created () {
    this.$axios({
      method: "get",
      url: "http://fooxking.net:9000/search/QAQ",
    })
        .then((res) => {
          this.recommendGift = res.data;
        })
        .catch((error) => {
          console.log("白嫖失败！");
        });
  },
  mounted() {
    if(this.user_history.length != 0){
      this.hasHistory=true;
    }
  },
  methods:{

  }
}
</script>

<style scoped>
#page {
  margin: 0 auto 0 auto;
  background-color: rgba(245, 245, 245, 0.98);
  height: auto;
  width: 1280px;
}
#search_bar{
  padding-top: 10px;
  height: 160px;
}
#slide_shows{
  max-height: 468px;
}
#search_history{
  height: 200px;
}
#recommendation_today{
  height: 748px;
}
#list_of_good_things{
  height: 748px;
}
#recommendation_today, #search_history, #list_of_good_things{
  padding-left: 60px;
  padding-right: 60px;
}
#about{
  height: 160px;
  background-color: #d26f6c;
}
.showHistory{
 padding-left: 100px;
}

.showRecommendation{
  margin-left: auto;
  margin-right: auto;
  width: 1080px;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2, 50%);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}
.rc1{
  grid-row: 1/3;
  grid-column: 1;
}

.rc2{
  grid-row: 1;
  grid-column: 2;
}
.rc3{
  grid-row: 1;
  grid-column: 3/5;
}
.rc4{
  grid-row: 2;
  grid-column: 2/4;
}
.rc5{
  grid-row: 2;
  grid-column: 4;
}

.showArticles{
  margin-left: auto;
  margin-right: auto;
  width: 1080px;
  height: 600px;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(1, 100%);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

h1{
  height: 96px;
  font-family: monospace;
  font-size: 40px;
  color: #d26f6c;
}
h2{
  padding-top: 20px;
  height: 48px;
  font-family: monospace;
  font-size: 24px;
  color: black;
  text-align: center;
}
</style>