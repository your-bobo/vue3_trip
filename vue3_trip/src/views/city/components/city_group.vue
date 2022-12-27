<template>
  <div class="group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="#">热门</van-index-anchor>
      <div class="list">
        <template v-for="item in groupData.hotCities" :key="item.cityId">
          <div class="city" @click="handleClickCity(item.cityName)">{{ item.cityName }}</div>
        </template>
      </div>

      <template v-for="item in groupData.cities" :key="item.group">
        <van-index-anchor :index="item.group">{{ item.group }}</van-index-anchor>
        <template v-for="city in item.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="handleClickCity(city.cityName)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import useCityStore from '@/stores/modules/city.js'
import { useRouter } from 'vue-router';

const props = defineProps({
  groupData: {
    type: Object,
    default: () => ({})
  }
})

// 索引
const indexList = computed(() => {
  const list = props.groupData.cities?.map(item => item.group)
  list?.unshift('#')
  return list
})

//选择城市
const cityStore = useCityStore()
const router = useRouter()
const handleClickCity = (cityName) => {
  cityStore.currentCity = cityName
  router.back()
}


</script>

<style lang="less" scoped>
.group{
    .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px;
    padding-right: 25px;

    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      margin: 6px 0;
      margin-right: 10px;
    }
  }
}
</style>