<template>
  <div>
    <!-- <div style="padding: 10%;">
    <div class="searchBar">
      <v-card style="padding:10px; background-color: rgba(247, 208, 214, 84);border-radius: 50px 50px 50px 50px;">
        <v-text-field label="Search for gift..." light single-line solo class="pt-7 search-xs" background-color="#EE7D79" append-icon="mdi-magnify" rounded>
        </v-text-field>
      </v-card>
    </div> -->
    <!-- ? -->
    <div id="cover">
      <form method="get" action="">
        <div class="tb">
          <div class="td"><input type="text" v-model="infoSearch" placeholder="Search for gift..." required></div>
          <div class="td" id="s-cover">
            <router-link to="/Search" exact>
              <button type="submit">
                <div id="s-circle"></div>
                <span></span>
              </button>
            </router-link>
          </div>
        </div>
      </form>
    </div>
    <div style="margin-top: 10px">
      <v-card class="RelatedReasult" v-if="showRelatedReasult" v-for="(item, index) in relatedGift">
        <v-card-text @click="enterRelatedReasult(item.gift_name)">
          {{item.gift_name}}
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      infoSearch: "",
      // loading: false,
      showRelatedReasult: false,
      relatedGift: [{
        gift_name: "末日卤蛋",
      },
      {
        gift_name: "狂鼠",

      },
      {
        gift_name: "天使姐姐",
      },
      {
        gift_name: "安娜姐姐",
      }
      ],
    }
  },
  watch: {
    infoSearch (val, oldVal) {
      if (val.length == 0) {
        this.showRelatedReasult = false
      } else {
        this.showRelatedReasult = true;
        this.relatedGift.forEach((item, index) => {
          if (item.indexOf(val) >= 0) {
            relatedGift.unshift(item)
          }
        })
        this.infoSearch = relatedGift;
      }
    }
  },
  // watch: {
  //   infoSearch (newinfoSearch, oldinfoSearch) {
  //     if (newinfoSearch != oldinfoSearch) {    // 对比输入前后data变化，如果存在变化则请求后端返回新的礼物联想list
  //       this.axios({
  //         method: "get",
  //         url: this.$store.state.host + "suggestion/",
  //       })
  //         .then((res) => {
  //           this.showRelatedReasult = true;
  //           this.relatedGift = res.data.data;
  //         })
  //         .catch((error) => {
  //           alert("失败了QAQ")
  //         })
  //     }
  //   }
  // },
  methods: {
    // submitSeachInfo (e) {
    //   // 提交需要搜素的信息
    //   this.axios({
    //     method: "get",
    //     url: this.$store.state.host + "suggestion/",
    //     data: this.infoSearch,
    //   })
    //     .then((res) => {
    //       // alert("开始搜索！");
    //       //弹窗
    //       // this.loading = false;
    //       // loading是用来等待的
    //       this.$router.go(0);
    //       // 这个是负责刷新页面的
    //       this.showRealtedReasult = true;
    //     })
    //     .catch((error) => {
    //       // this.$store.commit("response", error);
    //       // this.loading = false;
    //       console.log(this.infoSearch);
    //     });
    // },
    moclSubmit () {
      this.$router.push({ path: "/Search" });
    },
    submitSeachInfo (e) {
      this.showRealtedReasult = true;
    },
    enterRelatedReasult (e) {
      this.infoSearch = e;
      this.showRelatedReasult = false;
    }
  },
};
</script>
<style scoped>
* {
  outline: none;
}

html,
body {
  height: 100%;
  min-height: 100%;
}

body {
  margin: 0;
  background-color: #ffd8d8;
}

.tb {
  display: table;
  width: 100%;
}

.td {
  display: table-cell;
  vertical-align: middle;
}

input,
button {
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}

#cover {
  position: static;
  width: 1600px;
  padding: 35px;
  margin: 0px auto 0 auto;
  background-color: #ff7575;
  border-radius: 20px;
  box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb;
  transform: scale(0.4);
}

form {
  height: 96px;
}

input[type="text"] {
  width: 100%;
  height: 96px;
  font-size: 60px;
  line-height: 1;
}

input[type="text"]::placeholder {
  color: #e16868;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

button {
  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;
}

#s-circle {
  position: relative;
  top: -8px;
  left: 0;
  width: 65px;
  height: 65px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
}

button span {
  position: absolute;
  top: 68px;
  left: 43px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: transparent;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

button span:before,
button span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 15px;
  background-color: #fff;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: -1px;
  width: 67px;
  height: 15px;
  border-width: 0;
  background-color: #fff;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 50%;
  left: 56px;
  width: 25px;
  margin-top: -9px;
  transform: rotateZ(0);
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #fff;
}

#ytd-url {
  display: block;
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 10px 14px;
  margin: 20px;
  color: #fff;
  font-family: Nunito;
  font-size: 14px;
  text-decoration: none;
  background-color: #ff7575;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(255, 117, 117, 0.86);
  z-index: 125;
}

input::-webkit-input-placeholder {
  font-size: 36px;
  display: flex;
  align-items: center;
  color: #e16868;
}
.RelatedReasult {
  width: 300px;
  height: 50px;
}
.searchBar {
  display: flex;
  justify-content: center;
  width: 375px;
  height: 72px;
  margin-left: 30%;
}
</style>