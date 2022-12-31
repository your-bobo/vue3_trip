<template>
  <div class="trip_home" ref="homeRef">
    <div class="search-bar" v-if="isShowSearchBar">
      <search_bar/>
    </div>
    <nav_bar></nav_bar>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="banner">
    </div>
    <search_box></search_box>
    <categories_box></categories_box>
    <content_box></content_box>
  </div>
</template>

<script>
  export default { name: "trip_home" }
</script>

<script setup>
import nav_bar from './components/nav_bar.vue';
import search_box from './components/search_box.vue';
import categories_box from './components/categories_box.vue'
import content_box from './components/content_box.vue';
import search_bar from '@/components/search_bar/search_bar.vue'

import useHomeStore from '@/stores/modules/home'
import useScroll from '@/hooks/useScroll'
import { ref, watch, computed, onActivated } from 'vue'

// 请求数据
const homeStore = useHomeStore()
homeStore.getHotSuggestsAction()
homeStore.getCategoriesAction()
homeStore.getHouselistAction()

// 监听滚动到底部
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if(newValue) {
    homeStore.getHouselistAction().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 360
})

// 跳转回home时, 保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.trip_home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
}

.banner {
  img {
    width: 100%;
  }
}

.search-bar {
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
}
</style>