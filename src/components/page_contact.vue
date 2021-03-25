<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script> 

<template>
  <div id="page">
    <div class="contactUs">
      <div class="word0">CONTACT US</div>
      <div class="middleLoc">
        <div>
          <span class="word1">OUR MISSION</span>
          <span class="word2">OUR VISION</span>
        </div>

        <img class="shiming" src="../assets/shiming.png" />
        <label></label>
        <img class="yuanjing" src="../assets/bushu.png" />
      </div>
      <div class="form">
        <a class="word3">您也可以通过填写下方表格联系我们</a>
        <input class="word4" maxlength="10" v-model="message" placeholder="如何称呼您" />
        <input class="word5" v-model="email" placeholder="您的联系邮箱" />
        <input class="word6" type="number" v-model="phone" placeholder="您的联系电话" />
        <textarea class="word7" maxlength="140" v-model="phone" placeholder="请留下您的意见或建议" />
        <input class="submit" type="button" value="submit" @click="doSubmit" />
      </div>
      <div>.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page_contact",
  data: {},
  methods: {
    doSubmit: function () {
      alert("You have submit");
    },
  },
};
</script>

<style scoped>
#page {
  background-color: rgba(255, 255, 255, 0.9);
  height: 100%;

  margin: 0;
  padding: 0;
}

/* 联系我们 */

.word0 {
  text-align: center;
  line-height: 70px;
  padding-top: 30px;
  color: rgba(235, 122, 103, 100);
  font-size: 45px;
  font-family: Roboto;
}

/* 外部框架 */
.middleLoc {
  margin-top: 40px;
  margin-left: 40px;
  margin-right: 40px;
  height: 400px;
  position: relative;
}

/* 使命愿景图标 */
.shiming {
  position: absolute;
  padding-left: 20%;
}
.yuanjing {
  float: right;
  padding-right: 20%;
}

/* 中间线 */
label {
  margin-left: 50%;
  background: rgba(235, 122, 103, 100);
  width: 1px;
  height: 400px;
  position: absolute;
}

.word1 {
  position: absolute;
  padding-left: 15%;
  padding-top: 100px;
  font-size: 30px;
  color: rgba(48, 70, 92, 100);
  font-weight: 400;
  font-family: Roboto;
  letter-spacing: 0.6px;
}

.word2 {
  position: absolute;
  padding-left: 72%;
  padding-top: 100px;
  font-size: 30px;
  color: rgba(48, 70, 92, 100);
  font-weight: 400;
  font-family: Roboto;
  letter-spacing: 0.6px;
}

/* 表格绘制 */
.form {
  background-color: rgba(210, 111, 108, 0.8);
  height: 331px;
  position: relative;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 30px;
  border-radius: 15px;
  opacity: 0.66;
}
.word3 {
  font-size: 20px;
  position: absolute;
  margin-left: 15%;
  margin-top: 60px;
  line-height: 23px;
  font-family: Roboto;
  color: rgba(255, 255, 255, 100);
}
.word4 {
  width: 340px;
  height: 41px;
  border-radius: 10px;
  background-color: rgba(253, 252, 252, 40);
  color: rgba(210, 111, 108, 66);
  font-size: 14px;
  text-align: left;
  font-family: PingFang SC;
  border: 1px solid rgba(255, 255, 255, 100);
  position: absolute;
  margin-left: 15%;
  margin-top: 120px;
  padding-left: 10px;
}
.word5 {
  width: 340px;
  height: 41px;
  border-radius: 10px;
  background-color: rgba(253, 252, 252, 40);
  color: rgba(210, 111, 108, 66);
  font-size: 14px;
  text-align: left;
  font-family: PingFang SC;
  border: 1px solid rgba(255, 255, 255, 100);
  position: absolute;
  margin-left: 15%;
  margin-top: 180px;
  padding-left: 10px;
}
.word6 {
  width: 340px;
  height: 41px;
  border-radius: 10px;
  background-color: rgba(253, 252, 252, 40);
  color: rgba(210, 111, 108, 66);
  font-size: 14px;
  text-align: left;
  font-family: PingFang SC;
  border: 1px solid rgba(255, 255, 255, 100);
  position: absolute;
  margin-left: 15%;
  margin-top: 240px;
  padding-left: 10px;
}
.word7 {
  width: 340px;
  height: 101px;
  border-radius: 10px;
  background-color: rgba(253, 252, 252, 40);
  color: rgba(210, 111, 108, 66);
  font-size: 14px;
  text-align: left;
  font-family: PingFang SC;
  border: 1px solid rgba(255, 255, 255, 100);
  float: right;
  margin-right: 15%;
  margin-top: 117px;
  padding-left: 10px;
  padding-top: 10px;
  resize: none;
}
.submit {
  width: 80px;
  height: 41px;
  border-radius: 10px;
  background-color: rgb(245, 52, 18) !important;
  color: white;
  font-size: 14px;
  text-align: center;
  font-family: PingFang SC;
  float: right;
  margin-right: -340px;
  margin-top: 240px;
  font-size: 16px;
}
</style>