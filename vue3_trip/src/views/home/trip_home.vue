<template>
  <div class="trip_home">
    <nav_bar></nav_bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="banner">
    </div>
    <search_box></search_box>
  </div>
</template>

<script setup>
import nav_bar from './components/nav_bar.vue';
import search_box from './components/search_box.vue';
import useHomeStore from '@/stores/modules/home'

// 请求数据
const homeStore = useHomeStore()
homeStore.getHotSuggestsAction()

</script>

<style lang="less" scoped>
.trip_home{
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>