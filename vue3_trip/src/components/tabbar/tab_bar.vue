<!-- eslint-disable no-unused-vars -->
<template>
  <div class="tab_bar">
    <van-tabbar v-model="active" active-color="#ff9854" route>
      <template v-for="item in tabbarData" :key="item.text">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon="props">
            <img v-if="props.active" :src="getAssetURL(item.imageActive)">
            <img v-else :src="getAssetURL(item.image)">
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import tabbarData from '@/assets/data/tabbar.js'
import { getAssetURL } from '@/utils/load_assets.js'
import { ref } from 'vue';

const active = ref(0);

</script>

<style lang="less" scoped>
.tab_bar {
  :deep(.van-tabbar-item__icon img) {
    height: 26px;
  }
}
</style>