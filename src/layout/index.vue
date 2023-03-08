<template>
  <div class="my-layout">
      <Header />
      <div class="my-container">
      <side-bar />
      <app-main />
      </div>
  </div>
</template>
<script>
import AppMain from '@/layout/components/AppMain'
import SideBar from '@/layout/components/SideBar'
import Header  from '@/layout/components/Header'
export default {
  name: 'MyLayout',
  components: {
    AppMain, SideBar, Header
  }
}
</script>

<style lang="scss" scoped>
.my-container{
  display: flex;
  height: 772px;
}
</style>