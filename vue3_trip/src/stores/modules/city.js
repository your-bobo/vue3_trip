import { getCityAll } from '@/services'
import { defineStore } from 'pinia'

const useCityStore = defineStore('city', {
  state: () => {
    return {
      allCities: {},
      currentCity: '广州'
    }
  },
  actions: {
    async getCityAllAction() {
      const getCityAllResult = await getCityAll()
      this.allCities = getCityAllResult.data
    }
  }
})

export default useCityStore