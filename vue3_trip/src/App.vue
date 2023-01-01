<template>
	<router-view v-slot="{ Component }">
	  <keep-alive include="trip_home">
	    <component :is="Component"/>
	  </keep-alive>
	</router-view>
  <tabbar v-if="!route.meta.hiddlenTabbar"/>
	<loading></loading>
</template>

<script setup>
import loading from '@/components/loading/trip_loading.vue'
import { useRoute } from 'vue-router';
import tabbar from './components/tabbar/tab_bar.vue';

const route = useRoute()
</script>

<style scoped>
</style>
