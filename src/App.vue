
<template>
  <div id="app" v-bind:style="{
      backgroundImage:'url('+imgSrc+')',
      backgroundSize:'cover',
      backgroundAttachment:'fixed'
    }">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './components/navigation'
import * as ub from './assets/user-background'
let bgs = ub.setBackground();
export default {
  name: 'App',
  components: {
    "navigation": navigation,
  },
  data () {
    return {
      imgSrc: null,
    };
  },
  methods: {
    setUrl () {
      this.imgSrc = bgs[0].url
    },
  },
  mounted () {
    this.setUrl();
  },
}
</script>

<style>
#app {
  height: auto;
  width: 100%;
}
</style>