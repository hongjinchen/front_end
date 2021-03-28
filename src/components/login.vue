<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 

<template>
  <div class="container">
    <div class="background"></div>
    <div class="contain">
      <a class="title"> GIFTER SYSTEM LOGIN </a>

      <div class="form">
        <input
          type="text"
          v-model.trim="name"
          placeholder="Please enter your user name"
          onKeyUp="value=value.replace(/[\W]/g,'')"
          maxlength="20"
        /><br />
      </div>
      <div class="passWord">
        <input
          :type="pwdType"
          v-model.trim="password"
          placeholder="Please enter your password"
          onkeyup="this.value=this.value.replace(/[^\w]/g,'')"
          maxlength="10"
        />
        <img
          :src="seen ? openeye : nopeneye"
          class="eye"
          alt=""
          @click="changeType()"
        />
      </div>

      <button @click.prevent="handlefinish">LOGIN</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  height: 900px;
  width: 100%;
}
.background {
  background: url("../assets/gift.jpg") no-repeat center;
  float: left;
  width: 100%;
  height: 900px;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-filter: blur(5px) !important;
  -moz-filter: blur(5px) !important;
  -o-filter: blur(5px) !important;
  -ms-filter: blur(5px) !important;
  filter: blur(4px) !important;
  text-align: center;
}
.contain {
  position: absolute;
  width: 500px;
  height: 500px;
  margin-top: 200px;
  margin-left: 500px;
  /* background-color: royalblue; */
  z-index: 5;
}
.title {
  color: rgba(255, 255, 255, 100);
  font-size: 30px;
  text-align: left;
  font-family: SourceHanSansSC-regular;
  text-align: center;
  padding-left: 7%;
}

input {
  outline-style: none;
  border: 0px;
  width: 440px;
  border-radius: 30px;
  height: 50px;
  padding: 25px;
  margin-top: 40px;
  border: 1px solid rgba(255, 255, 255, 100);
  opacity: 0.4;
  background-color: rgba(255, 255, 255, 100);
}
input::-webkit-input-placeholder {
  color: rgb(27, 27, 27);
}
input::-moz-input-placeholder {
  color: rgb(27, 27, 27);
}
input::-ms-input-placeholder {
  color: rgb(27, 27, 27);
}

button {
  left: 623px;
  top: 682px;
  width: 120px;
  height: 50px;
  line-height: 26px;
  border-radius: 30px;
  margin-top: 40px;
  background-color: rgba(210, 111, 108, 100);
  color: rgba(255, 255, 255, 100);
  font-size: 18px;
  text-align: center;
  font-family: Roboto;
  border: 1px solid rgba(210, 111, 108, 100);
  margin-left: 30%;
}

img {
  float: right;
  height: 26px;
  margin-top: 57px;
  margin-right: 20px;
}
</style>

<script>
export default {
  name: "Register",
  props: {
    msg: String,
  },
  data() {
    return {
      name: "",
      password: "",
      passwordAgain: "",
      phone: "",
      seen: "",
      seen1: "",
      pwdType: "password", // 密码类型
      pwdType1: "password", // 密码类型
      openeye: require("../assets/eye.png"), //图片地址
      nopeneye: require("../assets/eye2.png"), //图片地址
    };
  },

  methods: {
  }
    
};
</script>