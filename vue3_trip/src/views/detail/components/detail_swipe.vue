<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="item" v-for="(item, index) in swipeData" :key="index">
        <img :src="item.url" :alt="item.title">
      </van-swipe-item>
      <template #indicator="{ active, total }">
        <div class="indicator">{{ active + 1 }}/{{ total }}</div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import useDetailStore from '@/stores/modules/detail';
import { computed } from 'vue'

const detailStore = useDetailStore()
const swipeData = computed(() => {
  return detailStore.detailInfos?.mainPart?.topModule?.housePicture?.housePics
})
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }

    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      display: flex;
      padding: 2px 5px;
      font-size: 12px;
      color: #fff;
      background: rgba(0, 0, 0, 0.8);

      .item {
        margin: 0 3px;

        &.active {
          padding: 0 3px;
          border-radius: 5px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>