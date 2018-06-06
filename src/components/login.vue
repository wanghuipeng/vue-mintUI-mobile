<template>
  <div class="login">
    <mt-button type="primary" @click.native="toTemplate">登录</mt-button>
  </div>
</template>

<script>
import { avatarMenu, getToken } from '@/assets/js/api.js'

export default {
  name: 'login',
  data () {
    return {
      username: 'whp',
      password: '123456'
    }
  },
  methods: {
    toTemplate () {
      this.$router.push({name: 'template'})
    },
    submitForm (formName) {
      let {username, password} = this
      let params = `${getToken}?username=${username}&password=${password}&system=sale`
      this.isLoading = true
      // post特殊格式
      this.$ajax.post(params).then(res => {
        let data = res.data
        if (res.status === 200 && res.data.errNum === 0) {
          let token = data.access_token
          let user = data.user_info
          sessionStorage.setItem('user', JSON.stringify(user))
          sessionStorage.setItem('token', token)
          sessionStorage.setItem('user', JSON.stringify(user)) // 获取用户信息
          avatarMenu({systemName: 'avatar'}).then(res => {

          })
        }
      })
    }
  }
}
</script>

<style scoped lang='less'>
.login{
  background-color: #eff2f7;
  height: 100%;
  form{
    width: 350px;
    margin: 0 auto;
    padding-top: 10px;
  }
  .system-name{
    padding-left: 40px;
    text-align: center;
    margin-bottom: 20px;
    margin-top: 0;
    padding-top: 150px;
  }
  .loginBtn{
    width: 100%;
    margin-top: 10px;
  }
}
</style>
