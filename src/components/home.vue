<template>
  <div class="home">
    <mt-button type="primary" @click.native="toast">primary</mt-button>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  computed: {},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  beforeDestroy () {},
  created () {},
  mounted () {},
  methods: {
    toast () {
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      })
    }
  }
}
</script>
<style scoped lang="less">
.home{
  text-align: left;
  button{
    width: 100%
  }
}
</style>
