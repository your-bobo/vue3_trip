<template>
  <div class="detail">
    <detail_navbar></detail_navbar>
    <detail_swipe></detail_swipe>
    <van-tabs v-model:active="active" scrollspy sticky>
      <van-tab title="描述">
        <detail_desc></detail_desc>
      </van-tab>
      <van-tab title="设施">
        <detail_facility></detail_facility>
      </van-tab>
      <van-tab title="房东">
        <detail_landlord></detail_landlord>
      </van-tab>
      <van-tab title="评论">
        <detail_comment></detail_comment>
      </van-tab>
      <van-tab title="须知">
        <detail_notice></detail_notice>
      </van-tab>
      <van-tab title="周边">
        <detail_map></detail_map>
      </van-tab>
    </van-tabs>
    <detail_ambitus></detail_ambitus>
  </div>
  <div class="footer">
    <img src="@/assets/img/detail/icon_ensure.png" alt="">
    <div class="text">弘源旅途, 永无止境!</div>
  </div>
</template>

<script setup>
import detail_navbar from './components/detail_navbar.vue'
import detail_swipe from './components/detail_swipe.vue'
import detail_desc from './components/detail_desc.vue'
import detail_facility from './components/detail_facility.vue'
import detail_landlord from './components/detail_landlord.vue'
import detail_comment from './components/detail_comment.vue'
import detail_notice from './components/detail_notice.vue'
import detail_map from './components/detail_map.vue'
import detail_ambitus from './components/detail_ambitus.vue'

import { useRoute } from 'vue-router';
import useDetailStore from '@/stores/modules/detail';
import { ref } from 'vue'

const route = useRoute()
const detailStore = useDetailStore()
detailStore.houseId = route.query.houseId
detailStore.getDetailInfosResult()

const active = ref(0);
</script>

<style lang="less" scoped>
.detail {
  --van-tab-active-text-color: var(--primary-color);
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>