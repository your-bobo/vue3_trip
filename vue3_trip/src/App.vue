<template>
	<router-view v-slot="{ Component }">
	  <keep-alive include="trip_home">
	    <component :is="Component"/>
	  </keep-alive>
	</router-view>
  <tabbar v-if="!route.meta.hiddlenTabbar"/>
</template>

<script setup>
import { useRoute } from 'vue-router';
import tabbar from './components/tabbar/tab_bar.vue';

const route = useRoute()
</script>

<style scoped>
</style>
