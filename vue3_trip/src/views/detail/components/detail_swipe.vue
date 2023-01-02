<template>
  <div class="swipe">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <van-swipe-item class="item" v-for="(item, index) in swipeData" :key="index">
        <img :src="item.url" :alt="item.title">
      </van-swipe-item>
      <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key, index) in swipeGroup" :key="index">
            <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key  }">
              <span class="text">{{ getTitle(value[0].title) }}</span>
              <span class="count" v-if="swipeData[active]?.enumPictureCategory == key">
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
import useDetailStore from '@/stores/modules/detail';
import { computed } from 'vue'

const detailStore = useDetailStore()
const swipeData = computed(() => {
  return detailStore.detailInfos?.mainPart?.topModule?.housePicture?.housePics || []
})

const swipeGroup = computed(() => {
  const group = {}
  for (const item of swipeData.value) {
    group[item.enumPictureCategory] = []
  }
  for (const item of swipeData.value) {
    const valueArray = group[item.enumPictureCategory]
    valueArray.push(item)
  }
  return group || []
})

const getTitle = (title) => {
  return title.replace('：', '').replace('【', '').replace('】', '')
}

const getCategoryIndex = (item) => {
  const valueArray = swipeGroup.value[item.enumPictureCategory]
  return valueArray.findIndex(data => data === item) + 1
}
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