<template>
  <div class="background">
    <!-- <div id="cover">
      <div class="tb">
        <div class="td"><input type="text" v-model="keyOfGift" placeholder="Search for gift..." required></div>
        <div class="td" id="s-cover">
          <button type="submit" @click="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </div> -->
    <searchBar></searchBar>
    <div class="result">
      <div>
        搜索结果
      </div>
      <v-card style="background-color: pink;" v-for="(item, index) in relatedGift" :key="index">
        {{item.gift_id}}
        {{item.gift_name}}
        {{item.gift_img}}
        {{item}}
      </v-card>
    </div>
  </div>
</template>

<script>
import SearchBar from './SearchBar'
export default {
  data () {
    return {
      loading: false,
      keyOfGift: this.$route.query.keyOfGift,
      showRelatedReasult: false,
      relatedGift: [],
    }
  },
  components: {
    "searchBar": SearchBar
  },
  methods: {
    // submit () {
    //   this.$axios({
    //     method: "get",
    //     url: "http://fooxking.net:9000/search/" + this.keyOfGift,
    //   })
    //     .then((res) => {
    //       this.relatedGift = res.data;
    //       console.log("啊啊啊啊成功");
    //     })
    //     .catch((error) => {
    //       console.log("失败了！");
    //     });
    // },
  },
  created () {
    this.$axios({
      method: "get",
      url: "http://fooxking.net:9000/search/" + this.keyOfGift,
    })
      .then((res) => {
        this.relatedGift = res.data;
      })
      .catch((error) => {
        console.log("失败了！");
      });
  }
}
</script>

<style scoped>
</style>