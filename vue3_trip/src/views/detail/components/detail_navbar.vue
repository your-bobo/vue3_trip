<template>
  <div class="navbar">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script setup>

const onClickLeft = () => history.back();
</script>

<style lang="less" scoped>
.navbar {
  --van-font-size-md: 16px;
}
</style>