import { defineStore } from "pinia";
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from '@/services'

const useHomeStore = defineStore('home', {
  state: () => {
    return {
      hotSuggests: [],
      categories: [],

      currentPage: 1,
      houselist: []
    }
  },
  actions: {
    async getHotSuggestsAction() {
      const hotSuggestsResult = await getHomeHotSuggests()
      this.hotSuggests = hotSuggestsResult.data
    },
    async getCategoriesAction() {
      const categoriesResult = await getHomeCategories()
      this.categories = categoriesResult.data
    },
    async getHouselistAction() {
      const houselistResult = await getHomeHouselist(this.currentPage)
      this.houselist = [...this.houselist, ...houselistResult.data]
      this.currentPage++
      this.listLoading = false
    }
  }
})

export default useHomeStore