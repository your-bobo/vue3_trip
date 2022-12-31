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
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stay">共{{ days }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDateStr }}</span>
        </div>
      </div>
    </div>
    <van-calendar v-model:show="showCalender" type="range" :round="false" :formatter="formatter" @confirm="calendarConfirm"/>

    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <!-- 热门建议 -->
    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="clickSearch">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';
import { ref, computed } from 'vue';
import { formatDate, getDateInterval } from '@/utils/date.js'
import useHomeStore from '@/stores/modules/home'
import useMainStore from '@/stores/modules/main'

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
const mainStore = useMainStore()
const { startDate, endDate, days } = storeToRefs(mainStore)
const startDateStr = computed(() => {
  return formatDate(startDate.value)
})
const endDateStr = computed(() => {
  return formatDate(endDate.value)
})
const showCalender = ref(false)
const formatter = (day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住';
  } else if (day.type === 'end') {
    day.bottomInfo = '离店';
  } 
  return day;
};

// 选择日期
const calendarConfirm = (values) => {
  const [start, end] = values;
  startDate.value = start;
  endDate.value = end;
  days.value = getDateInterval(start, end)
  showCalender.value = false;
};

// 建议区域
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

// 搜索
const clickSearch = () => {
  router.push({
    path: '/search',
    query: {
      startDate: startDate.value,
      endDate: endDate.value,
      days: days.value
    }
  })
}
</script>

<style lang="less" scoped>
.search_box {
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

.price-counter {
  .start {
    border-right: 1px solid  var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>