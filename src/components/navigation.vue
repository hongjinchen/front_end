<template>
  <div id="nav_group">
    <nav>
      <ul>
        <li>
          <router-link to="/" exact>HOME</router-link>
          <router-link to="/contact" exact>CONTACT</router-link>
          <router-link to="/personal" exact> PERSONAL </router-link>
          <img src="../assets/lingdang.png"/>
        </li>
      </ul>
    </nav>
  </div>
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
  margin: 17px 10px;
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
#nav_group{
  position: fixed;
  width: 100%;
  z-index: 10;
}
/*选中则发生一些变化*/
.router-link-active {
  background: rgba(255, 255, 255, 0.8);
  color: #d26f6c;
}
</style>