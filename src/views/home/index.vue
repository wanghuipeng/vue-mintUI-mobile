<template>
  <div class="home">
    <mt-button type="primary" @click="toDemo">跳转</mt-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    toDemo () {
      this.$router.push({ name: 'demo' })
    }
  }
}
</script>
<style scoped lang="less">
.home{
  width: 750px;
  background: #eee;
}
</style>
