<template>
  <div class="template">
    <mt-button type="primary" @click.native="setTrue">setLoadingTrue</mt-button>
    <p>初始值：{{isLoading}}</p>
    <mt-button type="primary" @click.native="setFalse">setLoadingFalse</mt-button>
    <p class="f24">接口数据：{{msg}}</p>
    <mt-button type="primary" @click.native="toLogin">返回</mt-button>
  </div>
</template>

<script>
import { avatarMenu } from '@/assets/js/api.js'
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState([
      'isLoading'
    ])
  },
  data () {
    return {
      msg: []
    }
  },
  beforeDestroy () {},
  created () {
    this.fetchData()
  },
  mounted () {},
  methods: {
    ...mapMutations([
      'setLoadingFalse',
      'setLoadingTrue'
    ]),
    toLogin () {
      this.$router.push({name: 'login'})
    },
    fetchData () {
      let params = {
        systemName: 'avatar'
      }
      avatarMenu(params).then(res => {
        this.msg = res.data
      })
    },
    setTrue () {
      this.setLoadingTrue()
    },
    setFalse () {
      this.setLoadingFalse()
    }
  },
  watch: {}
}
</script>
<style scoped lang="less">
.f24{
  font-size: 24px;
}
</style>
