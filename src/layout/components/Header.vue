<template>
  <header class="my-header">
    <div class="my-header-menu">
      <div class="my-header-menu-logo"><img src="@/assets/myText/xunfeilogo.svg"></div>
      <div class="my-header-menu-home"><img src="@/assets/myText/home.svg"><span>平台首页</span></div>
    </div>
    <div class="my-header-user">
      <div class="my-header-user-login">登录</div>
      <div class="my-header-user-register">立即注册</div>
    </div>
    </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.my-header
{
 box-sizing: border-box;
 display: flex;
 justify-content: space-between;
 width:100%;
 height: 62px;
 line-height: 80px;
 padding:0px 28px;
 box-shadow: 0 3px 17px 1px #e7eef9;
 &-menu{
  display: flex;
  &-logo{
    width:173px;
    height:inherit;
   }
  &-home{
    cursor: pointer;
    width:160px;
    height:62px;
    line-height:62px;
    text-align: center;
    font-size:16px;
    img{
      margin-bottom: -3px;
      margin-right: 6px;
      width: 18px;
    }
    &:hover{
      color: #4366f6;
      transition: all 0.5s;
    }
   }
 }
 &-user{
  cursor: pointer;
  display: flex;
  height:inherit;
  line-height: 62px;
  &-login{
    font-size: 16px;
    width: 32px;
    margin-right: 20px;
    color: #374567;
    &:hover{
      color: #4366f6;
      transition: all 0.5s;
    }
  }
  &-register{
    cursor: pointer;
    width: 88px;
    line-height: 32px;
    text-align: center;
    height: 32px;
    font-size: 14px;
    color:#fff;
    margin: auto 0;
    background-color: #4467f6;
  }
 }
}
</style>