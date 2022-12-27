import { defineStore } from "pinia";
import { getHomeHotSuggests } from '@/services'

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggests: []
    }
  },
  actions: {
    async getHotSuggestsAction() {
      const hotSuggestsResult = await getHomeHotSuggests()
      this.hotSuggests = hotSuggestsResult.data
    }
  }
})

export default useHomeStore