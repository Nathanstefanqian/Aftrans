<template>
<nav class="my-sidebar">
    <div class="my-sidebar-subnav" @click="gotoDocument" :class="{ active: currentIndex === 0 }"><img src="@/assets/myText/doc.svg">文档翻译</div>
    <div class="my-sidebar-subnav" @click="gotoText" :class="{ active: currentIndex === 1 }"><img src="@/assets/myText/doc.svg">文本翻译</div>
    <div class="my-sidebar-subnav" @click="gotoAudio" :class="{ active: currentIndex === 2 }"><img src="@/assets/myText/doc.svg">语音翻译</div>
    <div class="my-sidebar-subnav" @click="gotoPicture" :class="{ active: currentIndex === 3 }"><img src="@/assets/myText/doc.svg">图片翻译</div>
    <div class="my-sidebar-subnav" @click="gotoPage" :class="{ active: currentIndex === 4 }"><img src="@/assets/myText/doc.svg">网页翻译</div>
</nav> 
</template>
<script>
export default {
  name: 'SideBar',
  data() {
    return {
      currentIndex: -1
    }
  },
  methods: {
    gotoDocument() {this.$router.push('/mydocument/index'),this.handleChangeColor(0)},
    gotoText() {this.$router.push('/mytext/index'),this.handleChangeColor(1)},
    gotoAudio() {this.$router.push('/myaudio/index'),this.handleChangeColor(2)},
    gotoPicture() {this.$router.push('/mypicture/index'),this.handleChangeColor(3)},
    gotoPage(){this.$router.push('/mypage/index'),this.handleChangeColor(4)},
    handleChangeColor(index) {
      if(index !== this.currentIndex) {
        this.currentIndex = index;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
    cursor: pointer;
    &:hover{
    //background-color:#4366f6;
    background: linear-gradient(to right, #FFFFFF 0%,#ADD8E6 100%);
    transition: all ease  1s;
    }
  }
}
.active {
  background: linear-gradient(to right, #FFFFFF 0%,#ADD8E6 100%);
  transition: all ease  1s;
}
</style>
