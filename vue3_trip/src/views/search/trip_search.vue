<template>
  <div class="search">
    <h2>{{ params }}</h2>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute()
const params = {
  startDate: route.query.startDate,
  endDate: route.query.endDate,
  days: route.query.days
}
</script>

<style lang="less" scoped>
.search{
  
}
</style>