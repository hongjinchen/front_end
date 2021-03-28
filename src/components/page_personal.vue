<template>
  <div id="page">
     <img class="TouXiang" src="../assets/头像.png" />
     <img class="Pen" src="../assets/笔.png" />
    <div class="word0">Personal Name</div>
  </div>
</template>

<script>
export default {
  name: 'page_personal',
}
</script>

<style scoped>
#page2 {
  margin: 0;
  padding: 0;
  background: rgb(247, 220, 244);
  height: 600px;
  width: 100%;
}
.word0 {
  text-align: center;
  line-height: 450px;
  padding-top: 30px;
  color: rgb(66, 0, 31);
  font-size: 30px;
  font-family: Roboto;
}
/* 头像图标 */
.TouXiang {
  position: absolute;
  text-align: center;
  padding-left: 45%;
  padding-top: 100px;
 max-height: 45%;
}
.Pen {
   position: absolute;
  text-align: center;
  padding-left: 85%;
  padding-bottom: 15px;
  padding-top: 10px;
 max-height: 17%;
}
</style>