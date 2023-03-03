<template>
  <div class="my-layout">
    <header class="my-header">
      <div class="my-header-menu">
        <div class="my-header-menu-logo"><img src="../assets/myText/xunfeilogo.svg"></div>
        <div class="my-header-menu-home"><img src="../assets/myText/home.svg"><span>平台首页</span></div>
      </div>
      <div class="my-header-user">
        <div class="my-header-user-login">登录</div>
        <div class="my-header-user-register">立即注册</div>
      </div>
    </header>
    <div class="my-container">
      <nav class="my-sidebar">
        <div class="my-sidebar-subnav"><img src="../assets/myText/doc.svg">文档翻译</div>
        <div class="my-sidebar-subnav"><img src="../assets/myText/doc.svg">文本翻译</div>
        <div class="my-sidebar-subnav"><img src="../assets/myText/doc.svg">语音翻译</div>
        <div class="my-sidebar-subnav"><img src="../assets/myText/doc.svg">图片翻译</div>
        <div class="my-sidebar-subnav"><img src="../assets/myText/doc.svg">网页翻译</div>
      </nav>
      <main class="my-main">
        <span>文本翻译</span>
        <div class="my-main-text">
          <div class="my-main-text-header">
            <div class="my-main-text-header-lang">
              <div class="my-main-text-header-lang-cur">当前语言 |</div>
              <div class="my-main-text-header-lang-auto"><span>自动选择</span><img src="../assets/myText/downarr.svg" ></div>
            </div>
            <img src="../assets/myText/translate.svg">
            <div class="my-main-text-header-lang">
              <div class="my-main-text-header-lang-cur">目标语言 |</div>
              <div class="my-main-text-header-lang-auto"><span>自动选择</span><img src="../assets/myText/downarr.svg" ></div>
            </div>
            <div class="my-main-text-header-targetlang"></div>
          </div>
          <div class="my-main-text-body">
            <textarea class="my-main-text-body-input" placeholder="请输入需要翻译的内容"></textarea>
            <div class="my-main-text-body-result"></div>
          </div>
        </div>  
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyText'
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
  display: flex;
  height:inherit;
  line-height: 62px;
  &-login{
    font-size: 16px;
    width: 32px;
    margin-right: 20px;
    color: #374567;
  }
  &-register{
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
.my-container{
  display: flex;
  height: 772px;
  .my-sidebar{
    width: 180px;
    height: inherit;
    background-color: #f6f8fc;
    img{
    margin-right: 10px;
    }
    &-subnav{
      height: 40px;
      width: inherit;
      line-height: 40px;
      margin: 5px 0;
      text-align: center;
      &:hover{
      //background-color:#4366f6;
      background: linear-gradient(to right, #FFFFFF 0%,#ADD8E6 100%);
      transition: all  0.5s;
      }
    }
  }
  .my-main{
    box-sizing: border-box;
    width: 1317px;
    height: inherit;
    padding: 40px;
    &-text{
      margin-top: 60px;
      &-header{
        display: flex;
        margin: 30px 0;
        width:inherit;
        &>img{
          margin: 0 10px;
        }
        &-lang{
          display: flex;
          width: 160px;
          height: 38px;
          font-size: 14px;
          border: 1px solid #d9d9d9;
          border-radius: 4px;
          &:hover{
            border: 1px solid #3867FF;
            transition: all 0.5s;
          }
          &-cur{
          color: #b1bbd2;
          line-height:38px;
          padding-left:10px;
          }
          &-auto{
            line-height: 38px;
            padding-left: 5px;
            display: flex;
            img{
              margin-left:3px;
              width:16px;
            }
          }
        }
      }
      &-body{
        display: flex;
        &-input{
          box-sizing: border-box;
          width: 600px;
          height: 320px;
          padding: 15px 14px;
          border: 1px solid #d9d9d9;
          resize: none;
          font-size: 28px;
        }
        &-result{
          width: 600px;
          height: 320px;
          background-color: #f0f2f9;
        }
      }
    }
  }
}
</style>
