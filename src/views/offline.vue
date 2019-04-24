<template>
  <div class="offline">
    <p class="text">您的网络好像不太给力，请稍后再试</p>
    <mt-button type="primary" class="reload-btn" size="large" @click="reloadPage">重新加载</mt-button>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { getDemo } from '@/utils/api/demo.js'

export default {
  inject: ['reload'],
  data () {
    return {
    }
  },
  mounted () {
    this.getDemo()
  },
  methods: {
    reloadPage () {
      this.reload()
    },
    getDemo () {
      Indicator.open()
      getDemo().then(res => {
        Indicator.close()
        Toast({
          message: '萨达萨达',
          position: 'bottom',
          duration: 1500
        })
      })
    }
  }
}
</script>
<style scoped lang="less">
.offline{
  .text{
      color: #384242;
      font-size: 28px;
      text-align: center;
      margin-top:75px;
  }
  .reload-btn{
      margin: 109px auto 0 auto;
      width: 450px;
  }
}
</style>
