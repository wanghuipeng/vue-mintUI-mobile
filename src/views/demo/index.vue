<template>
  <div class="demo">
    <mt-button type="primary" @click="getDemo">get</mt-button>
    <mt-button type="primary" @click="postDemo">post</mt-button>
    <mt-button type="primary" @click="gotoBack">返回</mt-button>
  </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui'
import { getDemo, postDemo } from '@/utils/api/demo.js'

export default {
  data () {
    return {
    }
  },
  mounted () {},
  methods: {
    gotoBack () {
      this.goBack()
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
    },
    postDemo () {
      Indicator.open()
      postDemo().then(res => {
        Indicator.close()
        Toast({
          message: res.data,
          position: 'bottom',
          duration: 1500
        })
      })
    }
  }
}
</script>
<style scoped lang="less">
</style>
