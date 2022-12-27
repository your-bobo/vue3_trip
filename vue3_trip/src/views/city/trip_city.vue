<!-- eslint-disable vue/valid-v-for -->
<template>
  <div class="city">
    <div class="top">
      <van-search v-model="searchValue" show-action clearable placeholder="城市/区域/位置" shape="round" @cancel="searchCancel"/>
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities">
        <city_group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<script setup>
import city_group from './components/city_group.vue'

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia'

//搜索
const searchValue = ref('')
const router = useRouter()
const searchCancel = () => {
  router.back()
}

//tab切换
const tabActive = ref()

//获取数据
const cityStore = useCityStore()
cityStore.getCityAllAction()
const { allCities } = storeToRefs(cityStore) 

//传递数据
// const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
.city{
  :deep(.van-icon-search:before) {
    color: var(--primary-color);
  }

  .top {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
  }

  // 局部滚动 
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>