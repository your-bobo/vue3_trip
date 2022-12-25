<template>
  <div class="nav_bar">
    <van-nav-bar title="波波旅途" />
  </div>
</template>

<script setup>
</script>

<style lang="less" scoped>
.nav_bar {
  //通过修改vant的css变量来修改样式
  --van-nav-bar-title-text-color: var(--primary-color);
  --van-nav-bar-title-font-size: 18px;
}
</style>