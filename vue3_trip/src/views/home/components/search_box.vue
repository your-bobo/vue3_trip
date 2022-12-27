<template>
  <div class="search_box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line ">
      <div class="city" @click="cityClick">{{ currentCity }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 日期范围 -->
    <div class="section date-range bottom-gray-line " @click="showCalender = true">
      <div class="start">
        <div class="date" @click="show = true">
          <span class="tip">入住</span>
          <span class="time">6月1日</span>
        </div>
        <div class="stay">共1晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">6月1日</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalender" type="range" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const router = useRouter()

// 位置/城市
const cityClick = () => {
  router.push("/city")
}
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功:", res)
  }, err => {
    console.log("获取位置失败:", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}
const cityStore = useCityStore()
const { currentCity } = storeToRefs(cityStore)

// 日期范围
const showCalender = ref(false)
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
    color: #333;
    font-size: 15px;
  }

  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 2px;
      color: #666;
      font-size: 12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  height: 44px;

  .start {
    flex: 1;
    display: flex;
    height: 44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;

    .tip {
      font-size: 12px;
      color: #999;
    }

    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}
</style>