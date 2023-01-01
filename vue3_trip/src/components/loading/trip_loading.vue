<template>
  <div class="loading" v-show="isLoading" @click="loadingClick">
    <div class="bg">
			<img src="@/assets/img/home/full-screen-loading.gif" alt="loading">
		</div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores/modules/main'
import { storeToRefs } from 'pinia';

const mainStore = useMainStore()
const { isLoading } = storeToRefs(mainStore)
const loadingClick = () => {
	mainStore.isLoading = false
}
</script>

<style lang="less" scoped>
/* 设置loading时的css */
.loading {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0; 
	right: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(0, 0, 0, .3);
}

.bg {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 104px;
  height: 104px;
	background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;

	img {
		width: 70px;
		height: 70px;
		margin-bottom: 8px;
	}
}
</style>