<template>
  <div class="categories">
    <div class="item" v-for="item in categories" :key="item.id">
      <img :src="item.pictureUrl" :alt="item.pictures">
      <div class="text">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia';

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
.categories{
  margin: 10px 10px;
  display: flex;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;

    img {
      width: 33px;
    }

    .text {
      margin-top: 10px;
      font-size: 12px;
    }
  }
}
</style>