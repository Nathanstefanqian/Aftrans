<template>
  <section class="my-main">
    <router-view />
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>
<style lang="scss" scoped>
.my-main{
  box-sizing: border-box;
  width: 1317px;
  height: inherit;
  padding: 40px;
}
</style>