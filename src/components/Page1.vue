<template>
  <div id="page1">
    <div class="contactUs">
      <div class="word0">CONTACT US</div>
      <div class="middleLoc">
        <div>
          <div class="word1">OUR MISSION</div>
          <span class="word2">OUR VISION</span>
        </div>
        <div>
      
        </div>
        <img class="shiming" src="../assets/shiming.png" />
        <label></label>
        <img class="yuanjing" src="../assets/bushu.png" />
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1",
};
</script>

<style scoped>
#page1 {
  background: white;
  height: 600px;
  width: 100%;
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
  font-size:30px;
  color: rgba(48, 70, 92, 100);
  font-weight: 400;
  font-family: Roboto;
  letter-spacing: 0.6px;
}


.word2 {
  position: absolute;
  padding-left: 72%;
  padding-top: 100px;
  font-size:30px;
  color: rgba(48, 70, 92, 100);
  font-weight: 400;
  font-family: Roboto;
  letter-spacing: 0.6px;

}
</style>