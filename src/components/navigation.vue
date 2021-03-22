<template>
  <nav>
    <ul>
      <li>
        <router-link to="/" exact>HOME</router-link>
        <router-link to="/page1" exact>CONTACT</router-link>
        <router-link to="/page2" exact> PERSONAL </router-link>
        <img src="../assets/lingdang.png" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navigation",
};
</script>

<style scoped>
ul {
  list-style-type: none; /*消除黑点*/
  margin: 0;
  height: 60px; /*导航栏高度*/
}
li {
  display: inline-block;
  margin: 0 10px;
  margin-top: 17px; /*上边距*/
  text-align: right;
}
img {
  width: 18px;
  text-align: right;
  margin-right: 28px;
  margin-left: 10px;
}

a {
  color: rgba(48, 70, 92, 100); /*设置字体颜色*/
  text-decoration: none; /*消除下划线*/
  font-size: 16px; /*文字大小*/
  padding: 19px; /*单词间距*/

  border-radius: 5px;
  left: 1104px;
  font-family: Roboto;
}
nav {
  background: white;
  left: 0px;
  top: 0px;
  text-align: right;
}
/*选中则发生一些变化*/
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #d26f6c;
}
</style>